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
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    featuredImage: String,
    featuredPost: Boolean,
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    clerkId: {
      type: String,
      unique: true,
    },
    firstName: String,
    lastName: String,
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: String,
    bio: String,
    password: String,
    provider: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post", // Reference to the Post model
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
