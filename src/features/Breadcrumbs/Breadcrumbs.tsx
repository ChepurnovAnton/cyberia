import styles from './breadcrumbs.module.scss';
import { useLocation } from 'react-router';
import { Link } from 'react-router';
import { navList } from '../../shared/config/navList';
const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const pathNames = pathname.split('/');
  const lastLevel = `/${pathNames[pathNames.length - 1]}`;
  const findLastLevel = navList.find(item => item.link === lastLevel);

  return (
    <nav className={styles.breadcrums}>
      <Link to="/">
        <span>Главная</span>
      </Link>
      {findLastLevel ? ` / ${findLastLevel?.name}` : ''}
    </nav>
  );
};

export default Breadcrumbs;
