import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Typography variant="title" component={"h1"}>
        Not Found
      </Typography>
      <Button variant="outlined" size="large" sx={{ fontWeight: 700 }} onClick={() => navigate("/")}>
        Back to home
      </Button>
    </Box>
  );
};

export default Error;
