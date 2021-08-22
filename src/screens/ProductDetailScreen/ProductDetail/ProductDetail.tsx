import classNames from 'classnames';
import { IProduct } from 'models/Product';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Ratings from 'components/Ratings';
import Image from 'components/Image';
import Parameters from 'components/Parameters';
import css from './productDetail.module.scss';

interface IProps {
  product: IProduct;
}

const ProductDetail = ({ product }: IProps) => {
  const { name, description, image, parameters, ratings } = product;

  return (
    <section className={css.productDetail}>
      <div className={css.productHeader}>
        <div className={classNames(css.column, css.imageWrapper)}>
          <Image url={image} alt={name} />
        </div>
        <div className={css.column}>
          <div className={css.titleWrapper}>
            <Title>{name}</Title>
            <div className={css.ratingsWrapper}>
              <Ratings ratings={ratings} />
            </div>
          </div>
          <Paragraph>{description}</Paragraph>
          <Parameters className={css.params} parameters={parameters} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
