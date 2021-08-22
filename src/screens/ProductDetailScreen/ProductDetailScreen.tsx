import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from 'contexts/ProductsContext';
import Screen from 'components/Screen';
import NotFoundRedirect from 'components/NotFoundRedirect';
import ProductDetail from './ProductDetail';
import { IProductDetailParams } from './types';

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
      <ProductDetail product={product} />
    </Screen>
  );
};

export default ProductDetailScreen;
