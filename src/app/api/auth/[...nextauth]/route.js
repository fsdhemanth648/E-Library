import { connectMongoDB } from '@/lib/mongodb';
import googleUser from '@/models/googleUser';
import NextAuth from 'next-auth/next';
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/user';
import bcrypt from 'bcryptjs'

const authOptions = {
    providers: [
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),

        //CredentialsProvider
        CredentialsProvider({
            name: "Credentials",
            credentials: {},

            async authorize(credentials) {
                const { username, password } = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ username });

                    if (!user) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (!passwordMatch) {
                        return null;
                    }

                    return user;
                } catch (err) {
                    console.log("Login Check error", err);
                }
            },
        }),
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },

    callbacks: {
        async signIn({ user, account }) {

            if (account.provider === 'google') {
                const { name, email } = user;
                try {
                    await connectMongoDB();
                    const googleUserExists = await googleUser.findOne({ email });

                    if (!googleUserExists) {
                        const res = await fetch("/api/googleUser", {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name,
                                email,
                            })
                        });
                        if (res.ok) {
                            return user;
                        }
                    }

                } catch (err) {
                    console.log(err);
                }
            }
            return user;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };