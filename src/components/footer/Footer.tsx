"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { LinkedIn, Twitter, Instagram, Telegram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "10px",
        color: "#fff",
        // position: "absolute",
        // bottom: "1px",
        width: "100%",
        //bgcolor: "red",
      }}
    >
      <hr />
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
        }}
      >
        <LinkedIn />
        <Twitter />
        <Instagram />
        <Telegram />
      </Box>
    </Box>
  );
};

export default Footer;
