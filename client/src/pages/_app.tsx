import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createQueryClientService } from '~lib/services/queryclient-service';
import RefreshTokenHandler from '~utils/refreshTokenHandler';
import '../../styles/globals.css';
import Layout from '~layouts/AppLayout';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
const env = process.env.NODE_ENV;
if (env === 'production') {
  // disable logs in production mode
  console.log = () => {};
} else {
}
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

export const queryClientService = createQueryClientService();

function MyApp({ Component, pageProps }: AppProps) {
  const [refetchInterval, setRefetchInterval] = useState(0);
  return (
    <SessionProvider session={pageProps.session} refetchInterval={refetchInterval}>

    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>HR Platforme</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <RefreshTokenHandler setRefetchInterval={setRefetchInterval} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;