import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    body: String,
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    category: String,
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    featuredImage: String,
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: { type: String, unique: true },
    password: String,
    provider: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    avatar: String,
    bio: String,
    posts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Post", // Reference to the Post model
      },
    ],
  },
  { timestamps: true }
);

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
