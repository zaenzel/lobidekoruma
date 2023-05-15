import {
  Audiotrack,
  Call,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import icon from "/icon-footer.svg";
import CardAction from "../CardAction/CardAction";
import React from "react";

const Footer = () => {
  const TitleItemsFooter = styled(Typography)({
    color: "white",
    fontWeight: 700,
    fontSize: "1.6rem",
  });

  const ItemFooter = styled(Typography)({
    color: "white",
    fontWeight: 500,
    fontSize: "1.2rem",
  });

  const ContainerFooter = styled(Box)(({ theme }) => ({
    background: "black",
    paddingBlock: 40,
    paddingInline: 20,
    paddingTop: 300,
    position: "relative",
  }));

  const contacts = [
    {
      name: <ItemFooter>Telepon : 02183735523</ItemFooter>,
      icon: <Call fontSize="inherit" sx={{ color: "white" }} />,
      link: "",
    },
    {
      name: <ItemFooter>WhatsApp : 081263037069</ItemFooter>,
      icon: <WhatsApp fontSize="inherit" sx={{ color: "white" }} />,
      link: "",
    },
    {
      name: <ItemFooter>Email : lobidekoruma@gmail.com</ItemFooter>,
      icon: <Email fontSize="inherit" sx={{ color: "white" }} />,
      link: "",
    },
  ];

  const medsos = [
    {
      name: <ItemFooter>Facebook</ItemFooter>,
      icon: <Facebook fontSize="inherit" sx={{ color: "white" }} />,
    },
    {
      name: <ItemFooter>Instagram</ItemFooter>,
      icon: <Instagram fontSize="inherit" sx={{ color: "white" }} />,
    },
    {
      name: <ItemFooter>Tiktok</ItemFooter>,
      icon: <Audiotrack fontSize="inherit" sx={{ color: "white" }} />,
    },
    {
      name: <ItemFooter>LinkedIn</ItemFooter>,
      icon: <LinkedIn fontSize="inherit" sx={{ color: "white" }} />,
    },
  ];

  return (
    <ContainerFooter>
      <CardAction />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={icon}
          alt="img"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "90%",
          }}
          as="svg"
        />
      </Box>
      <Box sx={{ width: "100%", mt: { mobileS: 5, tablet: 10 } }}>
        <Grid container gridRow={{ tablet: 3 }}>
          <Grid item tablet={4}>
            <Stack>
              <TitleItemsFooter component={"h4"} variant="h4">
                Kantor
              </TitleItemsFooter>
              <List>
                <ListItemButton sx={{ fontSize: 25 }} component="a" href="/">
                  <ListItemIcon>
                    <LocationOn sx={{ color: "white" }} fontSize="inherit" />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    primary={
                      <ItemFooter>
                        Jl. Raya Kampung Sawah No.22 D Jatimulya, Cilodong Depok
                        Jawa Barat
                      </ItemFooter>
                    }
                  />
                </ListItemButton>
              </List>
            </Stack>
          </Grid>
          <Grid item tablet={4}>
            <Stack>
              <TitleItemsFooter component={"h4"} variant="h4">
                Kontak Kami
              </TitleItemsFooter>
              <List>
                {contacts.map((e) => {
                  return (
                    <ListItemButton
                      sx={{ fontSize: 25 }}
                      component="a"
                      href={e.link}
                      key={e.name}
                    >
                      <ListItemIcon>{e.icon}</ListItemIcon>
                      <ListItemText primary={e.name} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Stack>
          </Grid>
          <Grid item tablet={4}>
            <Stack>
              <TitleItemsFooter component={"h4"} variant="h4">
                Ikuti Kami
              </TitleItemsFooter>
              <List>
                <Grid container>
                  {medsos.map((e) => {
                    return (
                      <Grid item laptop={6} key={e.name}>
                        <ListItemButton sx={{ fontSize: 25 }}>
                          <ListItemIcon>{e.icon}</ListItemIcon>
                          <ListItemText primary={e.name} />
                        </ListItemButton>
                      </Grid>
                    );
                  })}
                </Grid>
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </ContainerFooter>
  );
};

export default Footer;