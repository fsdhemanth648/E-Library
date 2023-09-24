"use client";
import Banner from "@/components/banner/Banner";
import styles from "./page.module.css";
import { Box, Button, Typography } from "@mui/material";
import Collections from "@/components/collections/Collections";
import Testimonials from "@/components/testimonials/Testimonials";
import { useSession } from "next-auth/react";
import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "E-Library: Home",
  description: "It's a place where you find the all resources at free of Cost",
};

export default function Home() {
  const { status, data: session } = useSession();
  if (status === "authenticated") {
    return (
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(34,195,190,1) 100%)",
        }}
      >
        <Banner />
        <Collections />
      </Box>
    );
  } else {
    return (
      <>
        <Banner />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
            padding: "10px 10px",
          }}
        >
          <Typography variant="h6">
            Please Sign In to view all the content
          </Typography>

          <Link href="/login">
            <Button variant="contained">Sign In</Button>
          </Link>
        </Box>
        <Testimonials />
      </>
    );
  }
}
