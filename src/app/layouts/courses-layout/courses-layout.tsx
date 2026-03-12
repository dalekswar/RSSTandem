import { NavLink, Outlet } from 'react-router-dom';
import { Paths } from '../../router/paths';
import styles from './courses-layout.module.css';

export function CoursesLayout() {
  return (
    <section className={styles.layout}>
      <nav className={styles.nav}>
        <NavLink
          to={Paths.ALL_COURSES}
          className={({ isActive }) => `${styles.tab} ${isActive ? styles.tabActive : ''}`}
        >
          Все
        </NavLink>
        <NavLink
          to={Paths.MY_COURSES}
          className={({ isActive }) => `${styles.tab} ${isActive ? styles.tabActive : ''}`}
        >
          Мои курсы
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
}
