import { Redirect } from 'react-router-dom';
import { NOT_FOUND_PATH } from 'const/screenPaths';

const NotFoundRedirect = () => {
  return <Redirect to={NOT_FOUND_PATH} />;
};

export default NotFoundRedirect;
