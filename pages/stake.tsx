import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NFTCard from "../components/NFTCard";
import {
  nftDropContractAddress,
  stakingContractAddress,
  tokenContractAddress,
} from "../const/contractAddresses";
import styles from "../styles/Home.module.css";
import {
  Spacer,
  Image,
  Container,
  Card,
  Text
} from "@nextui-org/react";


const Stake: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract, isLoading } = useContract(stakingContractAddress);
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
    }
    await contract?.call("stake", [[id]]);
  }

  if (isLoading) {
    return <div>Loading</div>;
  }



  return (
    <Container
    css={{
      padding: "2%",
      width: "100%",
  
    }}
    >
      <Spacer />
      <Spacer />
            <Card
                    css={{
                      backgroundColor: "transparent",
                      backdropFilter: "blur(32px)",

                    }}
            >
        <Card.Header></Card.Header>
        <Card.Body
           css={{
            padding: "$10",
            display: "flex",
            flexDirection: "column",
            width: "90%",
        
          }}
        >
        

<Text
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "90deg, $purple900 -10%, $pink600 100%",
        }}
h2 className={styles.h1}>Stake your RARE NFTs
<hr></hr>
</Text>

{!address ? (
  <ConnectWallet />
) : (
  <>
   <Text
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "90deg, $blue500 -10%, $yellow600 100%",
        }}
h3 className={styles.h1}>Staking info❔
</Text>
    <div className={styles.tokenGrid}>
      <div className={styles.tokenItem}>
      <Text
   css={{
    backgroundColor: "transparent",
    backdropFilter: "blur(32px)",
    borderColor: "$accents0",
    borderStyle: "solid",
    padding: "$10",
    borderWidth: "thin",
    borderRadius: "8px",
    textGradient: "90deg, $purple700 -20%, $yellow800 100%",

  }}
h4 className={styles.h1}>$RARE EARNED
<Spacer />        <Text className={styles.tokenValue}
css={{
  padding: "2%",
  fontFamily: "monospace",
  textGradient: "90deg, $purple900 -10%, $pink600 100%",
}}
>
<b>
  {!claimableRewards
    ? "Loading..."
    : ethers.utils.formatUnits(claimableRewards, 18)}
</b>{" "}
${tokenBalance?.symbol}
</Text>

</Text>
      </div>
      <div className={styles.tokenItem}>
      <Text
        css={{
          backgroundColor: "transparent",
          backdropFilter: "blur(32px)",
          borderColor: "$accents0",
          borderStyle: "solid",
          padding: "$10",
          borderWidth: "thin",
          borderRadius: "8px",
          textGradient: "90deg, $purple700 -20%, $yellow800 100%",
      
        }}
h3 className={styles.h1}>Your $RARE Balance
<Spacer />
        <Text className={styles.tokenValue}
         css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "90deg, $purple900 -10%, $pink600 100%",
        }}
        >
          <b>{tokenBalance?.displayValue}</b> ${tokenBalance?.symbol}

        </Text>
</Text>
      </div>
    </div>
<Spacer />
<Container>

    <Web3Button
      contractAddress="0x64BfC97133fe371a0992Dd5A6c20DA4Db5bCb82C"
      action={(contract) => {
        contract.call("claimRewards")
      }}
    >
      claimRewards
    </Web3Button>



</Container>
 
<Spacer />
    <Text
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "90deg, $purple900 -10%, $pink600 100%",
        }}
h3 className={styles.h1}>NFTs Staked
</Text>
<hr></hr>
<Spacer />


        <div
        className={styles.nftGridContainer}
        >
        {stakedTokens &&
        stakedTokens[0]?.map((stakedToken: BigNumber) => (

            <NFTCard
            tokenId={stakedToken.toNumber()}
            key={stakedToken.toString()}
          />

        ))}
        </div>
   
     
    <Text
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "90deg, $purple900 -10%, $pink600 100%",
        }}
h3 className={styles.h1}>Unstaked NFTs
<hr></hr>
</Text>
<div
        className={styles.nftGridContainer}
        >
      {ownedNfts?.map((nft) => (
        <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                  <Container
        css={{
          display: "flex",
          width: "20%"
        }}
      >
                      <Card>
                <Card.Image
                  src={nft.metadata.image as string}
                  objectFit="cover"
                />
                <Card.Footer isBlurred
                css={{
                  fontFamily: "$mono"
                }}
                >{nft.metadata.name} ◇ </Card.Footer>
              </Card>
              <Spacer />
          <Web3Button
            contractAddress={stakingContractAddress}
            action={() => stakeNft(nft.metadata.id)}
          >
            Stake
          </Web3Button>
      </Container>

        </div>
      ))}
    </div>
  </>
)}
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Spacer />
      <Spacer />
    </Container>
  );
};

export default Stake;