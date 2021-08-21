import { IProduct } from 'models/Product';

interface IProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProps) => {
  const { name } = product;

  return <div>{name}</div>;
};

export default ProductItem;
