import { theme } from "@/styles/themes/mui-theme.config";
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
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

