import { IChildrenProps as IProps } from 'types/props';
import ProductsContext from 'contexts/ProductsContext';

const ContextProvider = ({ children }: IProps) => {
  return <ProductsContext>{children}</ProductsContext>;
};

export default ContextProvider;
