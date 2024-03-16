import mongoose from "mongoose";
import { Schema } from "mongoose";

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

export const NewsletterEmail =
  mongoose.models?.NewsletterEmail || mongoose.model("NewsletterEmail", newsletterEmailSchema);
