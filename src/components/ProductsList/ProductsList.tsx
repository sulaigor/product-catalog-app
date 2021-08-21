import { useProductsContext } from 'contexts/ProductsContext';
import Empty from 'components/Empty';
import LoadingSpinner from 'components/LoadingSpinner';
import ProductItem from './ProductItem';
import css from './productsList.module.scss';

const ProductsList = () => {
  const { products, loading } = useProductsContext();

  if (loading) {
    return <LoadingSpinner>Loading products...</LoadingSpinner>;
  }

  if (!products) {
    return <Empty>No products found...</Empty>;
  }

  return (
    <ul className={css.list}>
      {products.map((product) => (
        <li key={product.id} className={css.itemWrapper}>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
