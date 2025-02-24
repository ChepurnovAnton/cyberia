import styles from './mobileMenu.module.scss';
import { NAV_LIST } from '../../shared/config/navList';
import { Link } from 'react-router';

interface MobileMenuProps {
  setOpenMenu: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setOpenMenu }) => {
  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <section className={styles.mobile_menu}>
      <button onClick={closeMenu} className={styles.close_button}>
        <img src="src/shared/icons/close-menu-burger.png" alt="close-menu" />
      </button>

      <ul>
        {NAV_LIST.map(navItem => (
          <li key={navItem.id} onClick={closeMenu}>
            <Link to={navItem.link}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MobileMenu;
