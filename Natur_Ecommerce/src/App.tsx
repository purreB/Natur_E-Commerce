import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import Login from './components/Login/Login';
import ProductList from './components/ProductList/ProductList';
import './App.css';

function App() {
  const [userFound, setuserFound] = useState(Boolean);
  useEffect(() => {
    if (localStorage.getItem('User')) {
      setuserFound(true);
    } else {
      setuserFound(false);
    }
  }, []);

  return <RecoilRoot>{userFound ? <ProductList /> : <Login />}</RecoilRoot>;
}

export default App;
