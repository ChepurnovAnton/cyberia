import styles from './mobileNavigationItem.module.scss';
import { Link } from 'react-router';

interface MobileNavigationItemProps {
  pathname: any;
  navItem: any;
  closeMenu: (open: boolean) => void;
}

const MobileNavigationItem: MobileNavigationItemProps = ({
  pathname,
  navItem,
  closeMenu,
}) => {
  return (
    <li>
      <Link
        to={navItem.link}
        onClick={closeMenu}
        className={
          pathname === navItem.link
            ? `${styles.nav_element} ${styles.active}`
            : styles.nav_element
        }
      >
        {navItem.name}
      </Link>
    </li>
  );
};

export default MobileNavigationItem;
