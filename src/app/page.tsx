import Banner from "@/components/banner/Banner";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import Example from "@/components/carousel/MultiCarousel";
import BookCollections from "@/components/collections/BookCollections";
import Collections from "@/components/collections/Collections";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(34,195,190,1) 100%)",
      }}
    >
      <Banner />
      <Collections />
      <Testimonials/>
    </Box>
  );
}
