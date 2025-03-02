import { FC } from 'react';
import styles from './categories.module.scss';
import { CategoriesProps } from './types';
import { useDispatch } from 'react-redux';
import { changeActiveCategory } from '../../app/sliced/activeCategorySlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import CategoriesSkeleton from '../../shared/ui/Skeletons/CategoriesSkeleton/CategoriesSkeleton';
import { useGetCategoriesQuery } from '../../shared/api/casesApi';

const Categories: FC<CategoriesProps> = () => {
  const { data: categories = { items: [] }, isLoading } =
    useGetCategoriesQuery('');

  const activeCategory = useSelector(
    (state: RootState) => state.activeCategory.category,
  );

  const dispatch = useDispatch();

  const renderCategory = () => {
    if (isLoading) {
      return [1, 2, 3, 4].map(item => (
        <li key={item}>
          <CategoriesSkeleton />
        </li>
      ));
    }

    return categories?.items.map(category => (
      <li key={category.id}>
        <button
          onClick={() => dispatch(changeActiveCategory(category.name))}
          className={
            activeCategory !== category.name
              ? styles.category_button
              : `${styles.category_button} ${styles.active}`
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
