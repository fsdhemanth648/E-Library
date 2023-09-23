import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from '@/models/user'

export async function POST(req) {
    try {
        const { username, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({ username, email, password: hashedPassword });

        return NextResponse.json({ message: "User Registered from Site" }, { status: 201 });
    } catch {
        return NextResponse.json({ message: "An error occurred while registering the user from site" }, { status: 500 });
    }
}