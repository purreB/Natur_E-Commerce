import ProductItem from '../ProductItem/ProductItem';
import List from '@mui/material/List';
import { Box, Grid } from '@mui/material';
import { Product } from '../../models/Products';
import { useRecoilState } from 'recoil';
import { productState } from '../../atoms/productsState';
import { ChangeEvent, useEffect, useState } from 'react';
import { cartState } from '../../atoms/cartState';

function ProductList(): JSX.Element {
  const [productList, setProductList] = useRecoilState(productState);
  const [cartList, setcartList] = useRecoilState(cartState);
  const [filterState, setFilterState] = useState('');

  useEffect(() => {
    if (localStorage.getItem('Store')) {
      let storageStore = JSON.parse(localStorage.getItem('Store')!);
      setProductList([...storageStore]);
    } else {
      localStorage.setItem('Store', JSON.stringify(productList));
    }
  }, []);

  const filteredProducts = productList.filter(
    (product) =>
      product.name.toLowerCase().search(filterState.toLowerCase()) != -1
  );

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setFilterState(event.target.value);
  }

  const renderAllProducts = productList.map((p) => (
    <ProductItem product={p} key={p.id} addToCart={() => addToCart(p)} />
  ));

  const renderFilteredProducts = filteredProducts?.map((p) => (
    <ProductItem product={p} key={p.id} addToCart={() => addToCart(p)} />
  ));
  function addToCart(product: Product) {
    let newProductList = productList;
    newProductList.map((p: any) => {
      if (p.id === product.id) {
        if (p.inStore >= 1) {
          p.inStore = p.inStore - 1;
          setProductList([...newProductList]);
          //* Here we update the cart
          localStorage.setItem('Store', JSON.stringify(productList));
          if (cartList && cartList.length > 0) {
            let newCartList = cartList;
            setcartList([product, ...newCartList]);
          } else {
            setcartList([product]);
          }
        } else {
          console.log('No more in store');
        }
      }
    });
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} m={6}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Filter by name.."
              onChange={(e) => onChangeHandler(e)}
            />
          </form>
          <List dense={false} className="contact-list" data-testid="ulTest">
            {filterState === '' ? renderAllProducts : renderFilteredProducts}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductList;
