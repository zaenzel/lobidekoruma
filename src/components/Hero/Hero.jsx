import { Box, Stack, Typography } from "@mui/material";
import logo from "/logo_fix.svg";
import heroImg from "/hero.svg";
import React from "react";

const Hero = () => {
  return (
    <Box>
      <Box
        py={5}
        sx={{
          display: { tablet: "flex" },
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} sx={{ px: 5 }}>
          <Box sx={{ maxWidth: 300 }}>
            <img
              src={logo}
              alt="img"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
              }}
              as="svg"
            />
          </Box>
          <Typography
            variant="h1"
            component={"h1"}
            fontWeight={800}
            color="primary.light"
            fontSize={{ mobileS: "2rem", tablet: "3rem" }}
          >
            Kreasi dari inpirasi
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={400}
            color="primary.light"
            maxWidth={500}
            fontSize={{ mobileS: "1rem", tablet: "1.3rem" }}
          >
            kami hadir untuk membangun negeri, dengan tim yang berpengalaman
            dalam bidang kontruksi kami siap memberikan kontribusi untuk masa
            depan Indonesia yang lebih baik.
          </Typography>
        </Stack>
        <Box
          paddingLeft={5}
          sx={{
            position: "relative",
            maxWidth: 600,
            flex: 1,
            alignSelf: "end",
            justifySelf: "end",
          }}
        >
          <img
            src={heroImg}
            alt="img"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              width: "100%",
            }}
            as="svg"
          />
          <a
            href="http://www.freepik.com"
            style={{
              opacity: 0,
              position: "absolute",
              top: "50%",
              right: "50%",
              translate: "50%",
            }}
          >
            Designed by macrovector / Freepik
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
