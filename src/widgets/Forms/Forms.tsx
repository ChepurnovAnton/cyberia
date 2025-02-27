import { SubmitHandler, useForm } from 'react-hook-form';
import { useSubmitFormsMutation } from '../../shared/api/casesApi';
import { useState } from 'react';
import { Input } from './types';
import styles from './forms.module.scss';

const Forms = () => {
  const [formData, { isSuccess }] = useSubmitFormsMutation();
  const [validationError, setValidationError] = useState({
    email: [],
    phone: [],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = async data => {
    try {
      await formData(data).unwrap();
      setValidationError({
        email: [],
        phone: [],
      });
    } catch (error: any) {
      console.log(error);

      if (error.data && error.data.errors) {
        setValidationError(error.data.errors);
      }
    }
  };

  const phoneValidateError =
    'phone' in validationError &&
    validationError?.phone.map((error, index) => (
      <p key={index} className={styles.error_validation}>
        {error}
      </p>
    ));

  const emailValidationError =
    'email' in validationError &&
    validationError?.email.map((error, index) => (
      <p key={index} className={styles.error_validation}>
        {error}
      </p>
    ));

  return (
    <>
      <h2>Расскажите о вашем проекте</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.forms}>
        <fieldset className={`${styles.fieldset} ${styles.name}`}>
          <legend>Ваше имя</legend>
          <input
            className={styles.input}
            placeholder="Ваше имя"
            type="text"
            {...register('name', { required: 'Имя обязательно' })}
          />
          {errors.name && (
            <span className={styles.error_validation}>
              {errors.name.message}
            </span>
          )}
        </fieldset>

        <fieldset className={`${styles.fieldset} ${styles.email}`}>
          <legend>Email</legend>
          <input
            className={styles.input}
            placeholder="Email"
            type="text"
            {...register('email')}
          />
          {emailValidationError}
        </fieldset>

        <fieldset className={`${styles.fieldset} ${styles.phone}`}>
          <legend>Телефон</legend>
          <input
            className={styles.input}
            placeholder="Телефон"
            type="text"
            {...register('phone')}
          />

          {phoneValidateError}
        </fieldset>

        <fieldset className={`${styles.fieldset} ${styles.message} `}>
          <legend>Сообщение</legend>
          <textarea
            className={styles.input}
            placeholder="Сообщение"
            {...register('message', {
              required: 'Это поле обязательно для заполнения',
            })}
          />
          {errors.message && (
            <span className={styles.error_validation}>
              {errors.message.message}
            </span>
          )}
        </fieldset>

        <label className={styles.custom_checkbox}>
          <input className={styles.checkbox} type="checkbox" />
          <legend>Согласие на обработку персональных данных</legend>
        </label>

        <button className={styles.button}>отправить </button>

        {isSuccess && <p>заявка отправлена!!!</p>}
      </form>
    </>
  );
};

export default Forms;
