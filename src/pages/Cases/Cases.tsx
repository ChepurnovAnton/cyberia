import styles from './cases.module.scss';
import { useGetCategoriesQuery } from '../../shared/api/casesApi';
import Categories from '../../widgets/Categories/Categories';
import Projects from '../../widgets/Projects/Projects';

const Cases = () => {
  const { data: categories } = useGetCategoriesQuery(null);

  return (
    <section className={styles.cases}>
      <h1 className={styles.title}>Кейсы</h1>
      <Categories categories={categories} />
      <Projects />
    </section>
  );
};

export default Cases;
