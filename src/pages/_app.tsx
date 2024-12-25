import type { AppProps } from "next/app";
import "@/5_shared/styles/reset.css";
import "@/5_shared/styles/font.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
import { ThemeProvider } from "styled-components";
import { theme } from "@/5_shared/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
