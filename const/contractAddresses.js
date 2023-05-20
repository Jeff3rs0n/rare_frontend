/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { CoreBlockchain, CoreBlockchainTestnet } from "@thirdweb-dev/chains";

export const NETWORK = CoreBlockchainTestnet;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x131c6359f2E71D278e0004f3beFb0791F3EFE22e";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x0F888655e08c62AB4b4cccA57d3eD776bDF7e532";
  export const NFT_COLLECTION_ADDRESS1 =
  "0x72A066fEBE6EEAbe7c2CCbD04273E572464aBccC";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://scan.test.btcs.network/";

export const  nftDropContractAddress = "0x53592Fdd6E224CA89C522fA7338fF0867C40bA40";

export const stakingContractAddress = "0x64BfC97133fe371a0992Dd5A6c20DA4Db5bCb82C"