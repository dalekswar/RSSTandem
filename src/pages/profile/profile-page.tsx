import { ProfileForm } from './components/profile-form';
import { ProfileAvatar } from './components/profile-avatar';

import { MOCK_USER } from './model/mock-user';

import styles from './profile-page.module.css';

export const ProfilePage = () => {
  const initials = `${MOCK_USER.firstname[0]}${MOCK_USER.lastname[0]}`;

  return (
    <div className="container">
      <section className={styles.profile}>
        <h1 className={styles.profileTitle}>Настройки профиля</h1>
        <ProfileAvatar initials={initials} />
        <ProfileForm {...MOCK_USER} />
      </section>
    </div>
  );
};
