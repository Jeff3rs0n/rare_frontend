import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import {
  Spacer,
  Image,
  Container,
  Card,
} from "@nextui-org/react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import React from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { nftDropContractAddress } from "../const/contractAddresses";




const Create: NextPage = () => {
  const router = useRouter();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
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
      Earn $RARE from RareBay ♦️ Staking
     <Text
      css={{
        fontFamily: "monospace",
        textGradient: "90deg, white -10%, $yellow600 100%",
      }}
     ></Text>
     <hr></hr>
      </Text>
      <Card
      
        css={{
          backgroundColor: "transparent",
          backdropFilter: "blur(32px)",
          borderC
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
                onPress={handler}
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
              <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text color="warning" id="modal-title" size={18}
          css={{
            fontFamily: "$mono"
          }}
          >
            Mint an NFT from
          </Text>
          <br></br>
        </Modal.Header>
        <Text
           css={{
            fontFamily: "$mono"
          }}
        >RARE NFT Drop</Text>
        <Modal.Body>
<Container>
<hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
<Spacer />
<Container
            css={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
            }}
>
<Web3Button
  theme="dark"
  contractAddress={nftDropContractAddress}
  action={(contract) => contract.erc721.claim(1)}
  onSuccess={() => {
    alert("Yaay!! NFT Claimed!");
  }}
  onError={(error) => {
    alert(error);
  }}
>
  Claim NFT ✨
</Web3Button>
</Container>
</Container>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
              <Text
                size={16}
                css={{
                  fontFamily: "monospace",
                  textAlign: "centre",
                }}
              >
                <Spacer />
               Minting NFT from RareBay NFT Drop will earn you $RARE
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
                onClick={() => router.push(`/stake`)}
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
           $RARE increases NFT Rarity.
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
