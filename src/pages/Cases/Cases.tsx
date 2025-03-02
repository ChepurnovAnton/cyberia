import styles from './cases.module.scss';
import Categories from '../../features/Categories/Categories';
import Projects from '../../widgets/Projects/Projects';
import Forms from '../../widgets/Forms/Forms';

const Cases = () => {
  return (
    <section className={styles.cases}>
      <h1 className={styles.title}>Кейсы</h1>
      <Categories />
      <Projects />
      <Forms />
    </section>
  );
};

export default Cases;
