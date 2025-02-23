import Agency from '../pages/Agency/Agency';
import Blog from '../pages/Blog/Blog';
import Cases from '../pages/Cases/Cases';
import Contacts from '../pages/Contacts/Contacts';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import { Route, Routes } from 'react-router';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/agency" element={<Agency />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/services" element={<Services />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={null} />
    </Routes>
  );
};

export default AppRouter;
