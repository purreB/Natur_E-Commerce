export interface Product {
  name: string;
  price: number;
  inStore: number;
}

interface ProductList {
  products: Array<Product>;
}

export let productList: ProductList = {
  products: [
    { name: 'tent', price: 500, inStore: 5 },
    { name: 'thermos', price: 110, inStore: 20 },
    { name: 'flashlight', price: 200, inStore: 10 },
    { name: 'matches', price: 20, inStore: 100 },
    { name: 'rope', price: 300, inStore: 15 },
  ],
};
