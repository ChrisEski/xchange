import { baseURL } from "../constables";
import { connectToDb } from "../database";
import { NewsletterEmail } from "../models";

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

/**
 * Fetches the list of subscribers from the server.
 *
 * This function makes an asynchronous HTTP GET request to the server's `/api/subscribers` endpoint to retrieve the current list of subscribers. It uses the 'no-store' cache policy to ensure the most up-to-date information is fetched.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the fetched data.
 * @throws {Error} Throws an error if the request fails, logging the error to the console.
 */
export const fetchSubscribers = async () => {
  try {
    const res = await fetch(`${baseURL}/api/subscribers`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching subscribers", error);
  }
};
