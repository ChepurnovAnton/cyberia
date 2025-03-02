import styles from './categories.module.scss';
import { useDispatch } from 'react-redux';
import { changeActiveCategory } from '../../app/sliced/activeCategorySlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import CategoriesSkeleton from '../../shared/ui/Skeletons/CategoriesSkeleton/CategoriesSkeleton';
import { useGetCategoriesQuery } from '../../shared/api/casesApi';

const Categories = () => {
  const { data: categories = { items: [] }, isLoading, isError } = useGetCategoriesQuery('');

  const activeCategory = useSelector((state: RootState) => state.activeCategory.category);

  const dispatch = useDispatch();

  const renderCategory = () => {
    if (isLoading) {
      return Array.from({ length: 4 }).map((_, index) => (
        <li key={index}>
          <CategoriesSkeleton />
        </li>
      ));
    }

    if (isError) {
      return <p>Данные не смогли загрузиться</p>;
    }

    return categories?.items.map(category => (
      <li key={category.id}>
        <button
          onClick={() => dispatch(changeActiveCategory(category.name))}
          className={
            activeCategory !== category.name ? styles.category_button : `${styles.category_button} ${styles.active}`
          }
        >
          {category.name}
        </button>
      </li>
    ));
  };

  return <ul className={styles.categories}>{renderCategory()}</ul>;
};

export default Categories;
