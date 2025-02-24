import Header from '../widgets/Header/Header';
import MobileHeader from '../widgets/MobileHeader/MobileHeader';
import AppRouter from './AppRouter';
import Footer from '../widgets/Footer/Footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <MobileHeader />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
