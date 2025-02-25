import styles from './mobileMenu.module.scss';
import { navList } from '../../shared/config/navList';
import { useLocation } from 'react-router';
import { contactsList } from '../../shared/config/contactsList';
import MobileNavigationItem from '../../shared/ui/MobileNavigationItem/MobileNavigationItem';

interface MobileMenuProps {
  setOpenMenu: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setOpenMenu }) => {
  const { pathname } = useLocation();
  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <section className={styles.mobile_menu}>
      <button onClick={closeMenu} className={styles.close_button}>
        <img src="src/shared/icons/close-menu-burger.png" alt="close-menu" />
      </button>

      <ul className={styles.nav_list}>
        {navList.map(navItem => (
          <MobileNavigationItem
            key={navItem.id}
            pathname={pathname}
            navItem={navItem}
            closeMenu={closeMenu}
          />
        ))}
      </ul>

      <div className={styles.contacts_block}>
        <h3>Контакты:</h3>
        <ul className={styles.contacts_list}>
          {contactsList.map(contact => (
            <li key={contact.id}>
              <a href={`${contact.type}:${contact.title}`}>{contact.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MobileMenu;
