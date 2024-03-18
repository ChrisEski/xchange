"use client";
export const dynamic = "force-dynamic";

import { fetchUserPosts } from "@/lib/data/posts";
import { formatDate } from "@/lib/utils";
import { Pencil, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";

const UserPosts = ({ username, isUserAccount }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllPosts = async (username) => {
      const allPosts = await fetchUserPosts(username);
      setPosts(allPosts);
      setIsLoading(false);
    };

    getAllPosts(username);
  }, []);

  const handleEditButtonClick = () => {
    alert("Editing");
  };
  const handleDeleteButtonClick = () => {
    alert("Deleting");
  };

  return (
    <div className="border border-neutral-300 rounded-lg p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">My Articles</h2>
        {isUserAccount && (
          <Link
            href={`/dashboard/${username}/create-post`}
            className={buttonVariants({ variant: "outline" })}
          >
            <Plus className="mr-2 h-4 w-4 text-neutral-700" /> Create new
          </Link>
        )}
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : posts.length === 0 || posts === undefined ? (
        <div>No articles published yet</div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 table-fixed">
          <thead className="text-sm">
            <tr>
              <th className="text-left px-5">Title</th>
              <th className="text-left pr-5">Creation Date</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {posts.map((post) => (
              <tr
                key={post?._id}
                className="h-16 hover:bg-neutral-100"
              >
                <td className="max-w-[250px] p-5 hover:font-bold">
                  <Link
                    href={`/posts/categories/${post?.category}/${post?.slug}`}
                    target="_blank"
                    className="flex gap-1"
                  >
                    {post?.title}
                  </Link>
                </td>
                <td className="max-w-[120px]">{formatDate(post?.createdAt)}</td>
                <td>
                  <button onClick={handleEditButtonClick}>
                    <Pencil className="w-4 text-neutral-700 mr-2" />
                  </button>
                  <button onClick={handleDeleteButtonClick}>
                    <Trash2 className="w-4 text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserPosts;
