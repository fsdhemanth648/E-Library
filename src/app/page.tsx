"use client";
import Banner from "@/components/banner/Banner";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Collections from "@/components/collections/Collections";
import Testimonials from "@/components/testimonials/Testimonials";
import { useSession, getSession } from "next-auth/react";

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
        <Testimonials />
      </>
    );
  }
}
