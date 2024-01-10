import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Box, Container, Stack, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Backdrop from "../components/Hero/Backdrop";
import image from "/images/3.jpg";
import Motto from "../components/Motto/Motto";

const About = () => {
  return (
    <>
      <Navbar />
      <Backdrop image={image} center={false} title={"Tentang Kami"} />
      <Container maxWidth={"laptop"} sx={{ paddingTop: 5, paddingBottom: 20 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: { mobileS: "wrap", tablet: "nowrap" },

            gap: 5,
          }}
        >
          <Stack spacing={2}>
            <Typography
              component={"h1"}
              variant="h2"
              fontWeight={700}
              color={"primary.light"}
              fontSize={{ mobileS: "1.5rem", tablet: "2.3rem" }}
            >
              Profile Perusahaan
            </Typography>
            <Typography
              component={"p"}
              variant="body1"
              fontWeight={500}
              fontSize={{ tablet: "1.2rem" }}
              color={"primary.light"}
            >
              Merupakan suatu perusahaan yang bergerak dalam bidang general
              kontraktor, desain interior dan jasa konsultan di dukung dengan
              sumber daya yang memiliki dedikasi serta kompetensi yang
              berpengalaman dalam memahami kebutuhan klien, dengan analisa yang
              cermat dan inovasi masa depan serta kemampuan untuk mendorong dan
              mendukung ide-ide dalam meningkatkan keamanan, efisiensi sehingga
              memberikan hasil yang optimal
            </Typography>
          </Stack>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            <Stack spacing={2}>
              <Typography
                component={"h1"}
                variant="h2"
                fontWeight={700}
                color={"primary.light"}
                fontSize={{ mobileS: "1.5rem", tablet: "2.3rem" }}
              >
                Visi
              </Typography>
              <Typography
                variant="body1"
                fontWeight={500}
                fontSize={{ tablet: "1.2rem" }}
                component={"p"}
                color={"primary.light"}
              >
                Mampu berperan dalam upaya memberikan kontribusi terhadap
                masyarakat dengan memberikan hasil optimal dalam industri
                kontruksi Indonesia melalui komitmen yang kuat dalam menjalankan
                perusahaan dengan memegang teguh integritas, disiplin, team
                work, dan sosial reponsibility.
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography
                component={"h1"}
                variant="h2"
                fontWeight={700}
                color={"primary.light"}
                fontSize={{ mobileS: "1.5rem", tablet: "2.3rem" }}
              >
                Misi
              </Typography>
              <Typography
                variant="body1"
                fontWeight={500}
                fontSize={{ tablet: "1.2rem" }}
                component={"p"}
                color={"primary.light"}
              >
                Mewujudkan sebuah kreasi dari inspirasi dengan mutu terbaik
                untuk keamanan, kualitas, ketepatan waktu inovasi serta kreasi.
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Motto />
      </Container>
      <Footer />
    </>
  );
};

export default About;
