import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const client_id =
  "893347919691-j5tr1s35gppcoqmbe8du3f3iig03f9h3.apps.googleusercontent.com";
const secret_id = "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";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: client_id,
      clientSecret: secret_id,
    }),
  ],
});
