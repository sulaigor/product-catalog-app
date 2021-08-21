import { useProductsContext } from 'contexts/ProductsContext';
import LoadingSpinner from 'components/LoadingSpinner';

const ProductsList = () => {
  const { products, loading } = useProductsContext();

  if (loading) {
    return <LoadingSpinner>Loading products...</LoadingSpinner>;
  }

  if (!products) {
    return <div>no products</div>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default ProductsList;
