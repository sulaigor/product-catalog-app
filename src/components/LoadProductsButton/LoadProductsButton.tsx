import Button from 'components/Button';
import { useProductsContext } from 'contexts/ProductsContext';
import css from './loadProductsButton.module.scss';

const LoadProductsButton = () => {
  const { products, totalCount, loading, loadNewProducts } = useProductsContext();
  const currentProductsCount = products ? products.length : 0;

  if (totalCount > 0 && currentProductsCount < totalCount) {
    return (
      <div className={css.wrapper}>
        <Button className={css.btn} loading={loading} onClick={loadNewProducts}>
          Load more...
        </Button>
      </div>
    );
  }

  return null;
};

export default LoadProductsButton;
