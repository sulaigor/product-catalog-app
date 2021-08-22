import Link from 'components/Link';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';
import { getGoogleLink } from './utils';
import css from './shops.module.scss';

interface IProps {
  productName: string;
}

const Shops = ({ productName }: IProps) => {
  return (
    <section className={css.shops}>
      <Title>Available in shops:</Title>
      <div className={css.shopWrapper}>
        <Paragraph>Google shop</Paragraph>
        <Paragraph>Price unavailable...</Paragraph>
        <Link to={getGoogleLink(productName)}>Go to shop ➫</Link>
      </div>
    </section>
  );
};

export default Shops;
