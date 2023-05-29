import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5
      }}
    >
      <CircularProgress />
      <Typography variant="title" component={"h1"}>
        Loading
      </Typography>
    </Box>
  );
};

export default Loading;
