import { Box, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "85%",
        margin: "auto",
        padding: {
          xs: "30px 10px",
          sm: "20px 20px",
          lg: "40px 5px",
          xl: "60px 5px",
        },
        background:
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,92,29,1) 61%)",
        borderTop: "2px solid #000",
        borderBottom: "3px solid #000",
      }}
    >
      <Box>
        <Typography variant="h4">
          It&apos;s a place where you find the all resources at free of &nbsp;
          <Typography
            component="span"
            sx={{
              fontSize: "34px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Cost
          </Typography>
          <Typography
            sx={{
              marginTop: "10px",
            }}
          >
            It&apos;s easy and free to find your resource on any topic and
            connect with millions of readers
          </Typography>
        </Typography>
      </Box>
      <Box
        component="img"
        src="/hLogo/logo-no-background.svg"
        width={500}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}
      />
    </Box>
  );
};

export default Banner;
