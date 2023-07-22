import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import YouTube from "react-youtube";

const CollectionCard = () => {
  const videoId = "a9ZHIMZUimk";
  return (
    <>
      <Link href="#">
        <Box
          sx={{
            border: "1px solid #000",
            borderRadius: "8px",
            overflow: "hidden",
            cursor: "pointer",
            // bgcolor: "#F7E1E1",
            // color:"#000",
            margin: "5px",
          }}
        >
          <Box
            component="img"
            src="/images/Apple.webp"
            alt="Book Image"
            sx={{
              height: "200px",
              width: "100%",
              objectFit: "center",
              transition: "transform 200ms ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          {/* <Box
            sx={{
              height: "200px",
              width: "100%",
              objectFit: "fill",
              transition: "transform 200ms ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <YouTube
              videoId={videoId}
              className='
              height: "100%",
              width: "100%",
              objectFit: "fill",
              transition: "transform 200ms ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            '
            />
          </Box> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <Box>
              <Typography variant="h6">
                <b>Author: </b>Steve Jobs
              </Typography>
              <Typography variant="body2">
                <b>Book: </b>Apple Inc.
              </Typography>
            </Box>
            <Avatar alt="Unknown" src="/images/steveJobs.jpg" />
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default CollectionCard;
