"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCard from "../Cards/BookCard";
import { carouselResponsive } from "@/utils/designConstants";
import VideoCard from "../Cards/VideoCard";

const MultiCarousel = (props: { data: any; type: any }) => {
  const { data, type } = props;
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      {type === "books" ? (
        <Carousel responsive={carouselResponsive}>
          {data.map((book, index) => (
            <div key={index} style={{ gap: "10px" }}>
              <BookCard book={book} />
            </div>
          ))}
        </Carousel>
      ) : (
        <Carousel responsive={carouselResponsive}>
          {data.map((book, index) => (
            <div key={index} style={{ gap: "10px" }}>
              <VideoCard video={book} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default MultiCarousel;
