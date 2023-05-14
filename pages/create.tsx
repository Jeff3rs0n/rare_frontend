import { 
    useCreateDirectListing,
    useContract,
Web3Button } from "@thirdweb-dev/react";

export default function Component() {
const _params =   { "assetContract": "0x0F888655e08c62AB4b4cccA57d3eD776bDF7e532", "tokenId": "0", "quantity": "1", "currency": "0xF2b1FE576C13C961474C21FDCEDb67C02ac0462E", "pricePerToken": "10000", "startTimestamp": "1684147882", "endTimestamp": "1684149982", "reserved": true }

const contractAddress = "{{contract_address}}";

const { contract } = useContract(contractAddress, "marketplace-v3");

const {
    mutateAsync: createDirectListing,
    isLoading,
    error,
  } = useCreateDirectListing(contract);



  return (
    <Web3Button
      contractAddress="0x0F888655e08c62AB4b4cccA57d3eD776bDF7e532"
      action={() =>
        createDirectListing({
          assetContractAddress: "{{0x0F888655e08c62AB4b4cccA57d3eD776bDF7e532}",
          tokenId: "{{0}}",
          pricePerToken: "{{100}}",
          currencyContractAddress: "{{0xF2b1FE576C13C961474C21FDCEDb67C02ac0462E}}",
          isReservedListing: false,
          quantity: "{{1}}",
          startTimestamp: new Date(),
          endTimestamp: new Date(
            new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
          ),
        })
      }
    >
      createListing
    </Web3Button>
  )
}