import { Link } from 'react-router-dom';

import styles from './link-button.module.css';

interface LinkButtonProperties {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkButton = ({ to, children, className = '' }: LinkButtonProperties) => {
  return (
    <Link to={to} className={`${styles.linkButton} ${className}`.trim()}>
      {children}
    </Link>
  );
};
