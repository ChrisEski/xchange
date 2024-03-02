"use client";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AccountInfo = ({ avatar, fullName, username, email, bio, isUserAccount }) => {
  return (
    <div className=" flex-auto flex flex-col max-w-[25%]">
      <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3">
        <Image
          src={avatar}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <span className="font-bold text-2xl">{fullName}</span>
      <span className="text-xl text-neutral-600">{username}</span>
      <div className="flex items-center">
        <Mail className="w-4 mr-2" />
        <Button
          variant="link"
          className="p-0"
        >
          <Link
            href={`mailto:${email}`}
            className="mb-[3px]"
          >
            {email}
          </Link>
        </Button>
      </div>
      <p className="mb-3">{bio}</p>
      {isUserAccount && <Button variant="default">Edit profile</Button>}
    </div>
  );
};

export default AccountInfo;
