"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import MultiCarousel from "../carousel/MultiCarousel";
import { Book } from "../../../interfaces";
import { useRouter } from "next/navigation";
import { getAllBooks } from "@/lib/getAllData";

const BookCollections = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getAllBooks();
        if (response) {
          setBooks(response);
          setIsLoading(false);
        } else {
          console.error("Failed to fetch books");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error while fetching books:", error);
        setIsLoading(false);
      }
    };

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
