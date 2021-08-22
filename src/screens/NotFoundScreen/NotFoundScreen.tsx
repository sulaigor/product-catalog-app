import Screen from 'components/Screen';
import Empty from 'components/Empty';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';
import Center from 'components/Center';
import Link from 'components/Link';
import { DEFAULT_PATH } from 'const/screenPaths';
import css from './notFoundScreen.module.scss';

const NotFoundScreen = () => {
  return (
    <Screen>
      <Empty>
        <Title>404</Title>
        <Paragraph>Page not found...</Paragraph>
      </Empty>
      <Center className={css.linkWrapper}>
        <Link to={DEFAULT_PATH}>Go home</Link>
      </Center>
    </Screen>
  );
};

export default NotFoundScreen;
