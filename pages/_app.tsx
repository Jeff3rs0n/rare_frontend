import type { AppProps } from 'next/app'
import { CoreBlockchain, CoreBlockchainTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import Header from "../components/header"

import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import NextNProgress from "nextjs-progressbar";



const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: { 
      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
    }, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
    }, // optional
  }
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={CoreBlockchainTestnet}  authConfig={{
      authUrl: "/api/auth",
      domain: "https://rarebay.vercel.app",
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
    <Header />
    <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
   
    <Component {...pageProps} />
  
    </NextUIProvider>
    </NextThemesProvider>
    </ThirdwebProvider>
  )
}
