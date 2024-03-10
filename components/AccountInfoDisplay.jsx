"use client";
import Image from "next/image";
import { Mail, CalendarDays, NotebookPen, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Loader from "./Loader";

const AccountInfoDisplay = ({
  avatar,
  fullName,
  username,
  email,
  bio,
  role,
  signupDate,
  isUserAccount,
  userPostsCount,
  handleEditButtonClick,
}) => {
  return (
    <>
      <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3">
        <Image
          alt={fullName}
          src={avatar}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="font-semibold text-xl">{fullName}</span>
          <span className="text-lg">{username}</span>
        </div>

        <p className="text-neutral-700">{bio}</p>

        <div className="text-sm flex flex-col gap-1">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            <p>
              <Link
                href={`mailto:${email}`}
                className="hover:underline"
              >
                {email}
              </Link>
            </p>
          </div>
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-1" />
            <p>{signupDate}</p>
          </div>
          <div className="flex items-center">
            <NotebookPen className="w-4 h-4 mr-1" />
            {/* FIX: FETCH ACTUAL POSTS NUMBER */}
            <p>{userPostsCount} articles posted</p>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {/* FIX: FETCH ACTUAL POSTS NUMBER */}
            <p>{role}</p>
          </div>
        </div>
        {isUserAccount && (
          <Button
            variant="default"
            onClick={() => {
              handleEditButtonClick(true);
            }}
          >
            Edit profile
          </Button>
        )}
      </div>
    </>
  );
};

export default AccountInfoDisplay;
