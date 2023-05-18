import {
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useOwnedNFTs,
  } from "@thirdweb-dev/react";
  import React, { useState } from "react";
  import Container from "../components/Container/Container";
  import NFTGrid from "../pages/NFTGrid";
  import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
  import tokenPageStyles from "../styles/Token.module.css";
  import { NFT as NFTType } from "@thirdweb-dev/sdk";
  import SaleInfo from "../components/SaleInfo";
  import { Text } from "@nextui-org/react";
  
  export default function Sell() {
    // Load all of the NFTs from the NFT Collection
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const address = useAddress();
    const { data, isLoading } = useOwnedNFTs(contract, address);
  
    const [selectedNft, setSelectedNft] = useState<NFTType>();
  
    return (
      
      <Container maxWidth="lg">
         <Text
        h2
        size={60}
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
         Sell Your RARE NFT
      </Text>
      <hr></hr>
        {!selectedNft ? (
          <>
            <Text
            weight={"bold"}
size={16}
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
>Browse NFT You would Like to Sell from the ones you own</Text>
<hr></hr>
            <NFTGrid
              data={data}
              isLoading={isLoading}
              overrideOnclickBehavior={(nft) => {
                setSelectedNft(nft);
              }}
              emptyText={
                "Looks like you don't own any NFTs in this collection. Head to the buy page to buy some!"
              }
            />
          </>
        ) : (
          <div className={tokenPageStyles.container} style={{ marginTop: 0 }}>
            <div className={tokenPageStyles.metadataContainer}>
              <div className={tokenPageStyles.imageContainer}>
                <ThirdwebNftMedia
                  metadata={selectedNft.metadata}
                  className={tokenPageStyles.image}
                />
                <button
                  onClick={() => {
                    setSelectedNft(undefined);
                  }}
                  className={tokenPageStyles.crossButton}
                >
                  X
                </button>
              </div>
            </div>
  
            <div className={tokenPageStyles.listingContainer}>
              <Text css={{
                fontFamily: "monospace"
              }}>You&rsquo;re about to list the following item for sale.</Text>
              <Text h1 css={{
                fontFamily: "monospace"
              }}  className={tokenPageStyles.title}>
                {selectedNft.metadata.name}
              </Text>
              <Text css={{
                fontFamily: "monospace"
              }} className={tokenPageStyles.collectionName}>
                Token ID #{selectedNft.metadata.id}
              </Text>
  
              <div className={tokenPageStyles.pricingContainer}>
              <SaleInfo nft={selectedNft} />
              </div>
            </div>
          </div>
        )}
      </Container>

    );
  }