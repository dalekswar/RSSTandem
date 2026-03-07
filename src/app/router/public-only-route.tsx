import { Navigate } from 'react-router-dom';
import { useUserSelector } from '../../redux/selectors';
import { Paths } from './paths';
import type { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
export const AlreadyLoggedInRoute = ({ children }: Props) => {
  const { accessToken } = useUserSelector();
  const isAuthorized = !!accessToken;

  if (isAuthorized) {
    return <Navigate to={Paths.ROOT} replace />;
  }

  return children;
};
