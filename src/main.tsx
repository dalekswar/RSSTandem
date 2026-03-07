import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App.tsx';

import './app/styles/main.css';
import { ErrorBoundary } from './components/error-boundary/error-boundary.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/configure-store.tsx';

const root = document.querySelector('#root');

if (!root) throw new Error('Root container not found');

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
