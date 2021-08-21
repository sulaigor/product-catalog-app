import { useProductsContext } from 'contexts/ProductsContext';
import Divider from 'components/Divider';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';
import css from './catalogTitle.module.scss';

const CatalogTitle = () => {
  const { totalCount } = useProductsContext();

  return (
    <div className={css.wrapper}>
      <Title>Product catalog</Title>
      {totalCount > 0 && <Paragraph>There is {totalCount} products</Paragraph>}
      <Divider />
    </div>
  );
};

export default CatalogTitle;
