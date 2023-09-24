"use client";
import React, { useState, useEffect } from "react";
import { Book } from "../../../interfaces";
import { getAllBooks } from "@/lib/getAllData";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";

function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
            padding: "10px",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {books.map((book, index) => (
                <Grid item xs={6} sm={4} md={4} key={index}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box>
                          <Typography variant="h6" component="div">
                            {book.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Author: {book.author}
                          </Typography>
                        </Box>

                        <Box
                          component="img"
                          src={book.coverPageUrl}
                          height={200}
                        />
                        <Box>
                          <Typography variant="h6" component="div">
                            {book.category}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {book.sub_category}
                          </Typography>
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Link href={book.bookUrl}>
                          <Button size="large" variant="text">
                            View Book
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Books;
