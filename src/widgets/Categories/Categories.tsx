import { FC } from 'react';
import styles from './categories.module.scss'
import { CategoriesProps } from './types';

const Categories: FC<CategoriesProps> = ({ categories }) => {
  return (
    <ul className={styles.categories} >
      {categories?.items.map(category => (
        <li key={category.id}>
          <button className={styles.category_button}>{category.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
