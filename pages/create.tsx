import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Image } from "@nextui-org/react";
import { Modal, Input, Row, Checkbox } from "@nextui-org/react";
import Link from "next/link";
import type { FC } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
} from "../const/contractAddresses";
import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import Skeleton from "../components/Skeleton/Skeleton";
import styles from "../styles/Home.module.css";
import {
  Card,
  Container,
  Button,
  Text,
  Spacer,
  Grid,
  Col,
} from "@nextui-org/react";
import { tokenContractAddress } from "../const/contractAddresses";
import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";

type Props = {
  nft: NFT;
};
interface NFTCardProps {
  tokenId: number;
}
import { motion, useScroll } from "framer-motion";

const Create: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);
  const address = useAddress();
  const router = useRouter();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{ pathLength: scrollYProgress }}
    >
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
        }}
      >
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
                {" "}
                « Home 🏠 /
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
                Listings ✨ /
              </Text>
            </Link>
          </Button>
        </Button.Group>

        <hr></hr>
        <Spacer />

        <Card
          css={{
            backgroundColor: "transparent",
            backdropFilter: "blur(32px)",
            width: "100%",
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
              <Image
                src="https://bafybeiaye5lcoeduup3c3edgbi25ayorebzjzqsaqsen2cxl3oc45ecwqm.ipfs.nftstorage.link/drop.png"
                alt="drop"
                width={50}
                height={50}
              />
              <Spacer />
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
                  width: "100%",
                }}
              >
                <Text
                  size={18}
                  css={{
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
                  <Text
                    color="warning"
                    id="modal-title"
                    size={18}
                    css={{
                      fontFamily: "$mono",
                    }}
                  >
                    Mint an NFT from
                  </Text>
                  <br></br>
                </Modal.Header>
                <Text
                  css={{
                    fontFamily: "$mono",
                  }}
                >
                  {nft?.metadata?.name} Drop
                </Text>
                <Modal.Body>
                  <Container>
                    <hr
                      className={`${styles.smallDivider} ${styles.detailPageHr}`}
                    />
                    <Spacer />
                    <Container
                      css={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <Container>
                        <Card
                          css={{
                            width: "80%",
                          }}
                        >
                          <Card.Image
                            objectFit="cover"
                            width={"100%"}
                            src={nft?.metadata?.image as string}
                          />
                        </Card>
                      </Container>
                      <Spacer />
                      <Web3Button
                        theme="dark"
                        contractAddress={nftDropContractAddress}
                        action={(contract) => contract.erc721.claim(1)}
                        onSuccess={() => {
                          alert(
                            "Yaay!! NFT Claimed! 🥳🥳🥳, Proceede to Sell Pade to Sell it."
                          );
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
                <Modal.Footer></Modal.Footer>
              </Modal>
              <Text
                size={16}
                css={{
                  fontFamily: "monospace",
                  textAlign: "centre",
                }}
              >
                <Spacer />
                Minting is free and only liable to gas fees.
              </Text>
            </Container>
          </Card.Body>
        </Card>

        <Spacer />
        <Card
          css={{
            backgroundColor: "transparent",
            backdropFilter: "blur(32px)",
            width: "100%",
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
              <Image
                src="https://bafybeih776xs35ettujne24jzfqa5emh5fsrbwchu54ffe2bz7n6qs2gzq.ipfs.nftstorage.link/icons8-nft-64.png"
                alt="drop"
                width={50}
                height={50}
              />
              <Spacer />
              <Button
                shadow
                color="warning"
                ghost
                onClick={() => router.push(`/sell`)}
                css={{
                  padding: "3%",
                  fontFamily: "monospace",
                  textGradient: "45deg, $yellow200 -20%, $red600 100%",
                  height: "40%",
                  width: "100%",
                }}
              >
                <Spacer />

                <Text
                  size={18}
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
                  Sell NFT 💰
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
                Sell your NFT on RareBay marketplace
              </Text>
            </Container>
          </Card.Body>
        </Card>
        <Spacer />
        <Card
          css={{
            backgroundColor: "transparent",
            backdropFilter: "blur(32px)",
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
              <Image
                src="https://bafybeieub6exh2k72ayjm5p2nsttw4ow22xjs43x2pprhostl6s24llwua.ipfs.nftstorage.link/proof-of-stake.png"
                alt="drop"
                width={50}
                height={50}
              />
              <Spacer />
              <Button
                shadow
                color="warning"
                ghost
                onClick={() => router.push(`/stake`)}
                css={{
                  width: "100%",
                  padding: "2%",
                  fontFamily: "monospace",
                  textGradient: "45deg, $yellow200 -20%, $red600 100%",
                  height: "40%",
                }}
              >
                <Text
                  size={18}
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
                  Stake NFT 🕷️
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
                Staking will increase NFT Rarity
              </Text>
            </Container>
            <Spacer></Spacer>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>

        <div className={styles.nftBoxGrid}>
          <Spacer />
          <Spacer />
          <Spacer />
        </div>
      </Container>
    </motion.div>
  );
};

export default Create;
