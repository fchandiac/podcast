import { Box, Container,  } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

//update

export default function Layout(props) {
  return (
    <>
    <Box sx={{minWidth: "380px",}}>

        <Container sx={{paddingLeft:{xs:0, sm:0}, paddingRight:{xs:0, sm:0}}}>
        <Header />
        </Container>
      
        <Container>{props.children}</Container>
    
  
      <Footer />
    </Box>
    </>
  );
}
