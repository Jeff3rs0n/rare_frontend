import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "./NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import { Text, Spacer } from "@nextui-org/react"


export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxWidth="lg">
               <Text
        h4
        size={40}
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
         Active Listings on RareBay ♦️
      </Text>
<Text
size={16}
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "45deg, $yellow700 -50%, $red800 100%",
        }}
>NFTs on RareBay have Rarity, an algorithim based on time and price🌟</Text>
<hr></hr>
<Spacer />
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Oops! No NFTs Here"
        }
      />
       
    </Container>
   
  );
}