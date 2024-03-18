"use client";
export const dynamic = "force-dynamic";

import { fetchAllPosts } from "@/lib/data/posts";
import { formatDate } from "@/lib/utils";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await fetchAllPosts();
      setPosts(allPosts);
      setIsLoading(false);
    };

    getAllPosts();
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
        <h2 className="font-bold text-xl">All Articles</h2>
        {/* <div>
          <Link
            href="https://dashboard.clerk.com"
            target="_blank"
            className={`${buttonVariants({ variant: "outline" })} flex items-center gap-1`}
          >
            <span>Manage articles</span>
            <ExternalLink className="w-4 text-neutral-800" />
          </Link>
        </div> */}
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
                  <button onClick={handleDeleteButtonClick}>
                    <Trash2 className="w-[20px] text-red-600" />
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

export default AdminPosts;
