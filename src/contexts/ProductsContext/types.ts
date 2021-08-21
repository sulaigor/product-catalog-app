import { IReducerState } from './productsReducer';

interface IProductsContextActions {
  loadNewProducts: () => void;
}

export type ProductsContextType = IReducerState & IProductsContextActions;
