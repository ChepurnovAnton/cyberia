import { navList } from '../../shared/config/navList';
import styles from './header.module.scss';
import { Link } from 'react-router';
import { useLocation } from 'react-router';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="src\shared\icons\main-logo.svg" alt="main-icons" />
      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          {navList.map(navItem => (
            <li
              className={navItem.link !== pathname ? styles.nav_element : `${styles.nav_element} ${styles.active}`}
              key={navItem.id}
            >
              <Link to={navItem.link}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
