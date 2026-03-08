import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import { HeaderBreadcrumbs } from '../breadcrumbs';
import { useIsAuth } from '../../redux/hooks/useIsAuth';
import { Paths } from '../../constants/paths';
import { useGetUserByLoginQuery } from '../../redux/api/usersAPI';

export const Header = () => {
  const { pathname } = useLocation();
  const isAuth = useIsAuth();
  const { data, isFetching } = useGetUserByLoginQuery(undefined, {
    skip: !isAuth,
  });
  console.log(data);
  const isBreadcrumbsActive = pathname.startsWith(Paths.COURSES);
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
            {!isFetching && !isAuth && (
              <NavLink to={Paths.REGISTER} className={`${styles.link}`}>
                Join Now
              </NavLink>
            )}
            {data && (
              <NavLink
                to={Paths.PROFILE}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                {data.login}
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
