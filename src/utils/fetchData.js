import { connectToDb } from "./connect";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";
// const posts = [
//   {
//     id: 1,
//     userId: 1,
//     img: "/culture.png",
//     createdAt: "11/26/2023",
//     catSlug: "Lifestyle",
//     slug: "new-life",
//     title: "New Life",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur sequi iure quas dolores! Iste maiores voluptates architecto, reprehenderit tempora labore eveniet modi eligendi quidem suscipit quo doloribus eum nobis."
//   },
//   {
//     id: 2,
//     userId: 1,
//     img: "/culture.png",
//     createdAt: "11/26/2023",
//     catSlug: "Blockchain",
//     slug: "new-blocks",
//     title: "New Blocks",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur sequi iure quas dolores! Iste maiores voluptates architecto, reprehenderit tempora labore eveniet modi eligendi quidem suscipit quo doloribus eum nobis."
//   },
//   {
//     id: 3,
//     userId: 2,
//     img: "/culture.png",
//     createdAt: "11/26/2023",
//     catSlug: "Security",
//     slug: "lots-of-security",
//     title: "Lots of Security",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur sequi iure quas dolores! Iste maiores voluptates architecto, reprehenderit tempora labore eveniet modi eligendi quidem suscipit quo doloribus eum nobis."
//   },
//   {
//     id: 4,
//     "userId": "65ce5227b2c759409386968c",
//     "img": "/culture.png",
//     "createdAt": "11/26/2023",
//     "catSlug": "Tech",
//     "slug": "new-tech-ai",
//     "title": "New Tech: AI",
//     "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur sequi iure quas dolores! Iste maiores voluptates architecto, reprehenderit tempora labore eveniet modi eligendi quidem suscipit quo doloribus eum nobis.",
//     "createdAt": "2023-06-20T16:11:32.888+00:00"
//   },
// ]

// const users = [
//   {
//     id: 1,
//     firstName: "Sam",
//     lastName: "Otter",
//     email: "sam@otter.com",
//     img: "/ottertux.webp",
//   },
  // {
  //   id: 2,
  //   "firstName": "Steph",
  //   "lastName": "Otter",
  //   "email": "steph@otter.com",
  //   "password": "123456",
  //   "img": "/fashion.png",
  //   "isAdmin": false,
  //   "createdAt": "2023-06-20T16:11:32.888+00:00"
  // },
// ]

// export const getPosts = async () => {
//   return posts;
// };

// export const getPost = async (slug) => {
//   const post = posts.find((post) => post.slug === (slug));
//   return post
// };

// export const getUsers = async () => {
//   return users;
// };

// export const getUser = async () => {
//   return users.find((user) => user.id === id);
// };



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