import ProductList from './components/ProductList/ProductList';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <h1>App Render</h1>
        <ProductList />
      </ContextProvider>
    </div>
  );
}

export default App;
