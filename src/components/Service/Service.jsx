import { Box, Container, Paper, Stack, Typography } from "@mui/material";
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
    <Container>
      <Stack spacing={2} sx={{ py: 5 }}>
        <Typography
          variant="h2"
          fontWeight={700}
          fontSize={{ tablet: "3rem" }}
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
          {services.map((e) => {
            return (
              <Paper
                key={e.text}
                sx={{
                  background: "#004d40",
                  px: 5,
                  py: 3,
                  width: "100%",
                  maxWidth: 300,
                  position: "relative",
                }}
                elevation={5}
              >
                <Box
                  sx={{
                    background: "white",
                    px: 1,
                    py: "12%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderTopRightRadius:"100%",
                    borderEndEndRadius:"100%"
                  }}
                />
                 <Box
                  sx={{
                    background: "white",
                    px: 1,
                    py: "12%",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    borderTopLeftRadius:"100%",
                    borderBottomLeftRadius:"100%"
                  }}
                />
                <Typography
                  variant="h5"
                  fontSize={{ mobileS: "1.6rem", laptop: "2rem" }}
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
