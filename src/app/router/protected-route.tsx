import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useIsAuth } from '../../redux/hooks/useIsAuth';
import { Paths } from '../../constants/paths';

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
