import AccountInfo from "@/components/(AccountDashboard)/AccountInfo";
import AccountPosts from "@/components/(AccountDashboard)/AccountUserPosts";
import AccountInfoStats from "@/components/(AccountDashboard)/AccountAdminStats";
import { getSingleUserByUsername } from "@/lib/data/users";
import { Suspense } from "react";

const ProfileAccount = async ({ params, searchParams }) => {
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

export default ProfileAccount;
