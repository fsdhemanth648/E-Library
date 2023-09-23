import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Videos from '@/models/videos'

export async function GET(req) {
    try {
        await connectMongoDB();
        const videos = await Videos.find();
        return NextResponse.json({ videos }, { message: "Fetched videos" }, { status: 200 });
    } catch {
        console.error(error);
        return NextResponse.json({ message: "An error occurred while fetching videos" }, { status: 500 });
    }
}