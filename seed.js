import { Post, User } from "./lib/models";
import { connectToDb } from "./lib/database";
import { posts, users } from "./mockData";
// import fetch from "node-fetch";
import fs from "fs";

// export const feedPosts = async () => {
//   try {
//     await connectToDb();
//     await Post.create(posts);
//     console.log("Posts successfully inserted");
//   } catch (error) {
//     console.log("Failed to feed posts to db");
//     console.log(error);
//   }
// };

// export const feedUsers = async () => {
//   try {
//     await connectToDb();
//     await User.create(users);
//     console.log("Users successfully inserted");
//   } catch (error) {
//     console.log("Failed to feed users db");
//     console.log(error);
//   }
// };
