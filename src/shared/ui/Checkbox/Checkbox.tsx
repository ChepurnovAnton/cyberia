import { JSX } from 'react/jsx-runtime';
import styles from './checkbox.module.scss';

const Checkbox = (props: JSX.IntrinsicElements['input']) => {
  return (
    <div className={styles.checkbox}>
      <input {...props} type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">Согласие на обработку персональных данных</label>
    </div>
  );
};

export default Checkbox;
