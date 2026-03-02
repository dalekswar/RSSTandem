import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserSelector } from '../../redux/selectors';
import { Paths } from './paths';

type Props = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const { login } = useUserSelector();
  const isAuthorized = !!login;

  if (!isAuthorized) {
    return <Navigate to={Paths.ABOUT_US} replace />;
  }

  return children;
};
