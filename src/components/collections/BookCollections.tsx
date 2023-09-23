"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import MultiCarousel from "../carousel/MultiCarousel";
import { Book } from "../../../interfaces";
import { useRouter } from "next/navigation";

const BookCollections = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch("/api/books");
        const data = await response.json();
        if (response.ok) {
          setIsLoading(false);
          setBooks(data.books);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchBooks();
  }, []);
  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "10px 10px",
            }}
          >
            Fetching Books, Please Hold ON...
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            padding: "8px 0",
          }}
        >
          <Typography variant="h5">Books</Typography>

          <MultiCarousel data={books} type="books" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              padding: "10px 10px",
            }}
          >
            <Button variant="contained" onClick={() => router.push("/books")}>
              View All
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default BookCollections;
