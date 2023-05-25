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
import icon from "/town.svg";
import CardAction from "../CardAction/CardAction";
import React from "react";

const Footer = () => {
  const TitleItemsFooter = styled(Typography)({
    color: "white",
    fontWeight: 700,
    fontSize: "1.4rem",
  });

  const ItemFooter = styled(Typography)({
    color: "white",
    fontWeight: 500,
    fontSize: "1rem",
  });

  const ContainerFooter = styled(Box)(({ theme }) => ({
    background: "black",
    paddingTop: 300,
    position: "relative",
  }));

  const contacts = [
    {
      name: <ItemFooter>Telepon : 02183735523</ItemFooter>,
      icon: <Call fontSize="inherit" sx={{ color: "white" }} />,
      link: "tel:+62895-6227-48172",
    },
    {
      name: <ItemFooter>WhatsApp : 081263037069</ItemFooter>,
      icon: <WhatsApp fontSize="inherit" sx={{ color: "white" }} />,
      link: "https://wa.me/6281263037069?text=Hallo%20saya%20ingin%20berdikusi%20tentang%20lobidekoruma",
    },
    {
      name: <ItemFooter>Email : lobidekoruma@gmail.com</ItemFooter>,
      icon: <Email fontSize="inherit" sx={{ color: "white" }} />,
      link: "mailto:lobidekoruma@gmail.com",
    },
  ];

  // https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@example.com

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
        <Grid
          container
          gridRow={{ tablet: 3 }}
          sx={{ px: { mobileS: 2, mobileL: 5 } }}
        >
          <Grid item tablet={4}>
            <Stack>
              <TitleItemsFooter component={"h4"} variant="h4">
                Kantor
              </TitleItemsFooter>
              <List>
                <ListItemButton
                  sx={{ fontSize: 25 }}
                  component="a"
                  href="https://goo.gl/maps/p2LFo3sCtjKS85GM6"
                  target="blank"
                >
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
                      target="blank"
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
