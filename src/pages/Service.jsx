import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import Backdrop from "../components/Hero/Backdrop";
import image from "/images/plan.jpg";
import {
  Architecture,
  DesignServices,
  ElectricalServices,
  Engineering,
  Forum,
  Plumbing,
} from "@mui/icons-material";

const data = [
  {
    title: "Arsitektur",
    icon: (
      <Architecture
        sx={{
          align: "center",
          fontSize: 70,
          background: "red",
          color: "white",
          borderRadius: 100,
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
    ),
  },
  {
    title: "Civil / Struktur",
    icon: (
      <Engineering
        sx={{
          align: "center",
          fontSize: 70,
          background: "blue",
          color: "white",
          borderRadius: 100,
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
    ),
  },
  {
    title: "Mekanikal Elektrikal",
    icon: (
      <ElectricalServices
        sx={{
          align: "center",
          fontSize: 70,
          background: "green",
          color: "white",
          borderRadius: 100,
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
    ),
  },
  {
    title: "Plumbing",
    icon: (
      <Plumbing
        sx={{
          align: "center",
          fontSize: 70,
          background: "purple",
          color: "white",
          borderRadius: 100,
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
    ),
  },
  {
    title: "Desain Interior",
    icon: (
      <DesignServices
        sx={{
          align: "center",
          fontSize: 70,
          background: "gray",
          color: "white",
          borderRadius: 100,
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
    ),
  },
  {
    title: "Konsultan",
    icon: (
      <Forum
        sx={{
          align: "center",
          fontSize: 70,
          background: "orange",
          color: "white",
          borderRadius: 100,
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
    ),
  },
];

const Service = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Backdrop image={image} center={true} title={"Layanan"} />
        <Container
          maxWidth={"laptop"}
          sx={{ paddingTop: 5, paddingBottom: 20 }}
        >
          <Stack spacing={2}>
            <Typography
              component={"h1"}
              variant="h2"
              fontWeight={700}
              color={"primary.light"}
              fontSize={{ mobileS: "1.5rem", tablet: "2.3rem" }}
            >
              Jasa Layanan
            </Typography>
            <Typography
              component={"p"}
              variant="body1"
              fontWeight={500}
              fontSize={{ tablet: "1.2rem" }}
              color={"primary.light"}
            >
              Kami memberikan pelayanan jasa general kontraktor kepada mitra
              dengan memberikan solusi dan mutu terbaik, berikut bidang jasa
              yang kami berikan
            </Typography>
            <Grid
              container
              p={5}
              justifyContent={"center"}
              columnGap={{ mobileS: 8, tablet: 10 }}
              rowGap={5}
            >
              {data.map((e, i) => {
                return (
                  <Grid
                    key={i}
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {e.icon}
                    <Typography
                      component={"h5"}
                      variant="h4"
                      color={"primary.light"}
                      fontWeight={600}
                      align="center"
                      mt={2}
                      fontSize={{ mobileS: "1.2rem", tablet: "1.5rem" }}
                    >
                      {e.title}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Service;
