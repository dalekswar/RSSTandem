import { NavLink, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';

import { Fragment } from 'react/jsx-runtime';
import { useBreadcrumbs } from './hooks/use-breadcrumbs';
import classNames from 'classnames';
import { Paths } from '../../constants';

export const HeaderBreadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = useBreadcrumbs();
  return (
    <>
      {crumbs.map(({ name, path }, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <Fragment key={path}>
            {index === 0 ? '' : <span> /</span>}
            <NavLink
              to={path}
              className={classNames(styles.link, {
                [styles.active]: isLast && pathname.startsWith(Paths.COURSES),
              })}
            >
              {name}
            </NavLink>
          </Fragment>
        );
      })}
    </>
  );
};
