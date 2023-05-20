import { useContract, useContractWrite, useAddress } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract("0x0F888655e08c62AB4b4cccA57d3eD776bDF7e532");
  const { mutateAsync: mintTo, isLoading } = useContractWrite(contract, "mintTo")

  const _to = useAddress()
  _uri

  const call = async () => {
    try {
      const data = await mintTo({ args: [_to, _uri] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
}