import {
    MediaRenderer,
    ThirdwebNftMedia,
    useContract,
    useContractEvents,
    useValidDirectListings,
    useValidEnglishAuctions,
    Web3Button,
  } from "@thirdweb-dev/react";
  import React, { useState } from "react";
  import { GetStaticProps, GetStaticPaths } from "next";
  import { NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
  import {
    ETHERSCAN_URL,
    MARKETPLACE_ADDRESS,
    NETWORK,
    NFT_COLLECTION_ADDRESS,
  } from "../../../const/contractAddresses";
  import styles from "../../../styles/Token.module.css";
  import Link from "next/link";
  import randomColor from "../../../util/randomColor";
  import Skeleton from "../../../pages/Skeleton/Skeleton";
  import toast, { Toaster } from "react-hot-toast";
  import toastStyle from "../../../util/toastConfig";
  import { Text, Spacer, Card, Col, Row, Container, Input, Button } from "@nextui-org/react"


  type Props = {
    nft: NFT;
    contractMetadata: any;
  };
  
  const [randomColor1, randomColor2] = [randomColor(), randomColor()];
  
  export default function TokenPage({ nft, contractMetadata }: Props) {
    const nftg = nft.metadata.image as string
    const [bidValue, setBidValue] = useState<string>();
  
    // Connect to marketplace smart contract
    const { contract: marketplace, isLoading: loadingContract } = useContract(
      MARKETPLACE_ADDRESS,
      "marketplace-v3"
    );
  
    // Connect to NFT Collection smart contract
    const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);
  
    const { data: directListing, isLoading: loadingDirect } =
      useValidDirectListings(marketplace, {
        tokenContract: NFT_COLLECTION_ADDRESS,
        tokenId: nft.metadata.id,
      });
  
    // 2. Load if the NFT is for auction
    const { data: auctionListing, isLoading: loadingAuction } =
      useValidEnglishAuctions(marketplace, {
        tokenContract: NFT_COLLECTION_ADDRESS,
        tokenId: nft.metadata.id,
      });
  
    // Load historical transfer events: TODO - more event types like sale
    const { data: transferEvents, isLoading: loadingTransferEvents } =
      useContractEvents(nftCollection, "Transfer", {
        queryFilter: {
          filters: {
            tokenId: nft.metadata.id,
          },
          order: "desc",
        },
      });
  
    async function createBidOrOffer() {
      let txResult;
      if (!bidValue) {
        toast(`Please enter a bid value`, {
          icon: "❌",
          style: toastStyle,
          position: "bottom-center",
        });
        return;
      }
  
      if (auctionListing?.[0]) {
        txResult = await marketplace?.englishAuctions.makeBid(
          auctionListing[0].id,
          bidValue
        );
      } else if (directListing?.[0]) {
        txResult = await marketplace?.offers.makeOffer({
          assetContractAddress: NFT_COLLECTION_ADDRESS,
          tokenId: nft.metadata.id,
          totalPrice: bidValue,
        });
      } else {
        throw new Error("No valid listing found for this NFT");
      }
  
      return txResult;
    }
  
    async function buyListing() {
      let txResult;
  
      if (auctionListing?.[0]) {
        txResult = await marketplace?.englishAuctions.buyoutAuction(
          auctionListing[0].id
        );
      } else if (directListing?.[0]) {
        txResult = await marketplace?.directListings.buyFromListing(
          directListing[0].id,
          1
        );
      } else {
        throw new Error("No valid listing found for this NFT");
      }
      return txResult;
    }
  
    return (
      <>

        <Toaster position="bottom-center" reverseOrder={false} />
        <Container css={{
          width: "1000px",
          height: "auto"
        }}>
          <div className={styles.container}>
          <Button.Group color="warning" light>
        <Button><Link href="/buy"><Text css={{
          fontFamily: "$mono"
        }} color="white"> ⬅ Listings ✨</Text></Link></Button>
      </Button.Group>
      <hr></hr>
            <div className={styles.metadataContainer}>
            <Card isHoverable    css={{
                  width: "500px",
                  height: "500px"
                }} >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Image
                src={nftg}
                objectFit="cover"
                width="100%"
                height={"100%"}
                alt="nft"
              />
  </Card>
  <Spacer />

              <div className={styles.descriptionContainer}>
                <h3 className={styles.descriptionTitle}>Description</h3>
                <Text 
                css={{
                  fontFamily: "monospace",
                  padding: "2%",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderRadius: "8px",
                  borderColor: "grey"
                }}
                className={styles.description}>{nft.metadata.description}</Text>
  
                <Text className={styles.descriptionTitle}>Traits</Text>
  
                <div className={styles.traitsContainer}>
                  {Object.entries(nft?.metadata?.attributes || {}).map(
                    ([key, value]) => (
                      <div className={styles.traitContainer} key={key}>
                        <p className={styles.traitName}>{key}</p>
                        <p className={styles.traitValue}>
                          {value?.toString() || ""}
                        </p>
                      </div>
                    )
                  )}
                </div>
  
                <h3 className={styles.descriptionTitle}>History</h3>
  
                <div className={styles.traitsContainer}>
                  {transferEvents?.map((event, index) => (
                    <div
                      key={event.transaction.transactionHash}
                      className={styles.eventsContainer}
                    >
                      <div className={styles.eventContainer}>
                        <p className={styles.traitName}>Event</p>
                        <p className={styles.traitValue}>
                          {
                            // if last event in array, then it's a mint
                            index === transferEvents.length - 1
                              ? "Mint"
                              : "Transfer"
                          }
                        </p>
                      </div>
  
                      <div className={styles.eventContainer}>
                        <p className={styles.traitName}>From</p>
                        <p className={styles.traitValue}>
                          {event.data.from?.slice(0, 4)}...
                          {event.data.from?.slice(-2)}
                        </p>
                      </div>
  
                      <div className={styles.eventContainer}>
                        <p className={styles.traitName}>To</p>
                        <p className={styles.traitValue}>
                          {event.data.to?.slice(0, 4)}...
                          {event.data.to?.slice(-2)}
                        </p>
                      </div>
  
                      <div className={styles.eventContainer}>
                        <Link
                          className={styles.txHashArrow}
                          href={`${ETHERSCAN_URL}/tx/${event.transaction.transactionHash}`}
                          target="_blank"
                        >
                          ↗
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.listingContainer}>
              {contractMetadata && (
                <div className={styles.contractMetadataContainer}>
                  <MediaRenderer
                    src={contractMetadata.image}
                    className={styles.collectionImage}
                  />
                  <Text
                                  css={{
                                    fontFamily: "monospace",
                                  }}
                  className={styles.collectionName}>{contractMetadata.name}</Text>
                </div>
              )}
              <Text 
                              css={{
                                fontFamily: "monospace",
                              }}
              className={styles.title}>{nft.metadata.name}</Text>
              <Link
                href={`/profile/${nft.owner}`}
                className={styles.nftOwnerContainer}
              >
                {/* Random linear gradient circle shape */}
                <div
                  className={styles.nftOwnerImage}
                  style={{
                    background: `linear-gradient(60deg, ${randomColor1}, ${randomColor2}, ${randomColor2}, ${randomColor1})`,
                  }}
                />
                <div className={styles.nftOwnerInfo}>
                  <p className={styles.label}>Current Owner</p>
                  <p className={styles.nftOwnerAddress}>
                    {nft.owner.slice(0, 8)}...{nft.owner.slice(-4)}
                  </p>
                </div>
              </Link>
  
              <div className={styles.pricingContainer}>
                {/* Pricing information */}
                <div className={styles.pricingInfo}>
                  <p className={styles.label}>Price</p>
                  <div className={styles.pricingValue}>
                    {loadingContract || loadingDirect || loadingAuction ? (
                      <Skeleton width="120" height="24" />
                    ) : (
                      <>
                        {directListing && directListing[0] ? (
                          <>
                            {directListing[0]?.currencyValuePerToken.displayValue}
                            {" " + directListing[0]?.currencyValuePerToken.symbol}
                          </>
                        ) : auctionListing && auctionListing[0] ? (
                          <>
                            {auctionListing[0]?.buyoutCurrencyValue.displayValue}
                            {" " + auctionListing[0]?.buyoutCurrencyValue.symbol}
                          </>
                        ) : (
                          "Not for sale"
                        )}
                      </>
                    )}
                  </div>
  
                  <div>
                    {loadingAuction ? (
                      <Skeleton width="120" height="24" />
                    ) : (
                      <>
                        {auctionListing && auctionListing[0] && (
                          <>
                            <p className={styles.label} style={{ marginTop: 12 }}>
                              Bids starting from
                            </p>
  
                            <div className={styles.pricingValue}>
                              {
                                auctionListing[0]?.minimumBidCurrencyValue
                                  .displayValue
                              }
                              {" " +
                                auctionListing[0]?.minimumBidCurrencyValue.symbol}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
  
              {loadingContract || loadingDirect || loadingAuction ? (
                <Skeleton width="100%" height="164" />
              ) : (
                <>
                  <Web3Button
                    contractAddress={MARKETPLACE_ADDRESS}
                    action={async () => await buyListing()}
                    className={styles.btn}
                    onSuccess={() => {
                      toast(`Purchase success!`, {
                        icon: "✅",
                        style: toastStyle,
                        position: "bottom-center",
                      });
                    }}
                    onError={(e) => {
                      toast(`Purchase failed! Reason: ${e.message}`, {
                        icon: "❌",
                        style: toastStyle,
                        position: "bottom-center",
                      });
                    }}
                  >
                    Buy at asking price
                  </Web3Button>
  
                  <div className={`${styles.listingTimeContainer} ${styles.or}`}>
                    <p className={styles.listingTime}>or</p>
                  </div>
  
                  <Input
                        bordered
                        color="warning"
                        placeholder="Bid Price"
                    className={styles.input}
                    defaultValue={
                      auctionListing?.[0]?.minimumBidCurrencyValue
                        ?.displayValue || 0
                    }
                    type="number"
                    step={0.0001}
                    onChange={(e) => {
                      setBidValue(e.target.value);
                    }}
                    css={{
                      width: "100%"
                    }}
                  />
  
                  <Web3Button
                    contractAddress={MARKETPLACE_ADDRESS}
                    action={async () => await createBidOrOffer()}
                    className={styles.btn}
                    onSuccess={() => {
                      toast(`Bid success!`, {
                        icon: "✅",
                        style: toastStyle,
                        position: "bottom-center",
                      });
                    }}
                    onError={(e) => {
                      console.log(e);
                      toast(`Bid failed! Reason: ${e.message}`, {
                        icon: "❌",
                        style: toastStyle,
                        position: "bottom-center",
                      });
                    }}
                  >
                    Place bid
                  </Web3Button>
                </>
              )}
            </div>
          </div>
        </Container>
        <Spacer />
        <Spacer />
      </>
    );
  }
  
  export const getStaticProps: GetStaticProps = async (context) => {
    const tokenId = context.params?.tokenId as string;
  
    const sdk = new ThirdwebSDK(NETWORK);
  
    const contract = await sdk.getContract(NFT_COLLECTION_ADDRESS);
  
    const nft = await contract.erc721.get(tokenId);
  
    let contractMetadata;
  
    try {
      contractMetadata = await contract.metadata.get();
    } catch (e) {}
  
    return {
      props: {
        nft,
        contractMetadata: contractMetadata || null,
      },
      revalidate: 1, // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    };
  };
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const sdk = new ThirdwebSDK(NETWORK);
  
    const contract = await sdk.getContract(NFT_COLLECTION_ADDRESS);
  
    const nfts = await contract.erc721.getAll();
  
    const paths = nfts.map((nft) => {
      return {
        params: {
          contractAddress: NFT_COLLECTION_ADDRESS,
          tokenId: nft.metadata.id,
        },
      };
    });
  
    return {
      paths,
      fallback: "blocking", // can also be true or 'blocking'
    };
  };