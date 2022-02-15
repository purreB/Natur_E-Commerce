import ProductItem from '../ProductItem/ProductItem';
import List from '@mui/material/List';
import { Box, Grid } from '@mui/material';
import { Product } from '../../models/Products';
import { useRecoilState } from 'recoil';
import { productState } from '../../atoms/productsState';
import { useEffect } from 'react';

function ProductList(): JSX.Element {
  const [productList, setProductList] = useRecoilState(productState);

  useEffect(() => {
    if (localStorage.getItem('Store')) {
      let storageStore = JSON.parse(localStorage.getItem('Store')!);
      setProductList([...storageStore]);
    } else {
      localStorage.setItem('Store', JSON.stringify(productList));
    }
  }, []);

  function addToCart(product: Product) {
    let newProductList = productList;
    newProductList.map((p: any) => {
      if (p.id === product.id) {
        if (p.inStore >= 1) {
          p.inStore = p.inStore - 1;
          setProductList([...newProductList]);
          //* Here we also set localStorage and update the cart
          localStorage.setItem('Store', JSON.stringify(productList));
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
          <List dense={false} className="contact-list" data-testid="ulTest">
            {productList.map((p) => (
              <ProductItem
                key={p.id}
                product={p}
                addToCart={() => addToCart(p)}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductList;
