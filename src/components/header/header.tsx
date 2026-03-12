import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import { HeaderBreadcrumbs } from '../breadcrumbs';
import { useIsAuth } from '../../redux/hooks/useIsAuth';
import { Paths } from '../../constants/paths';
import { useGetCurrentUserQuery } from '../../redux/api/usersAPI';

import classNames from 'classnames';
import { getLinks } from '../../utils/get-links';

export const Header = () => {
  const { pathname } = useLocation();
  const isAuth = useIsAuth();
  const { data, isFetching } = useGetCurrentUserQuery(undefined, {
    skip: !isAuth,
  });
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.link, { [styles.active]: isActive });

  const hasName = data?.firstName?.trim() || data?.lastName?.trim();

  const fullName = hasName
    ? `${data?.firstName ?? ''} ${data?.lastName ?? ''}`.trim()
    : data?.login;

  const initials = hasName
    ? `${data?.firstName?.[0]?.toUpperCase() ?? ''}${data?.lastName?.[0]?.toUpperCase() ?? ''}`
    : data?.login?.[0]?.toUpperCase();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {getLinks(isAuth).map((linkProps) => {
            return (
              <li
                className={classNames({ [styles.itemLogo]: linkProps.isLogo })}
                key={linkProps.key}
              >
                <NavLink
                  to={linkProps.link}
                  className={linkProps.isLogo ? styles.logo : getNavLinkClass}
                >
                  {linkProps.text}
                </NavLink>
              </li>
            );
          })}

          <li
            className={classNames(styles.itemCrumbs, {
              [styles.active]: pathname.startsWith(Paths.COURSES),
            })}
          >
            <HeaderBreadcrumbs />
          </li>

          <li className={styles.itemAuth}>
            {!isFetching && !isAuth && (
              <NavLink to={Paths.REGISTER} className={classNames(styles.link, styles.linkJoin)}>
                Join Now
              </NavLink>
            )}

            {data?.login && (
              <NavLink to={Paths.PROFILE} className={getNavLinkClass}>
                <span>{fullName}</span>
                <div className={styles.userLogo}>{initials}</div>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
