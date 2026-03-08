import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import { HeaderBreadcrumbs } from '../breadcrumbs';
import { useIsAuth } from '../../redux/hooks/useIsAuth';
import { Paths } from '../../constants/paths';

export const Header = () => {
  const { pathname } = useLocation();

  const isBreadcrumbsActive = pathname.startsWith(Paths.COURSES);
  const isAuth = useIsAuth();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={`${styles.itemLogo}`}>
            <NavLink to={Paths.ROOT} className={styles.logo}>
              CodeMind
            </NavLink>
          </li>

          <li
            className={`${styles.item} ${styles.itemAbout} ${pathname === Paths.ABOUT_US ? styles.active : ''}`}
          >
            <NavLink
              to={Paths.ABOUT_US}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              About Us
            </NavLink>
          </li>

          {isAuth && (
            <li
              className={`${styles.item} ${styles.itemDashboard}  ${pathname === Paths.DASHBOARD ? styles.active : ''}`}
            >
              <NavLink to={Paths.DASHBOARD} className={styles.link}>
                Dashboard
              </NavLink>
            </li>
          )}
          <li className={`${styles.item} ${isBreadcrumbsActive ? styles.active : ''}`}>
            <HeaderBreadcrumbs />
          </li>

          <li className={`${styles.item} ${styles.itemJoin}`}>
            <NavLink to={Paths.REGISTER} className={`${styles.link}`}>
              Join Now
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
