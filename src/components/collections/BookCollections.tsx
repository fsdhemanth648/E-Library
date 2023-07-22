"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MultiCarousel from "../carousel/MultiCarousel";

const BookCollections = () => {
  return (
    <>
      <Box
        sx={{
          padding: "8px 0",
        }}
      >
        <Typography variant="h5">Books</Typography>
        <MultiCarousel />
        <Box sx={{
          display: "flex",
          justifyContent: "end",
          padding: "10px 10px"
        }}>
          <Button variant="contained">
            View All
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default BookCollections;