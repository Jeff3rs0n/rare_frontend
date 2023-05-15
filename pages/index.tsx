import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { 
  Spacer,
  Image,
  Container,
  Text,
   Card,
  Col,
  Row,
  Button,
  Badge
} from "@nextui-org/react"
import Content  from '@/components/Content'
import type { NextPage } from "next";
import Link from "next/link";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import Caros from "../components/carousel"






const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )

  return (
    <>
      <Head>
        <title>RareBay: Multichain NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace for Rare NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer />
      <Container 
      css={{
maxWidth: "100%"
      }}
      >
        
         <Container css={{w: "90%"}} >
         <Caros />
   <Spacer />
   
   
   </Container>
   
      </Container>
      <Spacer />
 <hr></hr>

      <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>

            <div className={styles.heroBackgroundInner}>
              <Spacer />
            </div>
          </div>
          <Spacer />
      
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
            <Spacer />
<span className={styles.heroTitleGradient}>
                 
 <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Welcome to RareBay.
      </Text>
      <Text
        h1
        size={72}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
       Home of RARE NFT.
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
         A Digital Museam.
      </Text>
                </span>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://thirdweb.com"
                  target="_blank"
                >
                  rarebay.io
                </Link>{" "}
Find
Rare NFT Not just your average Bored ape #001 with 10k Owners, but something Rare
the kind of art that is priceless.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="/"
                  target="_blank"
                >
                 <Text color="warning" css={{ fontFamily: "monospace",
                fontWeight: "bold"
                }}>$RARE AIRDROP</Text>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
