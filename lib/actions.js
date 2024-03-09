"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./database";
import { NewsletterEmail } from "./models";

export const addSubscriber = async (formData) => {
  try {
    await connectToDb();
    const subscriber = await NewsletterEmail.findOneAndUpdate(
      { email: formData.get("email") },
      {
        email: formData.get("email"),
        isUser: false,
      },
      {
        upsert: true,
        new: true,
      }
    );

    await subscriber.save();
    const subscriberData = { email: subscriber.email, isUser: subscriber.isUser };
    console.log("Subscriber added successfully to newsletter list:", subscriberData.email);
    // revalidatePath("/");
    // console.log("element by id value:", document.getElementById("email"));
    return subscriberData;
  } catch (error) {
    throw Error("Error submitting newsletter email", error);
  }
};
