import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../auth/lib/mongodb";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import db from "@/utils/db";

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/providers/oauth
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      
      db.connectDb();
      let user = await User.findById(token.sub);
      db.disconnectDb();
      session.user.id = token.sub || user._id.toString();
      session.user.role = user.role || "user";
      token.role = user.role || "user";


      return session;
    },
  },
  pages: {
    signIn: "/signIn",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
});
