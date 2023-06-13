import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Service = () => {
  const services = [
    {
      text: "General Kontraktor",
      color: "tomato",
    },
    {
      text: "Desain Interior",
      color: "yellow",
    },
    {
      text: "Konsultan",
      color: "blue",
    },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Stack spacing={2} sx={{ py: 5 }}>
        <Typography
        component={"h1"}
          variant="h2"
          fontWeight={700}
          align="center"
          color={"primary.light"}
        >
          Jenis Layanan
        </Typography>
        <Typography
          variant={"subtitle1"}
          fontWeight={600}
          px={3}
          align="center"
          fontSize={{ tablet: "1.3rem" }}
          color={"gray"}
        >
          Mengutamakan efisiensi tanpa mengurangi kualitas mutu, Karena hasil
          optimal adalah tujuan kami
        </Typography>
        <Stack
          spacing={2}
          direction={"row"}
          useFlexGap
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            px: 1,
          }}
        >
          {services.map((e,i) => {
            return (
              <Paper
                key={i}
                elevation={5}
                sx={{
                  background: "#F58634",
                  px: 5,
                  py: 3,
                  width: "100%",
                  maxWidth: 300,
                }}
              >
                <Typography
                  variant="h5"
                  fontSize={{ mobileS: "1.2rem", laptop: "1.7rem" }}
                  fontWeight={700}
                  align="center"
                  color={"white"}
                >
                  {e.text}
                </Typography>
              </Paper>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Service;
