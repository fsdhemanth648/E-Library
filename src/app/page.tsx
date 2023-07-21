import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Header />
      <Box>HEMANTH</Box>

      <Footer />
    </Box>
  );
}
