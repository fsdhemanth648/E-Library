import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Books from '@/models/books'

export async function GET(req) {
    try {
        await connectMongoDB();
        const books = await Books.find();
        return NextResponse.json({ books }, { message: "Fetched Books" }, { status: 200 });
    } catch {
        console.error(error);
        return NextResponse.json({ message: "An error occurred while fetching books" }, { status: 500 });
    }
}