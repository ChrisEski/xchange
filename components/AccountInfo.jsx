"use client";

import AccountInfoDisplay from "./AccountInfoDisplay";
import { Suspense, useEffect, useState } from "react";
import AccountInfoEdit from "./AccountInfoEdit";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import { editPersonalInfo } from "@/lib/actions";
import Image from "next/image";
import { getSingleUserById } from "@/lib/data/posts";
import { CalendarDays, Mail, NotebookPen } from "lucide-react";
import { User } from "@/lib/models/Post";
import { Button } from "./ui/button";
import Link from "next/link";

const AccountInfo = () => {
  const [editMode, setEditMode] = useState(false);

  const handleInfoEdit = (bool) => {
    setEditMode(bool);
  };

  const handleSaveInfo = () => {
    alert("Saved");
    setEditMode(false);
    // router.refresh();
  };

  return (
    <div>Info</div>
    // <div className=" flex-auto flex flex-col min-w-[280px] max-w-[25%]">
    //   {editMode ? (
    //     <AccountInfoEdit />
    //   ) : (
    //     <Suspense fallback={<Loader />}>
    //       <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3">
    //         <Image
    //           alt={loggedInUser.fullName}
    //           src={loggedInUser.avatar}
    //           fill
    //           style={{ objectFit: "cover" }}
    //         />
    //       </div>
    //       <div className="flex flex-col gap-3">
    //         <div className="flex flex-col">
    //           <span className="font-semibold text-xl">{loggedInUser.fullName}</span>
    //           <span className="text-lg">{loggedInUser.username}</span>
    //         </div>

    //         <p className="text-neutral-700">{loggedInUser.bio}</p>

    //         <div className="text-sm flex flex-col gap-1">
    //           <div className="flex items-center">
    //             <Mail className="w-4 h-4 mr-1" />
    //             <p>
    //               <Link
    //                 href={`mailto:${loggedInUser.email}`}
    //                 className="hover:underline"
    //               >
    //                 {loggedInUser.email}
    //               </Link>
    //             </p>
    //           </div>
    //           <div className="flex items-center">
    //             <CalendarDays className="w-4 h-4 mr-1" />
    //             <p>{signupDate}</p>
    //           </div>
    //           <div className="flex items-center">
    //             <NotebookPen className="w-4 h-4 mr-1" />
    //             {/* FIX: FETCH ACTUAL POSTS NUMBER */}
    //             <p>{loggedInUser.postsCount} articles posted</p>
    //           </div>
    //           <div className="flex items-center">
    //             <User className="w-4 h-4 mr-1" />
    //             {/* FIX: FETCH ACTUAL POSTS NUMBER */}
    //             <p>{role}</p>
    //           </div>
    //         </div>
    //         {isUserAccount && (
    //           <Button
    //             variant="default"
    //             onClick={() => {}}
    //           >
    //             Edit profile
    //           </Button>
    //         )}
    //       </div>
    //     </Suspense>
    //     // <div>test</div>
    //   )}
    // </div>
  );
};

export default AccountInfo;
