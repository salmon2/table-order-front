import type { AppProps } from 'next/app';
import '@/5_shared/styles/reset.css';
import '@/5_shared/styles/font.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/5_shared/styles/theme';

import { Provider } from 'react-redux';
import { store } from '@/5_shared/redux/store';
import { useWindowCalHeight } from '@/4_entities/common/lib';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useWindowCalHeight();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
