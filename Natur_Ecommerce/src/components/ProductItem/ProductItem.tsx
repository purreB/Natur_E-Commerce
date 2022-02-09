import { Product } from '../../models/Products';

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  return (
    <li data-testid={'product' + product.id}>
      <h3>{product.name}</h3>
    </li>
  );
};

export default ProductItem;
