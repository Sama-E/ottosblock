import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { connectToDb } from "./connect";
import { User } from "./models";
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';


  // Social Media + Credential Providers 
  export const { 
    handlers: { GET, POST},
    auth, 
    signIn, 
    signOut 
  } = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      CredentialsProvider({
        async authorize(credentials) {
          try {
            const user = await login(credentials);
            return user;
          } catch (err) {
            return null;
          }
        },
      }),
    ],
    callbacks:{
      async signIn({user, account, profile}) {
        console.log(user, account, profile);
        if (account.provider === "github"){
          connectToDb();
          try {
            const user = await User.findOne({ email: profile.email });

            if(!user){
              const newUser = new User({
                username: profile.login,
                email: profile.email,
                image: profile.avatar_url,
              });

              await newUser.save();
              }
          } catch (err) {
              console.log(err) 
              return false;
          }
        }
        return true;
      },
      ...authConfig.callbacks,
    }
  });

  //Login Credentials
  const login = async (credentials) => {
    try {
      connectToDb();
      const user = await User.findOne({ email: credentials.email });

      if (!user) throw new Error ("Wrong credentials.")

      const isPasswordCorrect = await bcrypt.compare(
        credentials.password,
        user.password
      );

      if(!isPasswordCorrect) throw new Error("Wrong credentials! ");

      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to login!");
    }
  };