import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { Paths } from './paths';
import { useIsAuth } from '../../redux/hooks/useIsAuth';

type Props = {
  children: ReactNode;
};

export const AuthorizedOnlyRoute = ({ children }: Props) => {
  const isAuth = useIsAuth();

  if (!isAuth) {
    return <Navigate to={Paths.REGISTER} replace />;
  }

  return <>{children}</>;
};
