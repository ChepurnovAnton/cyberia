import styles from './mobileHeader.module.scss';

const MobileHeader = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="src\shared\icons\main-logo.png"
        alt="main-logo"
      />
      <button className={styles.menu_button}>
        <img  src="src\shared\icons\menu-burger.png" alt="menu-burger-icon" />
      </button>
    </header>
  );
};

export default MobileHeader;
