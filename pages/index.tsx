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


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>RareBay: Multichain NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace for Rare NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer />
   <Container css={{w: "65%"}}>
   <Spacer />
   <Card css={{ w: "100%", h: "700px" }}>
  <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
  <Col>
        <Text size={12} weight="bold" transform="uppercase" color="warning">
          Collectibles
        </Text>
        <Text h3 color="white">
          Bore Apes Yatch Club
        </Text>
      </Col>
  </Card.Header>
  <Card.Body css={{ p: 0 }}>
    <Card.Image
               objectFit="cover"
                src="https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg"
                width={1500}
                height={2000}
                alt="Background gradient from red to blue"
                className={styles.gradient}>
    </Card.Image>
  </Card.Body>
  <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
           
            </Col>
            <Col>
              <Text size={18} 
              color="warning"
              weight={"bold"}
              css={{
                fontFamily: "monospace"
              }}
              >
          <Badge color="success" variant="dot" enableShadow/> Minting Now
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              css={{ color: "orange", bg: "#94f9f026",
            borderStyle: "solid"
            }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                VIEW COLLECTION
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
</Card>
   </Container>
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
        size={72}
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
