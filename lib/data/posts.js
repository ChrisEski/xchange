import { connectToDb } from "../database";
import { Post } from "../models";
import { User } from "../models";

/**
 * Fetches all posts from the API.
 * @returns {Promise<Array<Object>>} A Promise that resolves to an array of post objects.
 * @throws {Error} If there is an error fetching the posts.
 */
export const fetchAllPosts = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching posts", error);
  }
};

/**
 * Fetches posts by category from the API.
 *
 * This function asynchronously retrieves a list of posts from a specified category
 * by making a GET request to the server. It returns the fetched data as a JSON object.
 * If the request fails for any reason, it logs the error to the console.
 *
 * @param {string} category - The category of posts to fetch.
 * @returns {Promise<Object>} A promise that resolves to the JSON object containing the list of posts.
 * @throws {Error} If the fetch operation fails, it logs the error.
 */
export const fetchCategoryPosts = async (category) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${category}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching posts", error);
  }
};

/**
 * Fetches posts for a specific user using API route
 * @param {string} username - The username of the user whose posts are to be fetched.
 * @returns {Promise<Array<Object>>} - A Promise that resolves to an array of post objects.
 */
export const fetchUserPosts = async (username) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${username}/posts`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching posts", error);
  }
};

/**
 * Retrieve posts from the database based on specified criteria.
 * If numOfPosts is provided, returns the last numOfPosts number of posts.
 * If category is provided, returns posts from the specified category.
 * If neither count nor category is provided, returns all posts from all categories.
 * @param {number} [numOfPosts] - Optional. The number of posts to retrieve. To return all posts from specific category, pass "null".
 * @param {string} [category] - Optional. The category of posts to retrieve. If not provided, posts from all categories will be returned.
 * @returns {Promise<Array>} A promise that resolves with an array of post objects that match the specified criteria.
 * @throws {Error} If an error occurs during the retrieval process.
 */
export const getPosts = async (numOfPosts = null, category) => {
  try {
    await connectToDb();
    let query = Post.find();

    // If a category is specified, filter by category
    if (category) {
      ``;
      query = query.where({ category: category });
    }

    // Sort by createdAt field in descending order (most recent first)
    query = query.sort({ createdAt: -1 });

    // Limit the number of posts returned if count is specified
    if (numOfPosts !== null) {
      query = query.limit(numOfPosts);
    }

    const posts = await query.populate("author").exec();
    return posts;
  } catch (error) {
    console.error("Error getting posts:", error);
    throw error;
  }
};

/**
 * Fetches section posts based on the specified parameters.
 * If the category is "latest", fetches the latest specified number of posts.
 * Otherwise, fetches the last specified number of posts of the specific category.
 * @param {number} numOfPosts - The number of posts to fetch.
 * @param {string} category - The category of posts to fetch. If "latest", fetches the latest posts.
 * @returns {Promise<Array<Object>>} The fetched section posts.
 * @throws {Error} Throws an error if there is an issue fetching the posts.
 */
export const getSectionPosts = async (numOfPosts, category) => {
  try {
    let fetchedPosts;
    if (category === "latest") {
      // fetchedPosts = await getPosts(numOfPosts); // Fetch the latest 3 posts
      fetchedPosts = await Post.find()
        .sort({ createdAt: -1 })
        .limit(numOfPosts)
        .skip(1)
        .populate("author");
    } else if (category === "featured") {
      fetchedPosts = await Post.find()
        .where({ fetchedPosts: true })
        .sort({ createdAt: -1 })
        .limit(numOfPosts)
        .populate("author");
    } else {
      fetchedPosts = await getPosts(numOfPosts, category); // Fetch the last 3 posts of the specific category
    }
    return fetchedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

/**
 * Fetches the two most recent featured posts.
 * @returns {Promise<Array<Object>>} The fetched section posts.
 * @throws {Error} Throws an error if there is an issue fetching the posts.
 */
export const getFeaturedPosts = async () => {
  try {
    await connectToDb();
    const featuredPost = await Post.find({ featuredPost: true })
      .sort({ createdAt: -1 })
      .limit(2)
      .populate("author");
    return featuredPost;
  } catch (error) {
    console.error("Error fetching featured posts:", error);
  }
};

/**
 * Retrieve a single post from the database based on its slug.
 * @async
 * @param {string} slug - The slug of the post to retrieve.
 * @returns {Promise<object|null>} A promise that resolves with the post object if found, or null if not found.
 * @throws {Error} If an error occurs while fetching the post.
 */
export const getSinglePost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug }).populate("author");
    // console.log("Post fetched:", post.title);
    return post;
  } catch (error) {
    throw error;
  }
};

/**
 * Retrieve all posts published by a specific user.
 * @param {string} username - The username of the user whose posts are to be retrieved.
 * @returns {Promise<Array>} An array of post objects published by the specified user.
 * @throws {Error} Throws an error if there is an issue retrieving the posts.
 */
export const getAllPostsByAuthor = async (username) => {
  try {
    await connectToDb();

    // Get the params user's mongodb id in order to fetch the posts created by him
    const user = await User.findOne({ username: username });
    const userId = user._id;

    // Find all posts published by this user
    const posts = await Post.find({ author: userId });
    // console.trace(`User ${username} has posted ${posts.length} articles`);
    return posts;
  } catch (error) {
    throw error;
  }
};
