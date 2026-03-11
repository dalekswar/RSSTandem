import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './auth-layout.module.css';

type Props = {
  children: ReactNode;
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
};

export const AuthLayout = ({
  children,
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLinkTo,
}: Props) => (
  <div className={styles.auth}>
    <section className={styles.authCard}>
      <div className={styles.authLogo}>CodeMind</div>

      <h1 className={styles.authTitle}>{title}</h1>
      <p className={styles.authSubtitle}>{subtitle}</p>

      {children}

      <p className={styles.authFooter}>
        {footerText}{' '}
        <Link to={footerLinkTo} className={styles.authLink}>
          {footerLinkText}
        </Link>
      </p>
    </section>
  </div>
);
