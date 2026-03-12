import { Navigate } from 'react-router-dom';

import type { ReactNode } from 'react';
import { useIsAuth } from '../../redux/hooks/useIsAuth';
import { Paths } from '../../constants/paths';
type Props = {
  children: ReactNode;
};
export const AlreadyLoggedInRoute = ({ children }: Props) => {
  const isAuth = useIsAuth();

  if (isAuth) {
    return <Navigate to={Paths.ROOT} replace />;
  }

  return children;
};
