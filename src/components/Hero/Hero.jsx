import { Box, Stack, Typography } from "@mui/material";
import HeroImage from "/images/img-hero.jpg";
import LogoFull from "../../icons/LogoFull";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 600,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        zIndex={"fab"}
        sx={{
          position: "absolute",
          top: {mobileS:"10%", laptop:"20%"},
          px: { mobileS: 5, tablet: 10 },
          py: 5,
          display:"flex",
          alignItems:"center"
        }}
        spacing={5}
      >
        {/* <LogoFull
          sx={{
            width: { mobileS: 180, tablet: 550, laptop: 600 },
            height: 70,
          }}
          viewBox="0 0 800 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          fontSize="large"
        /> */}
        <Typography
          variant="h1"
          component={"h1"}
          fontWeight={800}
          align="center"
          color="White"
          fontSize={{ mobileS: "4rem", tablet: "6rem" }}
        >
          Kreasi dari inpirasi
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight={400}
          align="center"
          color="White"
          maxWidth={500}
          fontSize={{ mobileS: "1rem", tablet: "1.3rem" }}
        >
          kami hadir untuk membangun negeri, dengan tim yang berpengalaman dalam
          bidang kontruksi kami siap memberikan kontribusi untuk masa depan
          Indonesia yang lebih baik
        </Typography>
      </Stack >

      <Box
        sx={{
          background: "black",
          opacity: "0.6",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      ></Box>
    </Box>
  );
};

export default Hero;
