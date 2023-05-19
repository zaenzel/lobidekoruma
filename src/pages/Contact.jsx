import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import Backdrop from "../components/Hero/Backdrop";
import image from "/images/done.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box height={"100vh"}>
        <Backdrop image={image} center={true} title="Kontak" />
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
