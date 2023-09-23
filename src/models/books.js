import mongoose, { Schema, models } from "mongoose"

const booksSchema = new Schema(
    {
        title: {
            type: String,
        },
        category: {
            type: String,
        },
        sub_category: {
            type: String,
        },
        coverPageUrl: {
            type: String,
        },
        bookUrl: {
            type: String,
        },
        author: {
            type: String
        },
    },

);

const Books = models.Books || mongoose.model("Books", booksSchema);
export default Books; 