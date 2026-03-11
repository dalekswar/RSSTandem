import { useAppSelector } from '../hooks';
import { isAuthSelector } from '../reducers';

export const useIsAuth = () => useAppSelector(isAuthSelector);
