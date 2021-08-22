import { IProduct } from 'models/Product';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Image from 'components/Image';
import Ratings from 'components/Ratings';
import css from './productItem.module.scss';

interface IProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProps) => {
  const { name, description, image, ratings } = product;

  return (
    <section className={css.productItem}>
      <div className={css.imageWrapper}>
        <Image url={image} alt={name} />
      </div>
      <Title>{name}</Title>
      <Paragraph className={css.text}>{description}</Paragraph>
      <div className={css.ratingsWrapper}>
        <Ratings ratings={ratings} />
      </div>
    </section>
  );
};

export default ProductItem;
