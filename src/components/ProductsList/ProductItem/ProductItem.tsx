import { IProduct } from 'models/Product';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';

interface IProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProps) => {
  const { name, description } = product;

  return (
    <div>
      <Title>{name}</Title>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default ProductItem;
