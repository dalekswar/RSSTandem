import { type ReactNode } from 'react';
import styles from './auth-form.module.css';

type Props = {
  children: ReactNode;
  onSubmit: () => void;
  isPending: boolean;
  submitMessage: string;
};
export const AuthForm = ({ children, onSubmit, isPending, submitMessage }: Props) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}

      <button type="submit" className={styles.form__submit} disabled={isPending}>
        {isPending ? 'Sending Data...' : submitMessage}
      </button>
    </form>
  );
};
