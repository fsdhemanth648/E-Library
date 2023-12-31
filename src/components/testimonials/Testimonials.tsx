import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MultiCarousel from "../carousel/MultiCarousel";

export default function Testimonials() {
  return (
    <Box
      sx={{
        width: "95%",
        margin: "auto",
        paddingTop: "30px",
      }}
    >
      <Box
        sx={{
          padding: "8px 0",
        }}
      >
        <Typography variant="h5"> Testimonials</Typography>

        {/* <MultiCarousel /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 10px",
          }}
        >
          <Button variant="text">Coming Soon</Button>
          <Button variant="text">Coming Soon</Button>
          <Button variant="text">Coming Soon</Button>
        </Box>
      </Box>
    </Box>
  );
}
