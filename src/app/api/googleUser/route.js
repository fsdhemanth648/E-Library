import { connectMongoDB } from '@/lib/mongodb'
import googleUser from '@/models/googleUser'
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { name, email } = await request.json();
    await connectMongoDB();
    await googleUser.create({ name, email });
    return NextResponse.json({ message: "User Registered from Google" }, { status: 201 });
}