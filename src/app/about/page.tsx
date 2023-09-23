"use client";
import SocialIcons from "@/components/footer/SocialIcons";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        background: "whitesmoke",
        display: "flex",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/hLogo/logo-no-background.svg"
          height={200}
          sx={{
            marginLeft: "100px",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            marginTop: "20px",
          }}
        >
          SHB [Pvt Ltd].
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "20px",
          }}
        >
          SHB &nbsp;e-Learning
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginTop: "20px",
            gap: "28px",
          }}
        >
          <SocialIcons />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          bgcolor: "#fff",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: "50px 100px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginTop: "20px",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
            }}
          >
            It&apos;s a place where you find the all resources at free of Cost
            It&apos;s easy and free to find your resource on any topic and
            connect with millions of readers
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "50px 50px",
            justifyContent: "end",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              fontSize: "18px",
            }}
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
