"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MultiCarousel from "../carousel/MultiCarousel";
import { Video } from "../../../interfaces";
import { useRouter } from "next/navigation";
import { getAllVideos } from "@/lib/getAllData";

const VideoCollections = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getAllVideos();
        if (response) {
          setVideos(response);
          setIsLoading(false);
        } else {
          console.error("Failed to fetch videos");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error while fetching videos:", error);
        setIsLoading(false);
      }
    };

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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 10px",
            }}
          >
            <Typography variant="h5">
              For better experience click on the link
            </Typography>
          </Box>
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
