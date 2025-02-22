import { NAV_LIST } from './config/navList';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="src\shared\icons\main-logo.png"
        alt="main-icons"
      />
      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          {NAV_LIST.map(navItem => (
            <li className={styles.nav_element} key={navItem.id}>{navItem.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
