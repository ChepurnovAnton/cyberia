import Header from '../widgets/Header/Header';
import MobileHeader from '../widgets/MobileHeader/MobileHeader';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <div className="container">
      <Header />
      <MobileHeader />
      <main>
        <AppRouter />
      </main>
      <footer style={{ background: 'red',   gridArea: 'footer'}}>footer</footer>
    </div>
  );
};

export default App;
