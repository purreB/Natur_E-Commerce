export interface Product {
  name: string;
  price: number;
  inStore: number;
  inCart: number | undefined;
}

interface ProductList {
  products: Array<Product>;
}

export let productList: ProductList = {
  products: [
    { name: 'tent', price: 500, inStore: 5, inCart: 0 },
    { name: 'thermos', price: 110, inStore: 20, inCart: 0 },
    { name: 'flashlight', price: 200, inStore: 10, inCart: 0 },
    { name: 'matches', price: 20, inStore: 100, inCart: 0 },
    { name: 'rope', price: 300, inStore: 15, inCart: 0 },
  ],
};
