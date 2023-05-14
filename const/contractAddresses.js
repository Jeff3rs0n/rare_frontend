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

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://scan.test.btcs.network/";