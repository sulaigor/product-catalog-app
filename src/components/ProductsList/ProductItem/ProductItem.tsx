import { IProduct } from 'models/Product';
import { getProductDetailPath } from 'utils/router';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Image from 'components/Image';
import Ratings from 'components/Ratings';
import Parameters from 'components/Parameters';
import Link from 'components/Link';
import css from './productItem.module.scss';

interface IProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProps) => {
  const { id: productId, name, description, image, ratings, parameters } = product;

  return (
    <Link to={getProductDetailPath(productId)}>
      <section className={css.productItem}>
        <div className={css.imageWrapper}>
          <Image url={image} alt={name} />
          <div className={css.paramsWrapper}>
            <Parameters className={css.params} parameters={parameters} />
          </div>
        </div>
        <Title>{name}</Title>
        <Paragraph className={css.text}>{description}</Paragraph>
        <div className={css.ratingsWrapper}>
          <Ratings ratings={ratings} />
        </div>
      </section>
    </Link>
  );
};

export default ProductItem;
