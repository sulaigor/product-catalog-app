import { getProductsCount } from 'data/products';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import { dummyFunction } from 'utils/dummy';
import productsReducer, { initialState } from './productsReducer';
import {
  loadProductsAction,
  setLoadingAction,
  setProductsAction,
  setTotalCountAction,
  unsetLoadingAction,
} from './productsReducer/actions';
import { ProductsContextType } from './types';
import { getInitialProducts, getNewProducts } from './utils';

const Context = createContext<ProductsContextType>({
  ...initialState,
  loadNewProducts: dummyFunction,
});

const ProductsContext = ({ children }: IProps) => {
  const [reducerState, dispatch] = useReducer(productsReducer, initialState);
  const { products } = reducerState;

  useEffect(() => {
    loadInitialProducts();
  }, []);

  const setLoading = () => dispatch(setLoadingAction());
  const unsetLoading = () => dispatch(unsetLoadingAction());

  const loadInitialProducts = async () => {
    setLoading();
    const newProducts = await getInitialProducts();
    const productsCount = await getProductsCount();

    if (newProducts.length > 0) {
      dispatch(setProductsAction(newProducts));
    }

    if (productsCount > 0) {
      dispatch(setTotalCountAction(productsCount));
    }

    unsetLoading();
  };

  const loadNewProducts = async () => {
    if (products) {
      setLoading();
      const newProducts = await getNewProducts(products?.length);
      dispatch(loadProductsAction(newProducts));
      unsetLoading();
    }
  };

  const contextValue: ProductsContextType = {
    ...reducerState,
    loadNewProducts,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ProductsContext;
export const useProductsContext = () => useContext(Context);
