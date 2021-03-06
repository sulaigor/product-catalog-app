import { IProduct, Product } from 'models/Product';
import { getRandomInteger } from 'utils/random';

// Products data singleton
let products: IProduct[] | null = null;
const PRODUCTS_TIMEOUT = 2000;
const COUNT_TIMEOUT = 200;

const generateProducts = () => {
  const productsCount = getRandomInteger(100, 90);
  products = [];

  while (products.length < productsCount) {
    products.push(new Product());
  }
};

export const getProductsData = (): Promise<IProduct[]> => {
  if (!products) {
    // Generate products once
    generateProducts();
  }

  // Simulate API call
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (products) resolve(products);
      else reject(new Error('Products not exists!'));
    }, PRODUCTS_TIMEOUT)
  );
};

export const getProductsCount = (): Promise<number> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products) resolve(products.length);
      else reject(new Error('Products not loaded!'));
    }, COUNT_TIMEOUT);
  });
