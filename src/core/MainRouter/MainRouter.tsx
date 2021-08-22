import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DEFAULT_PATH, NOT_FOUND_PATH } from 'const/screenPaths';
import CatalogScreen from 'screens/CatalogScreen';
import NotFoundScreen from 'screens/NotFoundScreen';
import NotFoundRedirect from 'components/NotFoundRedirect';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={DEFAULT_PATH}>
          <CatalogScreen />
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
