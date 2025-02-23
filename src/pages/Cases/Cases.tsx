import styles from './cases.module.scss';
import { useGetCategoriesQuery } from '../../shared/api/casesApi';
import Categories from '../../widgets/Categories/Categories';

const Cases = () => {
  const { data: categories } = useGetCategoriesQuery(null);

  return (
    <section className={styles.cases}>
      <h1>Кейсы</h1>
      <Categories categories={categories} />
    </section>
  );
};

export default Cases;
