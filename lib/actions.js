"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./database";
import { NewsletterEmail, Post, User } from "./models";
import { auth } from "@clerk/nextjs";
import { baseURL } from "./constables";
import { faker } from "@faker-js/faker";
import { redirect } from "next/navigation";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Adds a new subscriber to the newsletter list.
 * If the provided email belongs to a registered user, sets "isUser" to true, otherwise sets it to false.
 * @param {Object} formData - The form data object containing the email address of the subscriber.
 * @returns {Object} An object containing the status and subscriber data.
 * @throws {Error} If an error occurs during the process.
 */
export const addSubscriber = async (formData) => {
  try {
    // 1. Connect to DB
    await connectToDb();

    // 2. Check if the email belongs to a registered user
    const isRegisteredUser = await User.findOne({ email: formData.get("email") });
    // console.log("Registered user:", isRegisteredUser);

    // 3. Save email to db and if it belongs to a registered user, set "isUser: true", else set "isUser: false"
    const subscriber = await NewsletterEmail.findOneAndUpdate(
      { email: formData.get("email") },
      {
        email: formData.get("email"),
        isUser: isRegisteredUser !== null ? true : false,
      },
      {
        upsert: true,
        new: true,
      }
    );

    await subscriber.save();

    const subscriberData = {
      email: subscriber.email,
      isUser: subscriber.isUser,
      createdAt: subscriber.createdAt,
    };
    // console.log("Subscriber is already a registered user:", subscriberData.isUser);

    // 4. Revalidate homepage
    revalidatePath("/");

    // 5. Return the new data
    return { status: 201, subscriberData };
  } catch (error) {
    console.log("Error submitting newsletter email", error);
  }
};

/**
 * Updates the personal information of a user.
 * @param {string} username - The username of the user whose information is being updated.
 * @param {Object} formData - The form data object containing the email address of the subscriber.
 * @returns {Promise<void>} A promise indicating the completion of the update operation.
 */
export const editPersonalInfo = async (username, formData) => {
  try {
    await connectToDb();
    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      {
        // If not working, use $set: for updating data
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        bio: formData.get("bio"),
      },
      {
        new: true, // Return only the updated document
      }
    );
    await updatedUser.save();
  } catch (error) {
    console.trace("Error creating new user:", error);
  }
  revalidatePath("/dashboard/[username]", "page");
};

/**
 * Processes and logs article submission form data.
 *
 * This function extracts article details from the submitted form data, including the article's title, slug, category, and featured image. It currently logs these details to the console. This function is designed to be a part of the article submission handling process, potentially preceding validation, persistence to a database, or further processing.
 *
 * @param {FormData} formData - The form data object containing the article submission information. Expected to have fields for title, slug, category, and featured image.
 */
export const addArticle = async (formData) => {
  try {
    await connectToDb();

    // Get signed in user
    const { userId } = auth();
    const user = await User.findOne({ clerkId: userId });

    // Get the featured image the user uploads
    const file = formData.get("featuredImage");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const imgUploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "xchange" }, function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        })
        .end(buffer);
    });
    // const imgUploadResult = await cloudinary.uploader.upload(
    //   "https://plus.unsplash.com/premium_photo-1711134826547-169d7de16190?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   { public_id: "tech_screen" },
    //   function (error, result) {
    //     console.log(result);
    //   }
    // );

    // Get final form data
    const { _id: authorId } = user;
    const title = formData.get("title");
    const slug = formData.get("slug");
    const category = formData.get("category");
    const body = formData.get("body");
    const featuredImage = imgUploadResult.secure_url;

    const postData = {
      title: title,
      slug: slug,
      category: category,
      body: body,
      featuredImage: featuredImage,
      author: authorId,
    };

    const response = await fetch(`${baseURL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      console.log("Failed to post the article");
    }

    const responseData = await response.json();
    return { status: 201, responseData };

    // return { status: 201, data: postData };
  } catch (error) {
    console.log("Error submitting post", error);
  }

  revalidatePath("/", "page");
  revalidatePath(`/posts/categories/${category}`, "page");
  // console.log("Post data:", postData);
};
