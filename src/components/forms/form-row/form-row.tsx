import type { ReactElement } from 'react';
import type { FieldError } from 'react-hook-form';
import styles from './form-row.module.css';

type Props = {
  children: ReactElement<{ id?: string }>;
  label?: string;
  error?: FieldError;
};

export const FormRow = ({ label, error, children }: Props) => {
  return (
    <div className={styles.row}>
      {label && (
        <label className={styles.rowLabel} htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className={styles.rowError}>{error.message}</span>}
    </div>
  );
};
