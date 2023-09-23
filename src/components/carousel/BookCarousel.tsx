"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Book } from "../../../interfaces";
import BookCard from "../Cards/BookCard";
import { carouselResponsive } from "@/utils/designConstants";

interface BookListProps {
  books: Book[];
}

const MultiCarousel: React.FC<BookListProps> = ({ books }) => {
  if (!books || !Array.isArray(books) || books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <div>
      {/* {JSON.stringify(books)} */}
      <Carousel responsive={carouselResponsive}>
        {books.map((book, index) => (
          <div key={index} style={{ gap: "10px" }}>
            <BookCard book={book} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
