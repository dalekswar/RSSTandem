import { type ReactNode } from 'react';
import styles from './auth-form.module.css';

interface Props {
  children: ReactNode;
  onSubmit: () => void;
  isLoading: boolean;
  submitMessage: string;
}
export const AuthForm = ({ children, onSubmit, isLoading, submitMessage }: Props) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}

      <button type="submit" className={styles.formSubmit} disabled={isLoading}>
        {isLoading ? 'Sending Data...' : submitMessage}
      </button>
    </form>
  );
};
