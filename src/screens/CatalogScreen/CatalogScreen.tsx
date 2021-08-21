import LoadProductsButton from 'components/LoadProductsButton';
import ProductsList from 'components/ProductsList';
import CatalogTitle from './CatalogTitle';

const CatalogScreen = () => {
  return (
    <>
      <CatalogTitle />
      <ProductsList />
      <LoadProductsButton />
    </>
  );
};

export default CatalogScreen;
