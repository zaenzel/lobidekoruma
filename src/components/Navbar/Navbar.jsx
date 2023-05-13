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
  Toolbar,
} from "@mui/material";
import LogoFull from "../../icons/LogoFull";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  const navItems = [
    { value: "Beranda", path: "/" },
    { value: "Tentang Kami", path: "/about" },
    { value: "Layanan", path: "service" },
    { value: "Kontak", path: "contact" },
  ];

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
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
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => navigate(item.path)}>
              <ListItemText primary={item.value} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" component="nav">
        <StyledToolbar>
          <LogoFull
            sx={{ width: 200 }}
            viewBox="0 0 1000 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            fontSize="large"
          />
          <Box sx={{ display: { mobileS: "none", tablet: "block" } }}>
            {navItems.map((item) => {
              return (
                <Button
                  key={item.value}
                  sx={{ color: "black", fontSize: "medium" }}
                  onClick={() => navigate(item.path)}
                >
                  {item.value}
                </Button>
              );
            })}
          </Box>

          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            sx={{ display: { tablet: "none" } }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </StyledToolbar>
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
