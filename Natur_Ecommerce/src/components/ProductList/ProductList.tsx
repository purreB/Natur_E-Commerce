import { useContext } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { ProductsContext } from '../../context/ContextProvider';
import List from '@mui/material/List';
import { Box, Grid } from '@mui/material';
import { Product } from '../../models/Products';

function ProductList(): JSX.Element {
  const defaultProductContext = useContext(ProductsContext);
  const defaultProductList = defaultProductContext.listOfProducts;

  function addToCart(product: Product) {
    console.log(product);
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} m={6}>
          <List dense={false} className="contact-list">
            {defaultProductList.map((p) => (
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
