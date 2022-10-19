import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import globalStyles from '../styles/globalStyles';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import theme from 'styles/theme';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
