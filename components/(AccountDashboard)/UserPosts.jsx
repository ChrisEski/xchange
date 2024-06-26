"use client";
export const dynamic = "force-dynamic";

import { fetchUserPosts } from "@/lib/data/posts";
import { formatDate } from "@/lib/utils";
import { Pencil, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { deleteArticle } from "@/lib/actions";
import { redirect, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import DeletePostForm from "../ui/DeletePostForm";

const UserPosts = ({ username, isUserAccount, fullName }) => {
  const router = useRouter();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllPosts = async (username) => {
      const allPosts = await fetchUserPosts(username);
      setPosts(allPosts);
      setIsLoading(false);
    };

    getAllPosts(username);
  }, [username]);

  const handleEditButtonClick = () => {
    alert("Editing");
  };
  const handleDeleteButtonClick = async () => {
    // MAKE IT A FORM ACTION
  };

  return (
    <div className="border border-neutral-300 rounded-lg p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">
          {isUserAccount ? "My Articles" : `Articles by ${fullName}`}
        </h2>
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
        <div>Loading data...</div>
      ) : posts.length === 0 || posts === undefined ? (
        <div>No articles published yet</div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 table-fixed">
          <thead className="text-sm">
            <tr>
              <th className="text-left px-5">Title</th>
              <th className="text-left pr-5">Creation Date</th>
              {isUserAccount && <th className="text-left"></th>}
            </tr>
          </thead>
          <tbody className="text-sm">
            {posts.map((post) => (
              <tr
                key={post?._id}
                className="h-16 hover:bg-neutral-100"
              >
                <td className={`p-5 hover:underline ${isUserAccount ? "w-[450px]" : "w-full"}`}>
                  <Link
                    href={`/posts/categories/${post?.category}/${post?.slug}`}
                    target="_blank"
                    className="flex gap-1"
                  >
                    {post?.title}
                  </Link>
                </td>
                <td className="w-[113px]">{formatDate(post?.createdAt)}</td>
                {isUserAccount && (
                  <td className="w-[10px]">
                    <div className="flex justify-end items-center gap-3 w-[120px]">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleEditButtonClick}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <DeletePostForm postId={post?._id} />
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserPosts;
