import { useContext } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { ProductsContext } from '../../context/ContextProvider';

function ProductList() {
  const defaultProductContext = useContext(ProductsContext);
  const defaultProductList = defaultProductContext.listOfProducts;

  return (
    <ul className="contact-list">
      {defaultProductList.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </ul>
  );
}

export default ProductList;
