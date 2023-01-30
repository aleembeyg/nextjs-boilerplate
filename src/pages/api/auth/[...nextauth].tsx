import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_APP_ID || "",
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET_ID || "",
    }),
  ],
});
