import { RegistrationForm } from '../../../components/forms/registration-form';
import { Link } from 'react-router-dom';
import { Paths } from '../../../app/router/paths';
import styles from './register-page.module.css';

export const RegisterPage = () => {
  return (
    <div className={styles.register}>
      <section className={styles.register__card}>
        <div className={styles.register__logo}>CodeMind</div>

        <h1 className={styles.register__title}>Create Account</h1>
        <p className={styles.register__subtitle}>Fill in your details to register</p>

        <RegistrationForm />

        <p className={styles.register__footer}>
          Already have an account?{' '}
          <Link to={Paths.LOGIN} className={styles.register__link}>
            Log In
          </Link>
        </p>
      </section>
    </div>
  );
};
