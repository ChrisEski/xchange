"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./database";
import { Customer, NewsletterEmail, Post, User } from "./models";
import { auth } from "@clerk/nextjs";
import { baseURL } from "./constables";
import { v2 as cloudinary } from "cloudinary";
import { faker } from "@faker-js/faker";
import { redirect } from "next/navigation";
import { updateUser } from "./data/users";

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
export const editPersonalInfo = async (formData) => {
  const { userId } = auth();

  try {
    await connectToDb();

    const rawFormData = {
      // avatar: formData.get("avatar"), // Temporarily NOT included
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      username: formData.get("username"),
      email: formData.get("email"),
      bio: formData.get("bio"),
    };

    // Update user in the database & Clerk
    const updatedUser = await updateUser(userId, rawFormData);
    return updatedUser;
  } catch (error) {
    console.trace("Error editing user:", error);
  }
};

/**
 * Processes and logs article submission form data.
 *
 * This function extracts article details from the submitted form data, including the article's title, slug, category, and featured image. It currently logs these details to the console. This function is designed to be a part of the article submission handling process, potentially preceding validation, persistence to a database, or further processing.
 *
 * @param {FormData} formData - The form data object containing the article submission information. Expected to have fields for title, slug, category, and featured image.
 */
export const addArticle = async (editorContent, formData) => {
  const category = await formData.get("category");
  const slug = await formData.get("slug");
  try {
    // await console.log("Form data:", formData);
    // await console.log("Username:", urlParamsUsername);
    // await console.log("Editor content:", editorContent);
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
      body: editorContent,
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
    console.log(responseData);
    // return { status: 201, data: postData };
    // return { status: 201 };
  } catch (error) {
    console.log("Error submitting post", error);
  }

  revalidatePath("/", "page");
  revalidatePath("/posts/categories/[category]", "page");
  redirect(`/posts/categories/${category}/${slug}`);
};

export const deleteArticle = async (formData) => {
  try {
    await connectToDb();

    const postId = formData.get("postId");
    await Post.findByIdAndDelete(postId);

    revalidatePath("/dashboard/[username]", "page");
  } catch (error) {
    console.log("Error deleting article", error);
  }
};

export const deleteSubscriber = async (formData) => {
  try {
    await connectToDb();

    const userId = formData.get("userId");
    await NewsletterEmail.findByIdAndDelete(userId);

    revalidatePath("/dashboard/[username]", "page");
  } catch (error) {
    console.log("Error deleting article", error);
  }
};

export const addCustomer = async (formData) => {
  try {
    await connectToDb();

    const name = formData.get("name");
    const email = formData.get("email");
    // console.log(name, email);

    const newCustomer = await Customer.create({
      name: name,
      email: email,
    });

    await newCustomer.save();
    revalidatePath("/actions");
  } catch (error) {
    console.log("Error creating customer");
  }
};

export const deleteCustomer = async (formData) => {
  try {
    await connectToDb();
    const id = formData.get("id");
    await Customer.findByIdAndDelete(id);
    console.log("Deleted customer with ID:", id);
    revalidatePath("/actions");
  } catch (error) {
    console.log("Error deleting customer", error);
  }
};
