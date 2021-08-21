import { INITIAL_ITEMS_COUNT, PAGINATION_ITEMS_COUNT } from 'const/pagination';
import { getProductsData } from 'data/products';
import { IProduct } from 'models/Product';

const getProductPart = (products: IProduct[], startIndex: number, itemsCount: number) =>
  [...products].slice(startIndex, startIndex + itemsCount);

const getNextProducts = async (startIndex: number, itemsCount: number): Promise<IProduct[]> => {
  try {
    const products = await getProductsData();
    return getProductPart(products, startIndex, itemsCount);
  } catch (err) {
    console.error('Get next products error:', err);
    return [];
  }
};

export const getInitialProducts = (): Promise<IProduct[]> => getNextProducts(0, INITIAL_ITEMS_COUNT);
export const getNewProducts = (currentProdCount: number): Promise<IProduct[]> =>
  getNextProducts(currentProdCount, PAGINATION_ITEMS_COUNT);
