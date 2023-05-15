import { ArrowRightAltSharp, DoubleArrow, Send } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography, styled } from "@mui/material";
import React from "react";

const CardAction = () => {
  const WrapperCard = styled(Box)({
    display: "flex",
    justifyContent: "center",
    position:"absolute",
    top:-100,
    left:"50%",
    translate:"-50%", 
  });

  const AskText = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    alignItems: "center",
    color: "white",
  }));

  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    fontSize:20, 
    color:"white",
    fontWeight:600,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: "Source Sans Pro, sans-serif",
    "&:hover": {
      backgroundColor: "#002F60",
      borderColor: "##002F60",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#002F60",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return (
    <WrapperCard>
      <Paper
        elevation={3}
        sx={{ background: "#F58634", py: 5, px: { mobileS: 5, tablet: 10 }, }}
      >
        <Stack alignItems={"center"} spacing={3} >
          <Typography
            component={"h2"}
            variant="h2"
            fontWeight={800}
            fontSize={{mobileS:"1.8rem", tablet: "2rem" }}
            color={"white"}
          >
            Let's Talk
          </Typography>
          <Stack >
            <AskText
              component={"p"}
              variant="subtitle1"
              align="center"
              fontSize={{mobileS:"1rem", tablet: "1.2rem" }}
            >
              Ingin membangun rumah?
            </AskText>
            <AskText
              component={"p"}
              variant="subtitle1"
              align="center"
              fontSize={{ tablet: "1.2rem" }}
            >
              Butuh jasa dalam bidang general kontraktor?
            </AskText>
          </Stack>
          <BootstrapButton variant="contained" disableRipple endIcon={<DoubleArrow />}>
            Hubungi Kami
          </BootstrapButton>
        </Stack>
      </Paper>
    </WrapperCard>
  );
};

export default CardAction;
