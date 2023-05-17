import type { AppProps } from 'next/app'
import { CoreBlockchain, CoreBlockchainTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import Header from "./header"

import { createTheme, NextUIProvider, Container } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import NextNProgress from "nextjs-progressbar";
import { Analytics } from '@vercel/analytics/react';

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
      dark: darkTheme.className
    }}
  >

    <NextUIProvider>
   
      <div style={{
          backgroundImage: `url("https://bafybeigywo2u5r4dhs6uugrtrpveetyomyrkvnxlovqs665dbanwzthrpa.ipfs.nftstorage.link/ipfs/bafybeigywo2u5r4dhs6uugrtrpveetyomyrkvnxlovqs665dbanwzthrpa/411997-fractal-fractal-flame-mathematics-energy-field-space.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: "100%"
        }}>
  
    <Header />
    
    <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
       <Component {...pageProps} />
       <Analytics />
       </div>
    

    </NextUIProvider>
    </NextThemesProvider>
    </ThirdwebProvider>
  )
}
