import Screen from 'components/Screen';
import Empty from 'components/Empty';
import Paragraph from 'components/Paragraph';
import Title from 'components/Title';

const NotFoundScreen = () => {
  return (
    <Screen>
      <Empty>
        <Title>404</Title>
        <Paragraph>Page not found...</Paragraph>
      </Empty>
    </Screen>
  );
};

export default NotFoundScreen;
