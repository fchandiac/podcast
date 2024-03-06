import { Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Container>
        <Header />
        {props.children}
      </Container>
      <Footer />
    </>
  );
}
