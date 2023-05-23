import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {
  Alert,
  AlertTitle,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Backdrop from "../components/Hero/Backdrop";
import image from "/images/done.jpg";
import FormContact from "../components/Form/FormContact";
import CardContact from "../components/CardContact/CardContact";

const Contact = () => {
  const [alert, setAlert] = useState({
    status: false,
    show: false,
  });

  return (
    <>
      <Navbar />
      <Box>
        <Box
          sx={{
            minWidth: "300px",
            position: "fixed",
            top: "10%",
            left: "50%",
            opacity: alert.show ? 1 : 0,
            translate: "-50%",
            zIndex: 100,
            transitionProperty: "all",
            transitionTimingFunction: "ease-in",
            transitionDuration: "1500 ms",
          }}
        >
          <Alert severity={alert.status ? "success" : "error"}>
            <AlertTitle sx={{ fontSize: "1.2rem", fontWeight: "600" }}>
              {alert.status
                ? "Berhasil mengirim pesan"
                : "Gagal mengirim pesan"}
            </AlertTitle>
            {alert.status
              ? "Kami akan segera menghubungi anda"
              : "Periksa jaringan internet anda"}
          </Alert>
        </Box>
        <Backdrop image={image} center={true} title="Kontak" />
        <Container
          maxWidth={"laptop"}
          sx={{ paddingTop: 5, paddingBottom: 10 }}
        >
          <Stack spacing={2}>
            <Typography
              component={"h1"}
              variant="h2"
              fontWeight={700}
              color={"primary.light"}
              fontSize={{ mobileS: "1.5rem", tablet: "2.3rem" }}
            >
              Kirim pesan
            </Typography>
            <Typography
              component={"p"}
              variant="body1"
              fontWeight={500}
              fontSize={{ tablet: "1.2rem" }}
              color={"primary.light"}
            >
              Hubungi tim kami dengan mengirimkan sebuah pesan kepada kami, Kami
              akan membalas dengan cepat.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: 5,
                flexWrap: "wrap",
              }}
            >
              <FormContact setAlert={setAlert} />
              <CardContact />
            </Box>
          </Stack>
        </Container>
        <iframe
          style={{ border: "none" }}
          width="100%"
          height="450"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=HR2H+V6X,+Jatimulya,+Kec.+Cilodong,+Kota+Depok,+Jawa+Barat+16413&key=AIzaSyBxHN88OurGpTz2ekBmlU3HXuHZ4uj1RtY"
        />
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
