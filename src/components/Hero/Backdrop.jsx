import { Box, Typography } from "@mui/material";

const Backdrop = ({ image, center, title }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        height={{
          mobileS: 100,
          mobileM: 150,
          mobileL: 200,
          tablet: 250,
          laptop: 350,
        }}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: center ? "center" : "top",
          backgroundSize: "cover",
          backgroundColor: "white",
          width: "100%",
          filter: "brightness(50%)",
          position: "relative",
        }}
      >
        <a
          href="http://www.freepik.com"
          style={{
            opacity: 0,
            position: "absolute",
            top: "30%",
            left: "50%",
            translate: "-50%",
          }}
        >
          Designed by rawpixel.com / Freepik
        </a>
      </Box>
      <Typography
        component={"h1"}
        variant="h5"
        zIndex={"tooltip"}
        sx={{
          position: "absolute",
          top: "50%",
          right: { mobileS: 20, tablet: 40 },
          color: "white",
          fontWeight: "700",
          fontSize: { mobileL: "2rem", laptop: "3rem"},
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Backdrop;
