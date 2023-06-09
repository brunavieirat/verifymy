import { theme } from "@/styles/themes/mui-theme.config";
import Head from 'next/head';
import "@/styles/global.css";
import { createEmotionCache } from "@/utils/createEmotionCache";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";

import { EmotionCache } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <>
      <Head>
        <title>Verify my age</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
      </Head>

      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

