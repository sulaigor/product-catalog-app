import Screen from 'components/Screen';
import LoadProductsButton from 'components/LoadProductsButton';
import ProductsList from 'components/ProductsList';
import CatalogTitle from './CatalogTitle';

const CatalogScreen = () => {
  return (
    <Screen>
      <CatalogTitle />
      <ProductsList />
      <LoadProductsButton />
    </Screen>
  );
};

export default CatalogScreen;
