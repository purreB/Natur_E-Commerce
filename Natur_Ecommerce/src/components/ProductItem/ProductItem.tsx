import { Product } from '../../models/Products';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  return (
    <ListItem alignItems="flex-start" data-testid={'product' + product.id}>
      <ListItemText
        primary={product.name}
        secondary={product.price + '' + 'kr'}
      />
      <ListItemText>{product.inStore} in store</ListItemText>
      <button>Add to cart</button>
    </ListItem>
  );
};

export default ProductItem;
