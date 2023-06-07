import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import {
  Spacer,
  Image,
  Container,
  Text,
  Card,
  Col,
  Row,
  Button,
  Badge,
Grid
} from "@nextui-org/react";
import Drops from "../pages/Drops/drop" 
import Drops2 from "../pages/Drops/drop2" 
import Drops3 from "../pages/Drops/drop3.tsx" 
import Drops4 from "../pages/Drops/drop4.tsx" 
import Drops5 from "../pages/Drops/drop5.tsx" 
import Drops6 from "../pages/Drops/drop6.tsx" 
import styles from "@/styles/Home.module.css";

const Thumbs = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
		  marginTop: "-5%",
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
       
          <Drops />
		  <Drops2 />
		  <Drops3 />
		  <Drops4 />
		  <Drops5 />
		  <Drops6 />
		  <Drops />
		            <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
		            <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
      </ul>

      

<Button

	  size="xs"
css={{

marginTop: "-20%",
padding: "5%",
position: "inherit",
}}
	 light onClick={() => prev()}><Text weight={"extrabold"} size={25}>⩤</Text>
	  </Button>



 <Button
	  size="xs"
css={{
marginTop: "-10%",
marginLeft: "85%",
padding: "5%",
position: "inherit",
}}
	  light onClick={() => next()}><Text weight={"extrabold"} size={25}>⩥</Text></Button>

	
    </>
  );
};

export default Thumbs;