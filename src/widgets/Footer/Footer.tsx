import styles from './footer.module.scss';
import { contactsList } from '../../shared/config/contactsList';
import { navList } from '../../shared/config/navList';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_content}>
        <div className={styles.logo}>
          <img src="src/shared/icons/main-logo.png" alt="main-logo" />
          <p>Веб-разработка и усиление IT-команд</p>
        </div>
        <ul className={styles.contacts}>
          {contactsList.map(contact => (
            <li key={contact.id}>
              <a href={`${contact.type}:${contact.title}`}>{contact.title}</a>
            </li>
          ))}
        </ul>
        <ul className={styles.navigation}> 
          {navList.map(nav => (
            <li key={nav.id}>
              <Link to={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
