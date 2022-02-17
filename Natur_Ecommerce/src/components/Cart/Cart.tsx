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

const drawerWidth = 240;
function Cart() {
  const [cartList, setcartList] = useRecoilState(cartState);
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
    console.log(product);
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
