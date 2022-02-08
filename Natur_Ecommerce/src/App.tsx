import ContextProvider, { ProductsContext } from './context/ContextProvider';
import { useContext } from 'react';
function App() {
  const defaultProductList = useContext(ProductsContext);
  console.log(defaultProductList);
  return (
    <div className="App">
      <ContextProvider>
        <h1>App Render</h1>
      </ContextProvider>
    </div>
  );
}

export default App;
