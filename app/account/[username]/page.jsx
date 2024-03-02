// MAKE PAGE LIKE GITHUB'S PROFILE PAGE

import { getSingleUser } from "@/lib/data";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AccountInfo from "@/components/AccountInfo";

const UserPosts = async ({ params }) => {
  const loggedInUser = await getSingleUser("user1");
  const visitedUser = await getSingleUser(params.username);
  console.log("Visited User:", visitedUser.email);

  const { firstName, lastName, username, email, bio, avatar } = visitedUser;
  const fullName = `${firstName} ${lastName}`;
  // Check if the account displayed is the logged in user's account
  const isUserAccount = loggedInUser?.username === params?.username;
  // console.log(`Is user's account:`, isUserAccount);
  return (
    <section className="flex flex-col gap-12 px-12 py-16 max-w-[1220px] mx-auto border-4 border-blue-400">
      <div className="flex justify-between items-center">
        <h1 className="font-display font-bold text-5xl">
          {isUserAccount ? "Account Dashboard" : `${params.username}'s Account`}
        </h1>
      </div>
      <div className="flex gap-7">
        {/* ACCOUNT INFO */}

        {/* <AccountInfo
          visitedUser={visitedUser}
          isUserAccount={isUserAccount}
        /> */}
        {/* USER'S POSTS */}
        <div className="border-2 border-red-400 flex-auto">Posts</div>
      </div>
    </section>
  );
};

export default UserPosts;
