import { FC } from 'react';
import styles from './categories.module.scss'

const Categories: FC<null> = ({ categories }) => {
  return (
    <ul className={styles.categories} >
      {categories?.items.map(category => (
        <li key={category.id}>
          <button className={styles.catygory_button}>{category.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
