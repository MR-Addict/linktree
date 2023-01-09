import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password", placeholder: "Passwrod" },
      },
      authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        if (username === "cael" && password === "189124") return { id: "1", name: "cael" };
        else return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
