import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const abu = blueGrey["600"];

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F58634",
      light: abu,
      dark: "#008970",
    },
  },
  breakpoints: {
    values: {
      mobileS: 0,
      mobileM: 320,
      mobileL: 375,
      tablet: 768,
      laptop: 1024,
    },
  },
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
  },
});
