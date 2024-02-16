"use server";

import { signIn, signOut } from "./auth";
import { connectToDb } from "./connect";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";
import bcrypt from "bcryptjs";


export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleGooglehubLogin = async () => {
  await signIn("google");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { firstName, lastName, email, img, password, passwordConfirm } =
    Object.fromEntries(formData);

  if(password !== passwordConfirm) {
    return { error: "Password does not match." }
  }

  try {
    connectToDb();

    //Find if user exists
    const user = await User.findOne({ email });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (user) {
      return { error: "User already exists" };
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!"}
  }
};

//Login
export const login = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    console.log(err);
    // return { error: "Invalid email or password"}

    
    if (err){
      return { error: "Invalid email or password" };
    }
    throw err;
  }
};