import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
  useAddress
} from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
} from "../const/contractAddresses";
import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import Skeleton from "../pages/Skeleton/Skeleton";
import styles from "../styles/Buy.module.css";
import { Card, Container, Button, Text, Spacer } from "@nextui-org/react";
import {
  tokenContractAddress,
} from "../const/contractAddresses";


type Props = {
  nft: NFT;
};
import truncateEthAddress from "truncate-eth-address";

interface NFTCardProps {
  tokenId: number;
}
const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);
  const address = useAddress()
  return (
    <>
      <Container
        css={{
          display: "flex",
          width: "20%"
        }}
      >
        {nft && (
          <div 
          className={styles.nftBoxGrid}
          >
            {nft.metadata && (
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
            )}
            <Spacer />
            <Web3Button
              action={(contract) =>
                contract?.call("withdraw", [nft.metadata.id])
              }
              contractAddress={stakingContractAddress}
            >
              Unstake
            </Web3Button>

            <Spacer />
          </div>
        )}
      </Container>
    </>
  );
};
export default NFTCard;
