import styles from './breadcrumbs.module.scss';
import { useLocation } from 'react-router';
import { Link } from 'react-router';
import { NAV_LIST } from '../../shared/config/navList';
const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const pathNames = pathname.split('/');
  const secondLevel = `/${pathNames[pathNames.length - 1]}`;
  const findLastLevel = NAV_LIST.find(item => item.link === secondLevel);

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
