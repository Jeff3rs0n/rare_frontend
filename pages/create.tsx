import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import {
  Text,
  Spacer,
  Button,
  Image,
  Container,
  Card,
} from "@nextui-org/react";

const Create: NextPage = () => {
  const router = useRouter();

  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
      }}
    >
      <Spacer></Spacer>
      {/* Top Section */}

      <Text
        h2
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "90deg, white -10%, $yellow600 100%",
        }}
        weight="bold"
      >
        RareBay ♦️ Staking
     <Text
      css={{
        fontFamily: "monospace",
        textGradient: "90deg, white -10%, $yellow600 100%",
      }}
     >Earn $RARE from staking.</Text>
     <hr></hr>
      </Text>
      <Card
        css={{
          backgroundColor: "transparent",
          backdropFilter: "blur(32px)",
          borderColor: "grey",
          borderStyle: "solid",
        }}
      >
        <Card.Header></Card.Header>
        <Card.Body>
          <Container
            css={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {/* Mint a new NFT */}
            <Spacer />
            <Image
              src="https://bafybeiaye5lcoeduup3c3edgbi25ayorebzjzqsaqsen2cxl3oc45ecwqm.ipfs.nftstorage.link/drop.png"
              alt="drop"
              width={100}
              height={100}
            />

            <Spacer />
            <Container
              css={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
              }}
            >
              <Button
              shadow
                color="warning"
                ghost
                onClick={() => router.push(`/mint`)}
                css={{
                  padding: "3%",
                  fontFamily: "monospace",
                  textGradient: "45deg, $yellow200 -20%, $red600 100%",
                  height: "40%",
                }}
              >
                <Text
                  h3
                  css={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    padding: "2%",
                    fontFamily: "monospace",
                    textGradient: "45deg, $green900 -10%, $blue800 100%",
                  }}
                  weight="bold"
                >
                  Mint NFT ✨
                </Text>
              </Button>
              <Text
                size={16}
                css={{
                  fontFamily: "monospace",
                  textAlign: "centre",
                }}
              >
                <Spacer />
                Head to Minting Page to mint NFT from RareBay NFT Collection.
                <br></br>
                NOTE: You can only stake RARE NFT from RareBay.
              </Text>
            </Container>
            <Spacer />
            <Spacer />
            <Image
              src="https://bafybeih776xs35ettujne24jzfqa5emh5fsrbwchu54ffe2bz7n6qs2gzq.ipfs.nftstorage.link/icons8-nft-64.png"
              alt="drop"
              width={100}
              height={100}
            />
<Spacer />
            <Container
              css={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
              }}
            >
              <Button
              shadow
                color="warning"
                ghost
                onClick={() => router.push(`/mint`)}
                css={{
                  padding: "2%",
                  fontFamily: "monospace",
                  textGradient: "45deg, $yellow200 -20%, $red600 100%",
                  height: "40%",
                }}
              >
                <Text
                  h4
                  css={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    padding: "2%",
                    fontFamily: "monospace",
                    textGradient: "45deg, $green900 -10%, $blue800 100%",
                  }}
                  weight="bold"
                >
                  Stake Your NFT 🕷️
                </Text>
              </Button>
              <Text
                size={16}
                css={{
                  fontFamily: "monospace",
                  textAlign: "centre",
                }}
              >
                <Spacer />
             Staking will earn you $RARE Token. $RARE increases NFT Rarity
                <br></br>
                NOTE: $RARE is rare.
              </Text>
            </Container>
            <Spacer></Spacer>
          </Container>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>

      <div className={styles.nftBoxGrid}>
        <Spacer />
        <Spacer />
        <Spacer />
      </div>
    </Container>
  );
};

export default Create;
