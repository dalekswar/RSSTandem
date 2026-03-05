import { Navigate } from 'react-router-dom';
import { useUserSelector } from '../../redux/selectors';
import { Paths } from './paths';
import type { ReactNode } from 'react';
type Props = {
  children: ReactNode;
};
export const PublicOnlyRoute = ({ children }: Props) => {
  const { accessToken } = useUserSelector();
  const isAuthorized = !!accessToken;

  if (isAuthorized) {
    return <Navigate to={Paths.ABOUT_US} replace />;
  }

  return children;
};
