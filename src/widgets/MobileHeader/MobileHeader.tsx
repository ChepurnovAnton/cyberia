import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './mobileHeader.module.scss';

const MobileHeader = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="src\shared\icons\main-logo.png"
        alt="main-logo"
      />
      <button className={styles.menu_button} onClick={() => setOpenMenu(true)}>
        <img src="src\shared\icons\menu-burger.png" alt="menu-burger-icon" />
      </button>
      {openMenu && <MobileMenu setOpenMenu = {setOpenMenu} />}
    </header>
  );
};

export default MobileHeader;
