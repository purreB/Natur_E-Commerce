import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';
import { cartState } from '../../atoms/cartState';
import CartItem from '../CartItem/CartItem';
import { useRecoilState } from 'recoil';
import { Product } from '../../models/Products';
import { productState } from '../../atoms/productsState';

const drawerWidth = 240;
function Cart() {
  const [cartList, setcartList] = useRecoilState(cartState);
  const [storeList, setstoreList] = useRecoilState(productState);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    let fetchedCart = JSON.parse(localStorage.getItem('Cart')!);
    if (fetchedCart === undefined) {
      return;
    } else {
      setcartList(fetchedCart);
    }
  }, []);

  //* Maybe this can calculate sum??
  // {cartList?.map((c) => {
  //   let itemSum = c.price * c.inCart;
  //   let newTotalSum = itemSum + totalSum;
  //   setTotalSum(newTotalSum);
  // })}
  function removeFromCart(product: Product) {
    let fetchedCart = JSON.parse(localStorage.getItem('Cart')!);
    let fetchedStore = JSON.parse(localStorage.getItem('Store')!);
    let productRemoved: boolean = false;
    if (product.inCart > 1) {
      fetchedCart.map((c: any) => {
        if (c.id === product.id) {
          c.inCart = c.inCart - 1;
          localStorage.setItem('Cart', JSON.stringify(fetchedCart));
          setcartList(fetchedCart);
        }
      });
      fetchedStore.map((p: any) => {
        if (p.id === product.id) {
          p.inStore = p.inStore + 1;
          p.inCart = product.inCart - 1;
          localStorage.setItem('Store', JSON.stringify(fetchedStore));
          setstoreList(fetchedStore);
        }
      });
    } else if (product.inCart <= 1) {
      fetchedCart.map((c: any) => {
        if (c.id === product.id) {
          c.inCart = 0;
          let index = fetchedCart.indexOf(c);
          fetchedCart.splice(index, 1);
          productRemoved = true;
          if (productRemoved) {
            localStorage.setItem('Cart', JSON.stringify(fetchedCart));
            setcartList(fetchedCart);
          }
        }
      });

      fetchedStore.map((p: any) => {
        if (p.id === product.id) {
          p.inStore = p.inStore + 1;
          p.inCart = p.inCart * 0;
          localStorage.setItem('Store', JSON.stringify(fetchedStore));
          setstoreList(fetchedStore);
        }
      });
    }
  }

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List className="cart-list">
          {cartList
            ? cartList?.map((c) => (
                <CartItem
                  key={c.id}
                  product={c}
                  removeFromCart={() => removeFromCart(c)}
                />
              ))
            : null}
        </List>
        <Divider />
        <p>Total sum here</p>
      </Drawer>
    </div>
  );
}

export default Cart;
