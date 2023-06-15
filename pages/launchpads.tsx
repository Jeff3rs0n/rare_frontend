import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import Thumbs from "../pages/thumb"
import {
  Spacer,
  Image,
  Text,
  Card,
  Col,
  Row,
  Button,
  Badge,
} from "@nextui-org/react";


export default function Buy() {
  // Load all of the NFTs from the NFT Collection
 

  return (
    <Container maxWidth="lg"
	

	>
	 <Text
                  h1
                  size={20}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow700 50%",
				  borderBottomStyle: "solid",
				  borderRadius: "16px",
				  borderBottomColor: "$yellow600",
				  textAlign: "center"
                  }}
                  weight="bold"
				  
                >
                  Launchpads
                </Text>
					 <Spacer />
	 	 	 <Text
                  h1
                  size={32}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow700 50%",
				  textAlign: "center",
				  width: "50%",
				  marginBottom: "-5%"
                  }}
                  weight="bold"
				  
                >
                  Art
                </Text>
     <Thumbs />
	 <Spacer />
	 <Spacer />
	 <Spacer />
	 <Spacer />
	 	 <Spacer />
	 <Spacer />
	 <Spacer />
	 	 <Text
                  h1
                  size={32}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow700 50%",
				  textAlign: "center",
				  width: "50%",
				  marginBottom: "-5%"
                  }}
                  weight="bold"
				  
                >
                  Memberships
                </Text>
	 <Spacer />
     <Thumbs />
	 <Spacer />
	 <Spacer />
	 	 <Spacer />
	 <Spacer />	 <Spacer />
	 <Spacer />
	  <Text
                  h1
                  size={32}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow700 50%",
				  textAlign: "center",
				  width: "50%",
				  marginBottom: "-5%"
                  }}
                  weight="bold"
				  
                >
                  Collectibles
                </Text>
	 <Spacer />
	 <Spacer />
	 <Thumbs />
	 <Spacer />
	  <Spacer />
	   <Spacer />
	   	  <Spacer />
	   <Spacer />
	   	  <Spacer />
	   <Spacer />
    </Container>
  );
}
