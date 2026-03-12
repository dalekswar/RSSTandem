import type { User } from '../../model/types';

import styles from './profile-form.module.css';

type ProfileFormProperties = Pick<User, 'firstname' | 'lastname' | 'email'>;

export const ProfileForm = ({ firstname, lastname, email }: ProfileFormProperties) => (
  <form className={styles.form} action="">
    <div className={styles.formRow}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="firstname">
          Имя
        </label>
        <input
          className={styles.formInput}
          type="text"
          name="firstname"
          id="firstname"
          defaultValue={firstname}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="lastname">
          Фамилия
        </label>
        <input
          className={styles.formInput}
          type="text"
          name="lastname"
          id="lastname"
          defaultValue={lastname}
        />
      </div>
    </div>
    <div className={styles.formGroup}>
      <label className={styles.formLabel} htmlFor="email">
        Email
      </label>
      <input
        className={styles.formInput}
        type="email"
        name="email"
        id="email"
        defaultValue={email}
      />
    </div>
    <button className={styles.formBtn}>Сохранить</button>
  </form>
);
