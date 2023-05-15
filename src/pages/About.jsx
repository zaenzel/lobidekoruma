import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Grid, Paper } from "@mui/material";

const About = () => {
  return (
    <Grid container sx={{ background: "red" }}>
      <Grid item xs={6}>
        <Paper sx={{ p: 2 }}>hahah</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ p: 2 }}>hahah</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ p: 2 }}>hahah</Paper>
      </Grid>
    </Grid>
  );
};

export default About;
