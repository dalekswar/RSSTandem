import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { AppToaster } from '../components/app-toaster';

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <AppToaster />
    </>
  );
};
