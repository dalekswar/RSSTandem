import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppToaster } from '../components/app-toaster';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 1000,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <AppToaster />
    </QueryClientProvider>
  );
};
