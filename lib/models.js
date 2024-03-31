import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
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

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      default: "",
    },
    body: {
      type: String,
      required: true,
      default: "",
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    category: {
      type: String,
      default: "",
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    featuredImage: {
      type: String,
      default: "",
    },
    featuredPost: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const newsletterEmailSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isUser: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const customerSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const NewsletterEmail =
  mongoose.models?.NewsletterEmail || mongoose.model("NewsletterEmail", newsletterEmailSchema);
export const Customer = mongoose.models?.Customer || mongoose.model("Customer", customerSchema);
