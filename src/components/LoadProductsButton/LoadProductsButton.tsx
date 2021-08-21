import Button from 'components/Button';
import css from './loadProductsButton.module.scss';

const LoadProductsButton = () => {
  const handleLoadMore = () => {};

  return (
    <div className={css.wrapper}>
      <Button className={css.btn} onClick={handleLoadMore}>
        Load more...
      </Button>
    </div>
  );
};

export default LoadProductsButton;
