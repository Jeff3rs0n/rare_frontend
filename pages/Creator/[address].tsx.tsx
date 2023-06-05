import { BigNumber, utils } from "ethers";
import { useMemo} from "react";
import {
  ConnectWallet,
  useActiveClaimConditionForWallet,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useNFT,
  useUnclaimedNFTSupply,
  Web3Button,
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
 const contractQuery = useContract(NFT_COLLECTION_ADDRESS);
  const contractMetadata = useContractMetadata(contractQuery.contract);
  const [quantity, setQuantity] = useState(1);
  const claimConditions = useClaimConditions(contractQuery.contract);
  const activeClaimCondition = useActiveClaimConditionForWallet(
    contractQuery.contract,
    address,
  );
  const claimerProofs = useClaimerProofs(contractQuery.contract, address || "");
  const claimIneligibilityReasons = useClaimIneligibilityReasons(
    contractQuery.contract,
    {
      quantity,
      walletAddress: address || "",
    },
  );
  const unclaimedSupply = useUnclaimedNFTSupply(contractQuery.contract);
  const claimedSupply = useClaimedNFTSupply(contractQuery.contract);
  const { data: firstNft, isLoading: firstNftLoading } = useNFT(
    contractQuery.contract,
    0,
  );

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString();
  }, [claimedSupply]);

  const numberTotal = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0)
      .add(BigNumber.from(unclaimedSupply.data || 0))
      .toString();
  }, [claimedSupply.data, unclaimedSupply.data]);

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0,
    );
    return `${utils.formatUnits(
      bnPrice.mul(quantity).toString(),
      activeClaimCondition.data?.currencyMetadata.decimals || 18,
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ]);

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable;
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0,
      );
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0,
      );
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;

    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
        // allowed unlimited for the snapshot
        bnMaxClaimable = BigNumber.from(1_000_000);
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable);
        } catch (e) {
          // fall back to default case
        }
      }
    }

    const maxAvailable = BigNumber.from(unclaimedSupply.data || 0);

    let max;
    if (maxAvailable.lt(bnMaxClaimable)) {
      max = maxAvailable;
    } else {
      max = bnMaxClaimable;
    }

    if (max.gte(1_000_000)) {
      return 1_000_000;
    }
    return max.toNumber();
  }, [
    claimerProofs.data?.maxClaimable,
    unclaimedSupply.data,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ]);

  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0,
          )) ||
        numberClaimed === numberTotal
      );
    } catch (e) {
      return false;
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ]);

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    );
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ]);

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading ||
      unclaimedSupply.isLoading ||
      claimedSupply.isLoading ||
      !contractQuery.contract
    );
  }, [
    activeClaimCondition.isLoading,
    contractQuery.contract,
    claimedSupply.isLoading,
    unclaimedSupply.isLoading,
  ]);

  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading],
  );

  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return "Sold Out";
    }

    if (canClaim) {
      const pricePerToken = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0,
      );
      if (pricePerToken.eq(0)) {
        return "Mint (Free)";
      }
      return `Mint (${priceToMint})`;
    }


    return "Minting not available";
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    buttonLoading,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ]);

  const dropNotReady = useMemo(
    () =>
      claimConditions.data?.length === 0 ||
      claimConditions.data?.every((cc) => cc.maxClaimableSupply === "0"),
    [claimConditions.data],
  );

  const dropStartingSoon = useMemo(
    () =>
      (claimConditions.data &&
        claimConditions.data.length > 0 &&
        activeClaimCondition.isError) ||
      (activeClaimCondition.data &&
        activeClaimCondition.data.startTime > new Date()),
    [
      activeClaimCondition.data,
      activeClaimCondition.isError,
      claimConditions.data,
    ],
  );

  if (!0xd9F40fE72Ebaa97c4A0E5d2c63B4B05218632242) {
    return (
      <div className="flex h-full items-center justify-center">
        No contract address provided
      </div>
    );
  }

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

 

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
        {contractMetadata.data?.name}
        <Text
          size={20}
         or
          weight="bold"
        >
          By <Blockie seed={address as string} size={5} />{" "}{truncateEthAddress("0xd9F40fE72Ebaa97c4A0E5d2c63B4B05218632242")}
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
              padding: "5%",
              fontFamily: "PT Mono",
              textGradient: "45deg, $yellow500 -20%, $blue800 100%",
              textAlign: "left",
              position: "sticky",
            }}
            weight="bold"
          >
            Description: {contractMetadata.data?.description}
          </Text>
		   <Counter />
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

        <Grid xs={11}>
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
                    textGradient: "45deg, $yellow800 -20%, $blue900 100%",
                    textAlign: "center",
                    position: "sticky",
                  }}
                >
                  TOTAL SUPPLY {numberTotal}
                  <Text
                    css={{
                      fontFamily: "PT Mono",
                      textGradient: "45deg, $yellow500 -20%, $blue100 100%",
                      textAlign: "center",
                      position: "sticky",
                    }}
                  >
<Spacer />
                  </Text>
                </Text>

                <Text
                  css={{
                    fontFamily: "PT Mono",
                    textGradient: "45deg, $yellow800 -20%, $blue700 100%",
                    textAlign: "center",
                    position: "sticky",
                  }}
                >
                  MINTED SUPPLY {numberClaimed}
                  <Text
                    css={{
                      fontFamily: "PT Mono",
                      textGradient: "45deg, $yellow500 -20%, $blue100 100%",
                      textAlign: "center",
                      position: "sticky",
                      borderBottomStyle: "solid",
                      borderRadius: "16px",
                    }}
                  >
                    <Spacer />
                  </Text>
                </Text>
              </Col>
            </Card.Header>
            <Card.Body>
			
            <Grid.Container>
<Grid xs={3}>  
<Button
size="xs"
ghost
css={{
padding: "20%"
}}
color="warning"
                        onClick={() => {
                          const value = quantity - 1;
                          if (value > maxClaimable) {
                            setQuantity(maxClaimable);
                          } else if (value < 1) {
                            setQuantity(1);
                          } else {
                            setQuantity(value);
                          }
                        }}
                        disabled={isSoldOut || quantity - 1 < 1}
                      >
                       ➖
                      </Button>

</Grid>
<Grid>
<Text css={{

paddingLeft: "50px",
paddingBottom: "50px",
fontFamily: "PT Mono",
textAlign: "centre"
}}>
                        {!isLoading && isSoldOut ? "Sold Out" : quantity} {contractMetadata?.data?.symbol}
</Text>
<Spacer />
</Grid>
<Grid xs={3}>
<Spacer />
 <Button
size="xs"
ghost
css={{
padding: "20%"
}}
ghost
color="warning"
                        onClick={() => {
                          const value = quantity + 1;
                          if (value > maxClaimable) {
                            setQuantity(maxClaimable);
                          } else if (value < 1) {
                            setQuantity(1);
                          } else {
                            setQuantity(value);
                          }
                        }}
                        className={
                          "flex h-full items-center justify-center rounded-r-md px-2 text-center text-2xl disabled:cursor-not-allowed disabled:text-gray-500 dark:text-white dark:disabled:text-gray-600"
                        }
                        disabled={isSoldOut || quantity + 1 > maxClaimable}
                      >
                        ➕
                      </Button>
</Grid>
</Grid.Container>
            </Card.Body>
            <Card.Footer>

                    <div className={styles.container}>
                    


                     
                     
 <Container

css={{
width: "100%",
height: "100%"
}}
>
  <Web3Button
                      contractAddress={"0xd9F40fE72Ebaa97c4A0E5d2c63B4B05218632242"}
                      style={{
                        backgroundColor: "orange",
                        height: "60px",
                         width: "80%",
                         fontFamily: "PT Mono",
                          margin: "10%"
                      }}
                      action={(cntr) => cntr.erc721.claim(quantity)}
                      isDisabled={!canClaim || buttonLoading}
                      onError={(err) => {
                        console.error(err);
                        console.log({ err });
                        toast({
                          title: "Failed to mint drop",
                          description: (err as any).reason || "",
                          duration: 9000,
                          variant: "destructive",
                        });
                      }}
                      onSuccess={() => {
                        toast({
                          title: "Successfully minted",
                          description:
                            "The NFT has been transferred to your wallet",
                          duration: 5000,
                          className: "bg-green-500",
                        });
                      }}
                    >
                      {buttonLoading ? (
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-2 w-2 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
Loading...
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        buttonText
                      )}
                    </Web3Button>
</Container>
                    </div>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Spacer />
      <hr></hr>
    </Container>
  );
}
