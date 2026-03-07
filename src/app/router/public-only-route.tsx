import { Navigate } from 'react-router-dom';

import { Paths } from './paths';
import type { ReactNode } from 'react';
import { useIsAuth } from '../../redux/hooks/useIsAuth';
interface Props {
  children: ReactNode;
}
export const AlreadyLoggedInRoute = ({ children }: Props) => {
  const isAuth = useIsAuth();

  if (isAuth) {
    return <Navigate to={Paths.ROOT} replace />;
  }

  return children;
};
