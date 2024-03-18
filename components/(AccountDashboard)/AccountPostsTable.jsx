"use client";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

const AccountPostsTable = ({ posts }) => {
  // const handleEditButtonClick = () => {
  //   alert("Editing");
  // };
  // const handleDeleteButtonClick = () => {
  //   alert("Deleting");
  // };
  // return (
  //   <div className="flex flex-col gap-3">
  //     {/* {posts.map((post) => (
  //           <AccountPostCard
  //             key={post?._id}
  //             featuredImage={post?.featuredImage}
  //             title={post?.title}
  //             createdAt={post?.createdAt}
  //             category={post?.category}
  //             slug={post?.slug}
  //           />
  //         ))} */}
  //     <table className="min-w-full divide-y divide-gray-200 table-fixed">
  //       <thead className="text-sm">
  //         <tr>
  //           <th className="text-left px-5">Title</th>
  //           <th className="text-left pr-5">Creation Date</th>
  //           <th className="text-left">Actions</th>
  //         </tr>
  //       </thead>
  //       <tbody className="text-sm">
  //         {posts.map((post) => (
  //           <tr
  //             key={post?._id}
  //             className="h-16 hover:bg-neutral-100"
  //           >
  //             <td className="max-w-[250px] p-5 hover:font-bold">
  //               <Link
  //                 href={`/posts/categories/${post?.category}/${post?.slug}`}
  //                 target="_blank"
  //                 className="flex gap-1"
  //               >
  //                 {post?.title}
  //               </Link>
  //             </td>
  //             <td className="max-w-[120px]">{formatDate(post?.createdAt)}</td>
  //             <td className="">
  //               <button
  //                 className="mr-3"
  //                 onClick={handleEditButtonClick}
  //               >
  //                 <Pencil className="w-[20px]" />
  //               </button>
  //               <button onClick={handleDeleteButtonClick}>
  //                 <Trash2 className="w-[20px] text-red-600" />
  //               </button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
};

export default AccountPostsTable;
