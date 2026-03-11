import { Toaster } from 'react-hot-toast';
import { AUTOCLOSE_NOTIFICATION_DELAY } from '../../constants/toaster';

export const AppToaster = () => (
  <Toaster
    position="top-center"
    gutter={12}
    containerStyle={{ margin: '8px' }}
    toastOptions={{
      success: {
        duration: AUTOCLOSE_NOTIFICATION_DELAY,
        iconTheme: {
          primary: 'var(--color-success)',
          secondary: '#fff',
        },
      },
      error: {
        duration: AUTOCLOSE_NOTIFICATION_DELAY,
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
);
