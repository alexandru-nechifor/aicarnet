import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const clientQuerry = new QueryClient();
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={clientQuerry}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
