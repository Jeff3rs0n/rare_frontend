import {
    useContract,
    useOwnedNFTs,
    useValidDirectListings,
    useValidEnglishAuctions,
  } from "@thirdweb-dev/react";
  import { useRouter } from "next/router";
  import React, { useState, ChangeEvent } from "react";
  import Container from "@/components/Container/Container";
  import ListingWrapper from "@/components/ListingWrapper";
  import NFTGrid from "@/components/NFTGrid";
  import Skeleton from "@/components/Skeleton/Skeleton";
  import {
    MARKETPLACE_ADDRESS,
    NFT_COLLECTION_ADDRESS,
    NFT_COLLECTION_ADDRESS1,
  } from "@/const/contractAddresses";
  import styles from "@/styles/Profile1.module.css";
  import randomColor from "@/util/randomColor";
  import Sell from "../sell";
  import Sell1 from "../sell1";
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
    Avatar
  } from "@nextui-org/react";
  import Link from "next/link";
  import { Modal, Checkbox } from "@nextui-org/react";
  import { Upload } from "@web3uikit/core";
  import { useStorageUpload, useAddress } from "@thirdweb-dev/react";
  import { Blockie } from "web3uikit";
  import { Counter } from "@/components/counter";
  import { Slider } from "@web3uikit/core";
  import truncateEthAddress from "truncate-eth-address";


  
  const [randomColor1, randomColor2, randomColor3, randomColor4] = [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
  ];
  
  export default function Drops() {
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

<Card 
isPressable
      isHoverable
css={{
    height: "350px",
	paddingBottom: "10%",
	marginBottom: "10%",
    width: "300px",
    backgroundImage: `url("https://i.seadn.io/gcs/files/4c6a2057355a799e698ca5ccb3157d0e.png?auto=format&dpr=1&w=750")`,
    backgroundSize: "cover",
}}
>
<Card.Header>
<Col>
<Text
color="inherit"
  size={18}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue300 -20%, $yellow300 50%",
				  textAlign: "center"
                  }}
                  weight="bold"
>Azuki</Text>
<Text
  size={12}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow300 50%",
				  textAlign: "center"
                  }}
                  weight="bold"
>	Floor Price: 0.0 CORE 
<Text
  size={12}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow900 50%",
				  textAlign: "center"
                  }}
                  weight="bold"
>	Volume: 0.0 CORE</Text>
 </Text>
</Col>
</Card.Header>
<Card.Body>
<Avatar 
src={"https://i.seadn.io/gcs/files/adeb11bcd531b77f55ce10c217e50841.jpg?auto=format&dpr=1&w=384"}
color="gradient"
bordered
squared 
size="xl"
css={{ 
   marginTop: "30%",
   marginLeft: "35%",

}}
width={100} height={100} />
</Card.Body>
</Card>
        </Container>
    );
  }
  