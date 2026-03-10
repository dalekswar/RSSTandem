import styles from './profile-avatar.module.css';

type ProfileAvatarProperties = {
  initials: string;
};

export const ProfileAvatar = ({ initials }: ProfileAvatarProperties) => (
  <div className={styles.avatarSection}>
    <div className={styles.avatar}>{initials}</div>
    <button className={styles.editBtn} disabled>
      Изменить фото
    </button>
  </div>
);
