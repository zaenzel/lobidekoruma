import { Call, Email, LocationOn, WhatsApp } from "@mui/icons-material";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

const CardContact = () => {
  const data = [
    {
      icon: <Call />,
      text: "02183735523",
    },
    {
      icon: <WhatsApp />,
      text: "081263037069 /  081927002021",
    },
    {
      icon: <Email />,
      text: "lobidekoruma@gmail.com",
    },
    {
      icon: <LocationOn />,
      text: "Ruko Jl. Raya Kampung Sawah No.22 D Jatimulya, Cilodong Depok Jawa Barat",
    },
  ];

  return (
    <Paper elevation={3} sx={{ p: 3, flex: 1 }}>
      <Typography
        component={"h1"}
        variant="h2"
        fontWeight={700}
        color={"primary.light"}
        fontSize={"1.5rem"}
      >
        Info Kontak
      </Typography>
      <List>
        {data.map((e, i) => {
          return (
            <ListItem
              key={i}
              sx={{ display: "flex", gap: 2, color: "primary.light" }}
            >
              {e.icon}
              <ListItemText primary={e.text} />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default CardContact;
