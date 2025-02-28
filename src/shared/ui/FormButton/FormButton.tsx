import styles from './formButton.module.scss';

const FormButton = props => {

  return <button className={styles.button}>{props.children}</button>;
};

export default FormButton;
