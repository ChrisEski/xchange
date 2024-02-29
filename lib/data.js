import { connectToDb } from "./database";
import { Post, User } from "./models";

// FETCHING POSTS DATA
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
      fetchedPosts = await getPosts(numOfPosts); // Fetch the latest 3 posts
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

// FETCHING USERS DATA

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
 * Retrieve a single user from the database by their ID.
 * @async
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<object>} A promise that resolves with the user object.
 * @throws {Error} If an error occurs while fetching the user.
 */
export const getSingleUser = async (id) => {
  try {
    await connectToDb();
    const user = await User.findById(id).populate("posts");
    // console.log("User fetched:", user.username);
    return user;
  } catch (error) {
    throw new Error("Error fetching the user:", error);
  }
};
