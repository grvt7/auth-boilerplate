import { UserService } from "@/services/UserService";
import { logger } from "@/utils/logger";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {signIn: '/login'},
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "username", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials): Promise<any> {
          if(!credentials) return null;
          try {
            const user = await UserService.loginUser(credentials);  
            if (user) {
              return user.data;
            }
          } catch (error) {
            logger.error('Login Error', error);
          }
          return null;
      },
    })
  ],
  callbacks: {
    // async session({ session, token }) {
    //   if (token) {
    //     session.user._id = token._id?.toString();
    //     session.user.username = token.username;
    //     session.user.fullname = token.fullname;
    //   }
    //   return session;
    // }
  }
}