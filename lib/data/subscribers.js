import { connectToDb } from "../database";
import { NewsletterEmail } from "../models/NewsLetterEmail";

/**
 * Retrieve all newsletter subscribers from the database.
 * @async
 * @returns {Promise<Array<object>>} A promise that resolves with an array of subscriber objects.
 * @throws {Error} If an error occurs while fetching the subscribers.
 */
export const getNewsletterSubscribers = async () => {
  try {
    await connectToDb();
    const subscribers = await NewsletterEmail.find();
    return subscribers;
  } catch (error) {
    throw new Error("Error fetching the subscribers:", error);
  }
};

export const fetchSubscribers = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/subscribers`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching subscribers", error);
  }
};