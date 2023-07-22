import { Box, Typography } from "@mui/material";
import React from "react";
import BookCollections from "./BookCollections";
import VideoCollections from "./VideoCollections";
import LearningCollections from "./LearningCollections";

const Collections = () => {
  return (
    <Box
      sx={{
        width: "95%",
        margin: "auto",
        paddingTop: "30px",
      }}
    >
      <Typography variant="h4">Our Latest Collections</Typography>
      <Typography variant="body1" textAlign={"center"}>
        We found the the best colections for you that you fall in love with
        these... Keep Learning and reach the heights!
      </Typography>
      <BookCollections />
      <VideoCollections />
      <LearningCollections/>
    </Box>
  );
};

export default Collections;
