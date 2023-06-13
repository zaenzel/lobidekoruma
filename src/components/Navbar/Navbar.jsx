import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoFull from "../../icons/LogoFull";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CallIcon from "@mui/icons-material/Call";
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
            {navItems.map((item, i) => {
              return (
                <NavButton key={i} onClick={() => navigate(item.path)}>
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
