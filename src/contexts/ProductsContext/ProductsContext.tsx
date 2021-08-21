import { createContext, useContext, useEffect, useReducer } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import productsReducer, { initialState } from './productsReducer';
import { setLoadingAction, setProductsAction, unsetLoadingAction } from './productsReducer/actions';
import { ProductsContextType } from './types';
import { getInitialProducts } from './utils';

const Context = createContext<ProductsContextType>({
  ...initialState,
});

const ProductsContext = ({ children }: IProps) => {
  const [reducerState, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    loadInitialProducts();
  }, []);

  const setLoading = () => dispatch(setLoadingAction());
  const unsetLoading = () => dispatch(unsetLoadingAction());

  const loadInitialProducts = async () => {
    setLoading();
    const products = await getInitialProducts();

    if (products.length > 0) {
      dispatch(setProductsAction(products));
    }

    unsetLoading();
  };

  const contextValue: ProductsContextType = {
    ...reducerState,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ProductsContext;
export const useProductsContext = () => useContext(Context);
