import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AuthConsumer, AuthProvider } from "../contexts/auth-context";
import { useNProgress } from "../hooks/use-nprogress";
import { createTheme } from "../theme";
import { createEmotionCache } from "../utils/create-emotion-cache";
import "simplebar-react/dist/simplebar.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;

// type Auth = {
//   isLoading: boolean;
//   // other properties
// };

const App = (props :
  {
    Component: React.ComponentType<any>;
    emotionCache?: any;
    pageProps: any;
   
  }
  ) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const queryClient = new QueryClient({});

  useNProgress();
    
    //getLayout type
    // getLayout: (page: ReactElement) => ReactNode;
    
  
  const getLayout = (Component as any).getLayout ?? ((page: JSX.Element) => page);

  const theme = createTheme();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Devias Kit</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
              <AuthConsumer>
                {(auth) =>
                  auth.isLoading ? <SplashScreen /> : getLayout(<Component {...pageProps} />)
                }
              </AuthConsumer>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </ThemeProvider>
        </AuthProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
