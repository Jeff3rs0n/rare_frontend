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
import styles from "@/styles/Home.module.css";

const Thumbs = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
       
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
		  <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
		  <Drops />
      </ul>

      
		<Container
		css={{
		width: "400px",		
		marginTop: "5%",
		}}
		>
<Grid.Container

css={{
marginTop: "10px",
marginLeft: "20px"
}}
>

<Grid xs={2}
>
<Button

	  size="xs"
css={{
hieght: "10px",
padding: "10%",
position: "static"
}}
	 light onClick={() => next()}><Text weight={"extrabold"} size={25}>⩤</Text>
	  </Button>
</Grid>
<Grid xs={5}>
<span className={styles.heroTitleGradient}>
<Text
css={{
textAlign: "centre",
alignContent: "centre",
display: "flex"
}}

>
</Text>
</span>
</Grid>
<Grid xs={5}>
 <Button
	  size="xs"
css={{
padding: "5%",
position: "static",
}}
	  light onClick={() => prev()}><Text weight={"extrabold"} size={25}>⩥</Text></Button></Grid>
	  
</Grid.Container>
</Container>

	
    </>
  );
};

export default Thumbs;