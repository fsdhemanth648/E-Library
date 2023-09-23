import mongoose, { Schema, models } from "mongoose"

const videosSchema = new Schema(
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
        youtubeID: {
            type: String,
        },
        youtubeUrl
            : {
            type: String,
        },
        creator: {
            type: String
        },
    },

);

const Videos = models.Videos || mongoose.model("Videos", videosSchema);
export default Videos; 