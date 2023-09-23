import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import YouTube from "react-youtube";
import { Video } from "../../../interfaces";

interface VideoProps {
  video: Video;
}
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

const VideoCard: React.FC<VideoProps> = ({ video }) => {
  const { title, youtubeID, youtubeUrl, creator } = video;
  return (
    <>
      <Link href={youtubeUrl}>
        <Box
          sx={{
            border: "1px solid #000",
            borderRadius: "8px",
            overflow: "hidden",
            cursor: "pointer",
            margin: "5px",
          }}
        >
          <Box
            sx={{
              height: "auto",
              overflowX: "scroll",
            }}
          >
            <YouTube
              videoId={youtubeID}
              style={{
                width: "100%",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <Box>
              <Typography variant="h6">
                <b>Creator: </b>
                {creator}
              </Typography>
              <Typography variant="body2">
                <b>Video: </b>
                {title}
              </Typography>
            </Box>
            <Avatar {...stringAvatar(`${creator}`)} />
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default VideoCard;
