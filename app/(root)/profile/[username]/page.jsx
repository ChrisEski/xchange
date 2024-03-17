import AccountInfo from "@/components/AccountInfo";
import AccountPosts from "@/components/AccountPosts";
import AccountInfoStats from "@/components/AccountInfoStats";
import { getSingleUserByUsername } from "@/lib/data/users";
import { Suspense } from "react";

const Account = async ({ params, searchParams }) => {
  const { username } = params;

  // 1. Check if displayed user is Admin
  const displayedUser = await getSingleUserByUsername(username);
  let isAdmin = displayedUser.isAdmin;

  return (
    <section className="flex  gap-12">
      {/* <div className="flex gap-12"> */}
      {/* ACCOUNT INFO */}
      <AccountInfo />
      <div className="flex flex-col gap-6 flex-auto border border-blue-600">
        {isAdmin && <AccountInfoStats />}

        {/* USER'S POSTS & STATISTICS*/}
        <AccountPosts />
      </div>
      {/* </div> */}
    </section>
  );
};

export default Account;
