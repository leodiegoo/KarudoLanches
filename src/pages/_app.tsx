import NextApp, { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { NextUrqlAppContext, withUrqlClient } from "next-urql";
import fetch from "isomorphic-unfetch";
import theme from "../theme";
import createEmotionCache from "../theme/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL || "";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <SessionProvider session={pageProps.session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
};

App.getInitialProps = async (ctx: NextUrqlAppContext) => {
  const appProps = await NextApp.getInitialProps(ctx);
  return { ...appProps };
};

export default withUrqlClient((_ssrExchange, _ctx) => ({
  url: GRAPHQL_ENDPOINT,
  fetch
}))(
  // @ts-ignore
  App
);
