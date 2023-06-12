import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import LogoFull from "../../icons/LogoFull";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  const navItems = [
    {
      icon: <HomeIcon fontSize="small" />,
      value: "Beranda",
      path: "/",
    },
    {
      icon: <PermIdentityIcon fontSize="small" />,
      value: "Tentang Kami",
      path: "/about",
    },
    {
      icon: <HomeRepairServiceIcon fontSize="small" />,
      value: "Layanan",
      path: "/service",
    },
    { icon: <CallIcon fontSize="small" />, value: "Kontak", path: "/contact" },
  ];

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
  });

  const drawer = (
    <Box width={"200px"} sx={{ textAlign: "center" }}>
      <LogoFull
        sx={{ width: 150, height: 70 }}
        viewBox="0 0 1000 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        fontSize="large"
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.value} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(item.path)}
            >
              <ListItemText primary={item.value} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const NavButton = styled(Button)({
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    boxShadow: "none",
    textTransform: "none",
    borderRadius: 0,
    color: "primary",
    fontWeight: 600,
    fontFamily: "Source Sans Pro, sans-serif",
    "&:hover": {
      backgroundColor: "white",
      borderBottom: "1px solid",
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: "white",
      color: "#F58634",
      borderBottom: "1px solid",
      boxShadow: "none",
    },
    "&:focus": {
      backgroundColor: "white",
      color: "#F58634",
      borderBottom: "1px solid",
      boxShadow: "none",
    },
  });

  return (
    <>
      <AppBar
        position="sticky"
        component="nav"
        sx={{
          backgroundColor: "white",
          opacity: { tablet: "0.9" },
          boxShadow: 0,
          px: { mobileL: 2 },
          zIndex: 100,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 1,
          }}
        >
          <Box
            sx={{
              gap: { mobileS: 1, tablet: 5 },
              display: { mobileS: "flex", tablet: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => {
              return (
                <NavButton key={item.value} onClick={() => navigate(item.path)}>
                  {item.icon}
                  <Typography
                    
                    component={"p"}
                    fontSize={{ tablet: "1.2rem" }}
                  >
                    {" "}
                    {item.value}
                  </Typography>
                </NavButton>
              );
            })}
          </Box>

          {/* <IconButton
            aria-label="open drawer"
            edge="start"
            sx={{
              pl:5,
              display: {mobileS:"flex", tablet: "none" },
              alignItems:"center",
              background: "white",
              borderRadius:"0 20px 20px 0",
              boxShadow: "2px 5px 10px gray",
              position:"absolute",
              left:-5,
            }}
            onClick={() => setOpenDrawer(true)}
          >
            <Typography component={"p"} fontSize={"1.2rem"} color={"primary"}>Menu</Typography>
            <ArrowForwardIosIcon fontSize="small" color="primary" />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
