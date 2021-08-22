import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { DEFAULT_PATH } from 'const/screenPaths';
import { useProductsContext } from 'contexts/ProductsContext';
import Screen from 'components/Screen';
import Link from 'components/Link';
import NotFoundRedirect from 'components/NotFoundRedirect';
import ProductDetail from './ProductDetail';
import { IProductDetailParams } from './types';
import css from './productDetailScreen.module.scss';

const ProductDetailScreen = () => {
  const { productId } = useParams<IProductDetailParams>();
  const { products } = useProductsContext();

  const product = useMemo(() => {
    if (products) {
      return products.find(({ id }) => id === productId) ?? null;
    }
    return null;
  }, [products]);

  if (!product) {
    return <NotFoundRedirect />;
  }

  return (
    <Screen>
      <div className={css.linkWrapper}>
        <Link to={DEFAULT_PATH}>↩ Go back</Link>
      </div>
      <ProductDetail product={product} />
    </Screen>
  );
};

export default ProductDetailScreen;
