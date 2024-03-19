"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./database";
import { NewsletterEmail, User } from "./models";

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

export const addArticle = async (formData) => {
  // console.log(formData.get("featuredImage").name);
  const title = formData.get("title");
  const slug = formData.get("slug");
  const category = formData.get("category");
  const featuredImage = formData.get("featuredImage");

  console.log("Title:", title);
  console.log("Slug:", slug);
  console.log("Category:", category);
  console.log("FeaturedImage:", featuredImage);
};
