import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    Facebook({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
