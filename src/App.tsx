import ContextProvider from 'core/ContextProvider';
import MainRouter from 'core/MainRouter';

const App = () => {
  return (
    <ContextProvider>
      <MainRouter />
    </ContextProvider>
  );
};

export default App;
