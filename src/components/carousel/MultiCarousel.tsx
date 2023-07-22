"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CollectionCard from "../collections/CollectionsCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2040 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2040, min: 1024 },
    items: 4,
  },
  bigTablet: {
    breakpoint: { max: 1024, min: 820 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 820, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiCarousel = () => {
  return (
    <div>
      <Carousel responsive={responsive}>
        {Array.from(Array(6)).map((_, index) => (
          <div key={index} style={{ gap: "10px" }}>
            <CollectionCard />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
