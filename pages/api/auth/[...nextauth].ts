import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

console.log(process.env)
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
});
