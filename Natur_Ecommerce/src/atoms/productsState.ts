import { atom } from 'recoil';
import { productList } from '../models/Products';

export const productState = atom({
  key: 'productState',
  default: productList,
  dangerouslyAllowMutability: true,
});
