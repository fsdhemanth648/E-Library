"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MultiCarousel from "../carousel/MultiCarousel";
import { Video } from "../../../interfaces";
import { useRouter } from "next/navigation";

const VideoCollections = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("/api/videos");
        const data = await response.json();
        if (response.ok) {
          setIsLoading(false);
          setVideos(data.videos);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchVideos();
  }, []);
  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "10px 10px",
            }}
          >
            Fetching Videos, Please Hold ON...
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            padding: "8px 0",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              padding: "8px 0",
            }}
          >
            Videos
          </Typography>
          <MultiCarousel data={videos} type="videos" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              padding: "10px 10px",
            }}
          >
            <Button variant="contained" onClick={() => router.push("/videos")}>
              View All
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default VideoCollections;
