import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserSelector } from '../../redux/selectors';
import { Paths } from './paths';

type Props = {
  children: ReactNode;
};

export const AuthorizedOnlyRoute = ({ children }: Props) => {
  const { accessToken } = useUserSelector();

  const isAuthorized = !!accessToken;

  if (!isAuthorized) {
    return <Navigate to={Paths.REGISTER} replace />;
  }

  return children;
};
