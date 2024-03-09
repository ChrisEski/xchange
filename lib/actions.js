"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./database";
import { NewsletterEmail, User } from "./models";

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

    const subscriberData = { email: subscriber.email, isUser: subscriber.isUser };
    // console.log("Subscriber is already a registered user:", subscriberData.isUser);

    // 4. Revalidate homepage
    revalidatePath("/");

    // 5. Return the new data
    return { status: 201, subscriberData };
  } catch (error) {
    console.log("Error submitting newsletter email", error);
  }
};
