import { createContext, useContext } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import { ProductsContextType } from './types';

const Context = createContext<ProductsContextType>({});

const ProductsContext = ({ children }: IProps) => {
  const contextValue: ProductsContextType = {};

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ProductsContext;
export const useProductsContext = () => useContext(Context);
