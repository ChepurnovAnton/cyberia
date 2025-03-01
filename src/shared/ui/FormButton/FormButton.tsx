import styles from './formButton.module.scss';
import { ReactNode } from 'react';

interface FormButtonProps {
  children: ReactNode;
}

const FormButton = (props: FormButtonProps) => {

  return <button className={styles.button}>{props.children}</button>;
};

export default FormButton;
