import {
  useContract,
  useOwnedNFTs,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent } from "react";
import Container from "../components/Container/Container";
import ListingWrapper from "../components/ListingWrapper";
import NFTGrid from "@/components/NFTGrid";
import Skeleton from "@/components/Skeleton/Skeleton";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
  NFT_COLLECTION_ADDRESS1,
} from "../const/contractAddresses";
import styles from "../styles/Profile1.module.css";
import randomColor from "../util/randomColor";
import Sell from "./sell";
import Sell1 from "./sell1";
import {
  Spacer,
  Image,
  Text,
  Card,
  Col,
  Row,
  Button,
  Badge,
  Input,
  Grid,
} from "@nextui-org/react";
import Link from "next/link";
import { Modal, Checkbox } from "@nextui-org/react";
import { Upload } from "@web3uikit/core";
import { useStorageUpload, useAddress } from "@thirdweb-dev/react";
import { Blockie } from "web3uikit";
import { Counter } from "../components/counter";
import { Slider } from "@web3uikit/core";
import truncateEthAddress from "truncate-eth-address";

const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];

export default function ProfilePage() {
  const address = useAddress();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const router = useRouter();
  const [tab, setTab] = useState<"nfts" | "listings" | "auctions" | "Sell">(
    "nfts"
  );

  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);
  const { contract: nftCollection2 } = useContract(NFT_COLLECTION_ADDRESS1);

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection,
    router.query.address as string
  );
  const { data: ownedNfts1, isLoading: loadingOwnedNfts1 } = useOwnedNFTs(
    nftCollection2,
    router.query.address as string
  );

  const { data: directListings, isLoading: loadingDirects } =
    useValidDirectListings(marketplace, {
      seller: router.query.address as string,
    });

  const { data: auctionListings, isLoading: loadingAuctions } =
    useValidEnglishAuctions(marketplace, {
      seller: router.query.address as string,
    });

  return (
    <Container maxWidth="lg">
      <Spacer />
      <Text
        className={styles.creatorTitle}
        h2
        size={50}
        css={{
          fontFamily: "PT Mono",
          textGradient: "45deg, $yellow500 -20%, $blue300 100%",
          textAlign: "center",
          position: "sticky",
        }}
        weight="bold"
      >
        Kepler
        <Text
          size={20}
          css={{
            fontFamily: "PT Mono",
            textGradient: "45deg, $yellow800 -20%, $blue300 100%",
            textAlign: "center",
            position: "sticky",
          }}
          weight="bold"
        >
          By <Blockie seed={address as string} size={5} />{" "}
        </Text>
      </Text>
      <Spacer />
      <div className={styles.profileHeader}>
        <div
          className={styles.coverImage}
          style={{
            backgroundImage: `linear-gradient(1deg, ${randomColor3}, ${randomColor4}, ${randomColor4}, ${randomColor2}, ${randomColor1}, ${randomColor1}, ${randomColor1} )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        >
          <Text
            className={styles.creatorTitle1}
            h2
            size={20}
            css={{
              fontFamily: "PT Mono",
              textGradient: "45deg, $yellow500 -20%, $blue800 100%",
              textAlign: "left",
              position: "sticky",
            }}
            weight="bold"
          >
            Description:
          </Text>
        </div>
        <div
          className={styles.profilePicture}
          style={{
            background: `linear-gradient(1deg, ${randomColor3}, ${randomColor4}, ${randomColor4}, ${randomColor2}, ${randomColor1}, ${randomColor1}, ${randomColor1} )`,
          }}
        />
      </div>
      <Spacer />
      <hr></hr>
      <Spacer />
      <Grid.Container>
        <Grid xs={5}>
          <Card
            css={{
              backdropFilter: "blur(10px)",
              background: "transparent",
              borderStyle: "solid",
              borderWidth: "1px",
            }}
          >
            <Spacer />
            <Counter />
          </Card>
          <Spacer />
        </Grid>

        <Grid xs={7}>
          <Card
            css={{
              backdropFilter: "blur(10px)",
              background: "transparent",
              borderStyle: "solid",
              borderWidth: "1px",
            }}
          >
            <Card.Header>
              <Col>
                <Text
                  css={{
                    fontFamily: "PT Mono",
                    textGradient: "45deg, $yellow500 -20%, $blue700 100%",
                    textAlign: "center",
                    position: "sticky",
                  }}
                >
                  TOTAL SUPPLY {}
                  <Text
                    css={{
                      fontFamily: "PT Mono",
                      textGradient: "45deg, $yellow500 -20%, $blue700 100%",
                      textAlign: "center",
                      position: "sticky",
                    }}
                  >
                    0
                  </Text>
                </Text>

                <Text
                  css={{
                    fontFamily: "PT Mono",
                    textGradient: "45deg, $yellow500 -20%, $blue700 100%",
                    textAlign: "center",
                    position: "sticky",
                  }}
                >
                  MINTED SUPPLY
                  <Text
                    css={{
                      fontFamily: "PT Mono",
                      textGradient: "45deg, $yellow500 -20%, $blue300 100%",
                      textAlign: "center",
                      position: "sticky",
                      borderBottomStyle: "solid",
                      borderRadius: "16px",
                    }}
                  >
                    0
                  </Text>
                </Text>
              </Col>
            </Card.Header>
            <Card.Body>
              <Spacer />
              <Slider
                leftLabel={"Public"}
                step={1}
                bgColor="green"
                id="one"
                labelBgColor="orange"
                rightLabel="Unlimited"
                min={1}
                onChange={function noRefCheck() {}}
              />
              <Text
                css={{
                  fontFamily: "PT Mono",
                  textGradient: "45deg, $yellow500 -20%, $blue300 100%",
                  textAlign: "center",
                  position: "sticky",
                  borderBottomStyle: "solid",
                  borderRadius: "16px",
                }}
              >
                Member Price
                <Image
                  src="https://bafybeiauizqklkaqva2nhd6n7nu4ewfmeq3lejqgf2oztooxoasuklfi4q.ipfs.nftstorage.link/ipfs/bafybeiauizqklkaqva2nhd6n7nu4ewfmeq3lejqgf2oztooxoasuklfi4q/cqsYAptJ_400x400-removebg-preview.png"
                  width={30}
                  height={30}
                />
                0.0 CORE
              </Text>
              <Container maxWidth="sm">
                <Button
                  css={{
                    fontFamily: "$mono",
                    width: "100%",
                  }}
                  color={"success"}
                  ghost
                >
                  MINT 👾
                </Button>
              </Container>
            </Card.Body>
            <Card.Footer>
              <Col>
                <Text
                  css={{
                    fontFamily: "PT Mono",
                    textGradient: "45deg, $yellow500 -20%, $blue700 100%",
                    textAlign: "center",
                    position: "sticky",
                  }}
                >
                  MINT PRICE:{" "}
                  <Image
                    src="https://bafybeiauizqklkaqva2nhd6n7nu4ewfmeq3lejqgf2oztooxoasuklfi4q.ipfs.nftstorage.link/ipfs/bafybeiauizqklkaqva2nhd6n7nu4ewfmeq3lejqgf2oztooxoasuklfi4q/cqsYAptJ_400x400-removebg-preview.png"
                    width={30}
                    height={30}
                  />
                  0.0 CORE
                </Text>
              </Col>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Spacer />
      <hr></hr>
      <Spacer />
      <Spacer /> <Spacer />
      <Spacer /> <Spacer />
    </Container>
  );
}
