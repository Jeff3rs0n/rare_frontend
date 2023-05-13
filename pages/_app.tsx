import type { AppProps } from 'next/app'
import { CoreBlockchain } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import Header from "../components/header"

import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import NextNProgress from "nextjs-progressbar";



const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: { 
    }, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // optional
  }
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={ CoreBlockchain }  authConfig={{
      authUrl: "/api/auth",
      domain: "https://example.com",
    }}>

      <NextThemesProvider
    defaultTheme="dark"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >

    <NextUIProvider>
    <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
    <Header />
    <Component {...pageProps} />
  
    </NextUIProvider>
    </NextThemesProvider>
    </ThirdwebProvider>
  )
}
