import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import frontTheme from '@/themes/webTheme';
import backTheme from '@/themes/adminTheme';
import createEmotionCache from '../src/createEmotionCache';
import WebLayout from '@/components/webComponents/Layout';
import WebRouteGuard from '@/components/webComponents/HOC/RouteGuard';
import AdminLayout from '@/components/adminComponents/Layout';
import AdminRouteGuard from '@/components/adminComponents/HOC/RouteGuard';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;

  const isWebPage = router.pathname.startsWith('/web');
  const isAdminPage = router.pathname.startsWith('/admin');

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      {isWebPage ? (
        <ThemeProvider theme={frontTheme}>
          <WebRouteGuard>
            <WebLayout>
              <CssBaseline />
              <Component {...pageProps} />
            </WebLayout>
          </WebRouteGuard>
        </ThemeProvider>
      ) : isAdminPage ? (
        <ThemeProvider theme={backTheme}>
          <AdminRouteGuard>
            <AdminLayout>
              <CssBaseline />
              <Component {...pageProps} />
            </AdminLayout>
          </AdminRouteGuard>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={frontTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </CacheProvider>
  );
}
