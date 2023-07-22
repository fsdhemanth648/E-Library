"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { LinkedIn, Twitter, Instagram, Telegram } from "@mui/icons-material";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "10px",
        width: "100%",
        background: "#1976D2",
      }}
    >
      <Box
        sx={{
          padding: "10px",
          textAlign: "center",
        }}
      >
        <Typography component="h4">SHB &nbsp; e-Learning</Typography>
        <Typography component="h4">
          © 2023 &nbsp;SHB [Pvt Ltd]. All rights reserved.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "end",
          color: "#fff",
        }}
      >
        <SocialIcons />
      </Box>
    </Box>
  );
};

export default Footer;
