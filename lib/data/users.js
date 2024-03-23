import { baseURL } from "../constables";
import { connectToDb } from "../database";
import { User } from "../models";

/**
 * Retrieve all users from the database.
 * @async
 * @returns {Promise<Array<object>>} A promise that resolves with an array of user objects.
 * @throws {Error} If an error occurs while fetching the users.
 */
export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    // console.log("Users fetched:", users.length);
    return users;
  } catch (error) {
    throw new Error("Error fetching the users:", error);
  }
};

/**
 * Fetches all users from the API.
 * @returns {Promise<Array<Object>>} A Promise that resolves to an array of user objects.
 * @throws {Error} If there is an error fetching the users.
 */
export const fetchUsers = async () => {
  try {
    const res = await fetch(`${baseURL}/api/users`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching users", error);
  }
};

/**
 * Fetches a single user by their username from the API.
 * @param {string} username - The username of the user to fetch.
 * @returns {Promise<object>} A Promise that resolves to the user data fetched from the API.
 * @throws {Error} If there is an error fetching the user data.
 */
export const fetchSingleUserByUsername = async (username) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${username}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching user", error);
  }
};

/**
 * Asynchronously retrieves a user by their username from the database, including the user's posts.
 *
 * This function first establishes a connection to the database. It then queries the User collection for a single user with the specified username. If found, it populates the user's posts. The function is designed to be used in environments where a database connection can be established asynchronously.
 *
 * @param {string} username - The username of the user to be fetched.
 * @returns {Promise<Object>} A promise that resolves to the user object with populated posts if the user is found. The structure of this object depends on the User model's schema. If the user is not found, this promise resolves to null.
 * @throws {Error} Throws an error if there's an issue connecting to the database or querying for the user.
 */
export const getSingleUserByUsername = async (username) => {
  try {
    await connectToDb();
    const user = await User.findOne({ username }).populate("posts");
    // console.log("User fetched:", user.username);
    return user;
  } catch (error) {
    console.log("Error fetching the user:", error);
  }
};

/**
 * Retrieve a single user from the database by their ID.
 * @async
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<object>} A promise that resolves with the user object.
 * @throws {Error} If an error occurs while fetching the user.
 */
export const getSingleUserById = async (id) => {
  try {
    await connectToDb();
    const user = await User.findOne({ clerkId: id }).populate("posts").exec();
    if (!user) {
      console.log("No user found");
    }
    return user;
    // console.log("User fetched:", user.username);
  } catch (error) {
    throw new Error("Error fetching the user:", error);
  }
};

// Data sent from Clerk Webhooks when a new user is created (user.created)
// They are already deconstructed from inside the /api/webhooks/route.js event handler
// before passed as arguments in the below function
/**
 * Create or update a user in the database based on Clerk Webhooks data.
 * @param {string} id - The Clerk user ID.
 * @param {string} first_name - The first name of the user.
 * @param {string} last_name - The last name of the user.
 * @param {string} image_url - The URL of the user's avatar image.
 * @param {Array<Object>} email_addresses - An array containing the user's email addresses.
 * @param {string} email_addresses.email_address - The email address of the user.
 * @param {string} username - The username of the user.
 * @returns {Promise<User>} The user object created or updated in the database.
 * @throws {Error} Throws an error if there is a problem creating or updating the user.
 */
export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    await connectToDb();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        // If not working, user $set: for updating data
        firstName: first_name,
        lastName: last_name,
        avatar: image_url,
        email: email_addresses[0].email_address,
        username: username,
      },
      {
        upsert: true, // If user does not exist, a new one will be created
        new: true, // Return only the updated document
      }
    );

    await user.save();
    return user;
  } catch (error) {
    throw Error("Error creating new user:", error);
  }
};

// Data sent from Clerk Webhooks when a new user is created (user.deleted)
/**
 * Delete a user from the database based on Clerk Webhooks data.
 * @param {string} id - The Clerk user ID of the user to delete.
 * @returns {Promise<void>} A Promise that resolves once the user is deleted.
 * @throws {Error} Throws an error if there is a problem deleting the user.
 */
export const deleteUser = async (id) => {
  try {
    await connectToDb();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    throw Error("Error deleting user:", error);
  }
};
