import mongoose, { Schema, models } from "mongoose"

const googleUserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }

);

const googleUser = models.googleUser || mongoose.model("googleUser", googleUserSchema);
export default googleUser; 