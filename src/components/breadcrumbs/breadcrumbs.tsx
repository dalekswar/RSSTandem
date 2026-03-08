import { NavLink, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';
import { createCrumbsPath } from '../../utils/crumbs-path';
import { Fragment } from 'react/jsx-runtime';

export const HeaderBreadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = createCrumbsPath(pathname);
  return (
    <>
      {crumbs.map(({ name, path }, index) => {
        return (
          <Fragment key={index}>
            {index === 0 ? '' : <span> /</span>}
            <NavLink
              to={path}
              className={`${styles.link}  ${pathname === path || crumbs.length === 1 ? styles.active : ''}`}
            >
              {name}
            </NavLink>
          </Fragment>
        );
      })}
    </>
  );
};
