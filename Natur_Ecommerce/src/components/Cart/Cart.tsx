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
  const [itemsFound, setItemsFound] = useState(false);

  useEffect(() => {
    // if (localStorage.getItem('Cart')) {
    //   let cart = JSON.parse(localStorage.getItem('Cart')!);
    //   setcartList([...cart]);
    // } else {
    //   return;
    // }
    console.log('Log on change in Cart comp', cartList);
  }, [cartList]);

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
          {itemsFound
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
