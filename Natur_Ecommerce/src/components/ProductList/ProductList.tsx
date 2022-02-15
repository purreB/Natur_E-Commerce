import ProductItem from '../ProductItem/ProductItem';
import List from '@mui/material/List';
import { Box, Grid } from '@mui/material';
import { Product } from '../../models/Products';
import { useRecoilState } from 'recoil';
import { productState } from '../../atoms/productsState';

function ProductList(): JSX.Element {
  const [productList, setProductList] = useRecoilState(productState);
  console.log('pList log before func call', productList);

  function addToCart(product: Product) {
    console.log(product);
    let newProductList = productList;
    newProductList.map((p: any) => {
      if (p.id === product.id) {
        if (p.inStore >= 1) {
          p.inStore = p.inStore - 1;
          setProductList([...newProductList]);
          console.log('Clog after setProductList', productList);
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
          <List dense={false} className="contact-list">
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
