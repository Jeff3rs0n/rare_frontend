/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { CoreBlockchain } from "@thirdweb-dev/chains";

export const NETWORK = CoreBlockchain;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xE7F566927C29469562aF6C1f659A126F90160c0B";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xd9F40fE72Ebaa97c4A0E5d2c63B4B05218632242";
export const NFT_COLLECTION_ADDRESS1 =
  "0x89eB8bF6bc437f8c6DB5910DC2B005d6A4ae59e9";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://scan.coredao.org/";

export const nftDropContractAddress =
  "0xd9F40fE72Ebaa97c4A0E5d2c63B4B05218632242";

export const stakingContractAddress =
  "0x5F8a5cc9935f5743F5880C6E2ad4C2ac18AF12fb";

export const tokenContractAddress =
  "0x0B2d702B9139256fDA18bB8D52a4826183787CEB";
