import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Spacer,
  Image,
  Container,
  Text,
  Card,
  Col,
  Row,
  Button,
  Badge,
} from "@nextui-org/react";
import Content from "@/pages/Content";
import type { NextPage } from "next";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Caros from "../components/carousel";
import { Hero, Typography } from "@web3uikit/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Counter } from "@/components/counter";
import Header from "./header";

import { motion, AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const notify = () =>
  toast.info('Inscrição confirmada com sucesso!', {
    closeButton: false,
    theme: 'colored',
  });
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <>

      <Head>
        <title>RareBay: Multichain NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace for Rare NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Spacer />
      <Container  fluid>
      <motion.div     animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}>

        <Text
          h2
          size={50}
          css={{
            fontFamily: "monospace",
            textGradient: "45deg, $pink600 -20%, $blue600 100%",
          }}
          weight="bold"
        >
          RareBay Marketplace
        </Text>

    <Text
          h2
          size={17}
          css={{
            fontFamily: "monospace",
            textGradient: "45deg, $yellow600 -20%, $blue600 100%",
          }}
          weight="bold"
        >
          Digital Museum for RARE Art
        </Text>
    </motion.div>
    
        <hr></hr>

        <Spacer />
        <Button.Group color="warning" light>
        <Button><Link href="/"><Text css={{
          fontFamily: "$mono"
        }} color="white">« Home 🏠</Text></Link></Button>
        <Button><Link href="/buy"><Text css={{
          fontFamily: "$mono"
        }} color="white"> Listings ✨ »</Text></Link></Button>
      </Button.Group>
      <hr></hr>
      </Container>
      <Spacer />
      <div className={styles.heroBody}>
        <Button.Group color="gradient" ghost>
          <Button>
            {" "}
            <Text
              b
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $pink500 -20%, $yellow800 100%"
              }}
            >
              Art
            </Text>
          </Button>
          <Button>            <Text
              b
             
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $pink500 -20%, $yellow800 100%"
              }}
            >
              PFPS
            </Text></Button>
          <Button>            <Text
              b
             
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $pink500 -20%, $yellow800 100%"
              }}
            >
              Gaming
            </Text></Button>
            <Button>            <Text
              b
             
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $pink500 -20%, $yellow800 100%"
              }}
            >
              Memberships
            </Text></Button>
        </Button.Group>
      </div>
      <Spacer />
      <Container css={{ w: "100%" }}>
        <Caros />
      </Container>
      <Container
        css={{
          maxWidth: "100%",
        }}
      >
        <Container css={{ w: "100%" }}></Container>
      </Container>
      <div className={styles.container}>
        <div className={styles.content}>
      

            
              <div className={styles.heroBody}>
                <Spacer />
                <span className={styles.heroTitleGradient}>
                  <hr></hr>
                  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 180, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  >
                  <Text
                    h1
                    size={50}
                    css={{
                      textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                  >
                    Welcome to RareBay.
                  </Text>
                 
                  <Text
                    h1
                    size={50}
                    css={{
                      textGradient: "45deg, $yellow600 -20%, $blue600 100%",
                    }}
                    weight="bold"
                  >
                    Home of the Rarest NFTs.
                  </Text>
                  </motion.div>
                  <motion.div     initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
                    <Text
                    h1
                    size={60}
                    css={{
                      textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    weight="bold"
                  >
                    A Digital Museum.
                  </Text>
                  </motion.div>
                </span>
                <p className={styles.heroSubtitle}>
                  <Link
                    className={styles.link}
                    href="/"
                    target="_blank"
                  >
                    rarebay.io
                  </Link>{" "}
                  Find Rare NFT Not just your average Bored ape #001 with 10k
                  Owners, but something Rare, the kind of art that is priceless.
                </p>
                <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="/buy">
                    Get Started
                  </Link>
                  <Link className={styles.heroCta} href="/whitepaper">
                    Whitepaper
                  </Link>
           </div>
             
              </div>
            
          </div>
    <AnimatePresence>
    { (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )}


        <Container >
          <hr></hr>
                <Spacer />
          <Card 
          css={{
            backgroundColor: "transparent",
            backdropFilter: "blur(16px)",
            borderColor: "grey",
            borderStyle: "solid"
          }}
          >
            <Card.Header>
            <Col>
            <Text h2 weight="bold" color="#ffffffAA" css={{
          fontFamily: "monospace"
        }}>
          RareBay Launch Countdown
          <Text color="warning" size={14} css={{
          fontFamily: "monospace",
          paddingRight: "8%",
          paddingLeft: "8%"
        }}>RareBay is in testnet mode and expected to launch when timer ends</Text>
            <Spacer />
            <Spacer />
          <Image
         
              src="https://bafkreiakjtw7wj6x7qpdliuoeypuar2554hebk3vnz75dhomkqrgbwvfya.ipfs.nftstorage.link/"
              alt="logo"
              width={100}
              height={100}
            />  
            <Spacer />
              <Counter />
        </Text>
      </Col>
      
            </Card.Header>   
            
<Card.Body>
  
</Card.Body>
  </Card>

          </Container>
          </AnimatePresence>
          <Spacer />
          <Spacer />
          <Spacer />
      </div>
      
    </>
  );
}
