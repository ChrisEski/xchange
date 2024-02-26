import { connectToDb } from "./database";
import { Post, User } from "./models";

// FETCHING POSTS DATA
export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    console.log("Posts fetched:", posts.length);
    return posts;
  } catch (error) {
    throw new Error("Error fetching the posts:", error);
  }
};

export const getSinglePost = async (id) => {
  try {
    await connectToDb();
    const post = await Post.findById(id).populate("author");
    console.log("Post fetched:", post.title);
    return post;
  } catch (error) {
    throw error;
  }
};

// FETCHING USERS DATA
export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    console.log("Users fetched:", users.length);
    return users;
  } catch (error) {
    throw new Error("Error fetching the users:", error);
  }
};

export const getSingleUser = async (id) => {
  try {
    await connectToDb();
    const user = await User.findById(id).populate("posts");
    console.log("User fetched:", user.username);
    return user;
  } catch (error) {
    throw new Error("Error fetching the user:", error);
  }
};
