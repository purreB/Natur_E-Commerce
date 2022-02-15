import { RecoilRoot } from 'recoil';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>App Render</h1>
        <ProductList />
      </div>
    </RecoilRoot>
  );
}

export default App;
