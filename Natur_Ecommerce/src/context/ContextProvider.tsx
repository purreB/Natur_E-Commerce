import { createContext } from 'react';
import { productList } from '../models/Products';

export const ProductsContext = createContext(productList);

function ContextProvider(props: any) {
  return (
    <ProductsContext.Provider value={productList}>
      {props.children}
    </ProductsContext.Provider>
  );
}
export default ContextProvider;
