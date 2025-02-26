import styles from './cases.module.scss';
import { useGetCategoriesQuery } from '../../shared/api/casesApi';
import Categories from '../../features/Categories/Categories';
import Projects from '../../widgets/Projects/Projects';
import Forms from '../../widgets/Forms/Forms';

const Cases = () => {
  const { data: categories = { items: [] } } = useGetCategoriesQuery('');

  return (
    <section className={styles.cases}>
      <h1 className={styles.title}>Кейсы</h1>
      <Categories categories={categories} />
      <Projects />
      <Forms />
    </section>
  );
};

export default Cases;
