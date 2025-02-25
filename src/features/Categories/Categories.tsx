import { FC } from 'react';
import styles from './categories.module.scss';
import { CategoriesProps } from './types';
import { useDispatch } from 'react-redux';
import { changeActiveCategory } from '../../app/sliced/activeCategorySlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';

const Categories: FC<CategoriesProps> = ({ categories }) => {
  const activeCategory = useSelector(
    (state: RootState) => state.activeCategory.category,
  );
  const dispatch = useDispatch();
  return (
    <ul className={styles.categories}>
      {categories?.items.map(category => (
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
      ))}
    </ul>
  );
};

export default Categories;
