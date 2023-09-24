"use client";
import React, { useState, useEffect } from "react";
import { Video } from "../../../interfaces";
import { getAllVideos } from "@/lib/getAllData";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";
import YouTube from "react-youtube";

function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
            padding: "10px",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {videos.map((video, index) => (
                <Grid item xs={6} sm={4} md={4} key={index}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box>
                          <Typography variant="h6" component="div">
                            {video.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Creator: {video.creator}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            margin: "5px",
                            overflow: "hidden",
                          }}
                        ></Box>
                        <YouTube
                          videoId={video.youtubeID}
                          style={{
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                        <Box>
                          <Typography variant="h6" component="div">
                            {video.category}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {video.sub_category}
                          </Typography>
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Link href={video.youtubeUrl}>
                          <Button size="large" variant="text">
                            View Video
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Videos;
