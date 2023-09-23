import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import YouTube from "react-youtube";
import { Book } from "../../../interfaces";

interface BookProps {
  book: Book;
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

const CollectionCard: React.FC<BookProps> = ({ book }) => {
  const videoId = "a9ZHIMZUimk";

  const { title, category, sub_category, coverPageUrl, bookUrl, author } = book;
  return (
    <>
      <Link href={bookUrl}>
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
            src={coverPageUrl}
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
                <b>Author: </b>
                {author}
              </Typography>
              <Typography variant="body2">
                <b>Book: </b>
                {title}
              </Typography>
            </Box>
            <Avatar {...stringAvatar(`${author}`)} />
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default CollectionCard;
