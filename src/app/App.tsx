import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import type { FC } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 1000,
    },
  },
});

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'var(--color-success)',
              secondary: '#fff',
            },
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
          style: {
            background: 'rgba(18, 23, 32, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--color-line)',

            color: 'var(--color-text)',
            fontSize: '14px',
            fontFamily: 'var(--font-primary)',
            fontWeight: '600',

            borderRadius: '16px',
            padding: '12px 20px',
            maxWidth: '400px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          },
        }}
      />
    </QueryClientProvider>
  );
};
