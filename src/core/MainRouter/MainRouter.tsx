import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DEFAULT_PATH, NOT_FOUND_PATH, PRODUCT_DETAIL_PATH } from 'const/screenPaths';
import CatalogScreen from 'screens/CatalogScreen';
import NotFoundScreen from 'screens/NotFoundScreen';
import ProductDetailScreen from 'screens/ProductDetailScreen';
import NotFoundRedirect from 'components/NotFoundRedirect';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={DEFAULT_PATH}>
          <CatalogScreen />
        </Route>
        <Route exact path={PRODUCT_DETAIL_PATH}>
          <ProductDetailScreen />
        </Route>
        <Route path={NOT_FOUND_PATH}>
          <NotFoundScreen />
        </Route>
        <Route path='*'>
          <NotFoundRedirect />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
