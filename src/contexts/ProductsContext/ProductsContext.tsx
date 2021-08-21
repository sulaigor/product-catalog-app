import { createContext, useContext, useReducer } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import productsReducer, { initialState } from './productsReducer';
import { ProductsContextType } from './types';

const Context = createContext<ProductsContextType>({
  ...initialState,
});

const ProductsContext = ({ children }: IProps) => {
  const [reducerState] = useReducer(productsReducer, initialState);

  const contextValue: ProductsContextType = {
    ...reducerState,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ProductsContext;
export const useProductsContext = () => useContext(Context);
