import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

// Enable studio auth in development mode
const cookiesPolicy =
  process.env.NODE_ENV === "development"
    ? {
        sessionToken: {
          name: `_Secure_next-auth.session-token`,
          options: {
            httpOnly: true,
            sameSite: "None",
            path: "/",
            secure: true
          }
        }
      }
    : {};

const prisma = new PrismaClient();

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  // callbacks: {
  //   session({ session, token, user }) {
  //     return session; // The return type will match the one returned in `useSession()`
  //   }
  // },
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || ""
    })
  ],
  cookies: cookiesPolicy
});
