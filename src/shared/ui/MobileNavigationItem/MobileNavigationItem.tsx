import styles from './mobileNavigationItem.module.scss';
import { Link, useLocation } from 'react-router';

interface MobileNavigationItemProps {
  navItem: {
    link: string;
    name: string;
  };
  closeMenu: (open: boolean) => void;
}

const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  navItem,
  closeMenu,
}) => {
  const location = useLocation();
  const isActive = location.pathname === navItem.link;

  return (
    <li>
      <Link
        to={navItem.link}
        onClick={() => closeMenu(false)}
        className={`${styles.nav_element} ${isActive ? styles.active : ''}`}
      >
        {navItem.name}
      </Link>
    </li>
  );
};

export default MobileNavigationItem;
