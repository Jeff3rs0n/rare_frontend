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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Counter } from "@/components/counter";
import Header from "../components/header";
import Roadmaps from "../components/roadmap";
import Thumbs from "../pages/thumb"

import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const notify = () =>
    toast.info("Inscrição confirmada com sucesso!", {
      closeButton: false,
      theme: "colored",
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
      <Container
	   css={{ w: "80%", h: "auto",
	  }}
	  >
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
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
        <Spacer />
        <hr></hr>

        <Spacer />
        <Button.Group color="warning" light>
          <Button>
            <Link href="/">
              <Text
                css={{
                  fontFamily: "$mono",
                }}
                color="white"
              >
                Home 🏠 /
              </Text>
            </Link>
          </Button>
          <Button>
            <Link href="/buy">
              <Text
                css={{
                  fontFamily: "$mono",
                }}
                color="white"
              >
                {" "}
                Listings ✨ »
              </Text>
            </Link>
          </Button>
        </Button.Group>
        <hr></hr>
      </Container>
      <Container css={{ w: "100%", h: "400px",
marginBottom: "10%"
	  }}>
        <Thumbs />
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
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
              >
			    <motion.div
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 4, scale: 1.5 }}
                transition={{ duration: 10 }}
              >
			  <hr />
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
 </motion.div>
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
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 4, scale: 1.2 }}
                transition={{ duration: 2 }}
              >
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
              <Link className={styles.link} href="/" target="_blank">
                rarebay.io
              </Link>{" "}
              Find Rare NFT Not just your average Bored ape #001 with 10k
              Owners, but something Rare, the kind of art that is priceless.
            </p>
            <div className={styles.heroCtaContainer}>
              <Link className={styles.heroCta} href="/create">
                Get Started
              </Link>
              <Link className={styles.heroCta} href="/whitepaper">
                Whitepaper
              </Link>
            </div>
          </div>
        </div>
        <Container fluid>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <Roadmaps />
          <AnimatePresence></AnimatePresence>
        </Container>
      </div>
    </>
  );
}
