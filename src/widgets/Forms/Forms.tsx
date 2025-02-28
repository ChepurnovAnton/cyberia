import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import Checkbox from '../../shared/ui/Checkbox/Checkbox';
import { useSubmitFormsMutation } from '../../shared/api/casesApi';
import { useEffect, useState } from 'react';
import { Input } from './types';
import styles from './forms.module.scss';
import FormButton from '../../shared/ui/FormButton/FormButton';

const Forms = () => {
  const [formData, { isSuccess }] = useSubmitFormsMutation();
  const [validationError, setValidationError] = useState({
    email: [],
    phone: [],
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
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
      if (error?.data && error?.data.errors) {
        setValidationError(error.data.errors);
      }
    }
  };

  const renderValidationError = (errors: string[] | undefined) => {
    if (!errors) return null;
    return errors.map((error, index) => (
      <span key={index} className={styles.error_validation}>
        {error}
      </span>
    ));
  };

  const isMobile = window.innerWidth <= 1070;

  useEffect(() => {
    if (isMobile) {
      setValue('checkbox', true);
    }
  }, [isMobile, setValue]);

  return (
    <section className={styles.forms_section}>
      <h2 className={styles.title}>Расскажите о вашем проекте:</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.forms}>
        <fieldset className={`${styles.fieldset} ${styles.name}`}>
          <legend>Ваше имя*</legend>
          <input
            className={styles.input}
            placeholder="Ваше имя*"
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
          <legend>Email*</legend>
          <input
            className={styles.input}
            placeholder="Email*"
            type="text"
            {...register('email')}
          />
          {renderValidationError(validationError.email)}
        </fieldset>

        <fieldset className={`${styles.fieldset} ${styles.phone}`}>
          <legend>Телефон*</legend>
          <input
            className={styles.input}
            placeholder="Телефон*"
            type="text"
            {...register('phone')}
          />
          {renderValidationError(validationError.phone)}
        </fieldset>

        <fieldset className={`${styles.fieldset} ${styles.message} `}>
          <legend>Сообщение*</legend>
          <textarea
            className={styles.input}
            placeholder="Сообщение*"
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

        <div className={styles.checkbox}>
          <Controller
            control={control}
            name="checkbox"
            rules={{ required: 'Нужно согласиться, чтобы отправить форму' }}
            render={({ field }) => <Checkbox {...field} />}
          />
          <p>Согласие на обработку персональных данных</p>
          {errors.checkbox && (
            <span className={styles.error_validation}>
              {errors.checkbox.message}
            </span>
          )}
        </div>

        <FormButton>Обсудить проект</FormButton>

        <p className={styles.description}>
          Нажимая “Отправить”, Вы даете согласие на обработку персональных
          данных
        </p>

        {isSuccess && <p>заявка отправлена!!!</p>}
      </form>
    </section>
  );
};

export default Forms;
