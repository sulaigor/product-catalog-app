import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DEFAULT_PATH } from 'const/screenPaths';
import CatalogScreen from 'screens/CatalogScreen';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={DEFAULT_PATH}>
          <CatalogScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
