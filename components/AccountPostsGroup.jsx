// "use client";
import { getAllPostsByAuthor } from "@/lib/data";
import AccountPostCard from "./AccountPostCard";

// import { useEffect, useState } from "react";
import PaginationComponent from "./PaginationComponent";
import { Suspense } from "react";
import Loader from "./Loader";

const AccountPostsGroup = async ({ username }) => {
  const posts = await getAllPostsByAuthor(username);

  // const [userPosts, setUserPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchPosts = async (username, limit) => {
  //     try {
  //       // MAKE FETCH REQUEST DIRECTLY TO DB TO ADD SORTING AND LIMIT
  //       const response = await fetch(
  //         `http://localhost:3000/api/users/${username}/posts?limit=${limit}`
  //       );
  //       const posts = await response.json();
  //       setUserPosts(posts);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchPosts(username, 5);
  // }, [username]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <AccountPostCard
              key={post._id}
              featuredImage={post?.featuredImage}
              title={post?.title}
              createdAt={post?.createdAt}
            />
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default AccountPostsGroup;
