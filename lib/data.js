import { connectToDb } from "./database";
import { Post } from "./models";

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
