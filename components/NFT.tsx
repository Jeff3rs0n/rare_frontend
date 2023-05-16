import {
    ThirdwebNftMedia,
    useContract,
    useValidDirectListings,
    useValidEnglishAuctions,
  } from "@thirdweb-dev/react";
  import { NFT } from "@thirdweb-dev/sdk";
  import React from "react";
  import {
    MARKETPLACE_ADDRESS,
    NFT_COLLECTION_ADDRESS, 
    NFT_COLLECTION_ADDRESS1
  } from "../const/contractAddresses";
  import Skeleton from "../pages/Skeleton/Skeleton";
  import styles from "./NFT.module.css";
  
  type Props = {
    nft: NFT;
  };
import { Spacer } from "@nextui-org/react";
import truncateEthAddress from 'truncate-eth-address'



  export default function NFTComponent({ nft }: Props) {
    const { contract: marketplace, isLoading: loadingContract } = useContract(
      MARKETPLACE_ADDRESS,
      "marketplace-v3"
    );
    // 1. Load if the NFT is for direct listing
    const { data: directListing, isLoading: loadingDirect } =
      useValidDirectListings(marketplace, {
        tokenContract: NFT_COLLECTION_ADDRESS,
        tokenId: nft.metadata.id,
      });
      useValidDirectListings(marketplace, {
        tokenContract: NFT_COLLECTION_ADDRESS1,
        tokenId: nft.metadata.id,
      });
  
    // 2. Load if the NFT is for auction
    const { data: auctionListing, isLoading: loadingAuction } =
      useValidEnglishAuctions(marketplace, {
        tokenContract: NFT_COLLECTION_ADDRESS,
        tokenId: nft.metadata.id,
      });

      const owner = nft.owner as string

    return (
      <>
        <ThirdwebNftMedia metadata={nft.metadata} className={styles.nftImage} />
        <p className={styles.nftName}>{nft.metadata.name} #{nft.metadata.id} {truncateEthAddress(owner)}
       
        </p>
        <div className={styles.priceContainer}>
          {loadingContract || loadingDirect || loadingAuction ? (
            <Skeleton width="100%" height="100%" />
          ) : directListing && directListing[0] ? (
            <div className={styles.nftPriceContainer}>
              <div>
                <p className={styles.nftPriceLabel}>Price💲</p>
                <hr></hr>
                <p className={styles.nftPriceValue}>
                  {`${directListing[0]?.currencyValuePerToken.displayValue}
            ${directListing[0]?.currencyValuePerToken.symbol}`}
                </p>
              </div>
            </div>
          ) : auctionListing && auctionListing[0] ? (
            <div className={styles.nftPriceContainer}>
              <div>
                <p className={styles.nftPriceLabel}>Minimum Bid</p>
                <p className={styles.nftPriceValue}>
                  {`${auctionListing[0]?.minimumBidCurrencyValue.displayValue}
            ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.nftPriceContainer}>
              <div>
                <p className={styles.nftPriceLabel}>Price💲</p>
                <hr></hr>
                <p className={styles.nftPriceValue}>Priceless💎</p>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }