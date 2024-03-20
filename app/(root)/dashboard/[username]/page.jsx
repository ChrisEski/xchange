export const dynamic = "force-dynamic";

import AccountInfo from "@/components/(AccountDashboard)/AccountInfo";
import AccountAdminStats from "@/components/(AccountDashboard)/AccountAdminStats";
import { fetchAllPosts, fetchUserPosts } from "@/lib/data/posts";
import { fetchUsers, getSingleUserByUsername } from "@/lib/data/users";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchSubscribers } from "@/lib/data/subscribers";
import AdminPageTag from "@/components/(AccountDashboard)/AdminPageTag";

const DashboardAccount = async ({ params }) => {
  const { username } = params;
  const { userId } = auth();
  // 1. Fetch total published posts
  const allPosts = await fetchAllPosts();
  const totalPosts = allPosts.length;

  // 2. Fetch total registered users
  const allUsers = await fetchUsers();
  const totalUsers = allUsers.length;

  // 3. Fetch total newsletter subscribers
  const allSubscribers = await fetchSubscribers();
  const totalSubscribers = allSubscribers.length;

  // 4. Fetch user's posts
  const userPosts = await fetchUserPosts(username);
  const totalUserPosts = userPosts.length;

  // 1. Check if displayed profile belongs to logged in user (if not, redirect to /profile/:username)
  const displayedUser = await getSingleUserByUsername(username);
  const isUserAccount = userId === displayedUser.clerkId;
  const isAdmin = displayedUser.isAdmin;

  return userId && !isUserAccount ? (
    redirect(`/profile/${username}`)
  ) : (
    <section className="flex flex-col gap-12">
      {isAdmin && <AdminPageTag />}
      <div className="flex gap-12">
        {/* ACCOUNT INFO */}
        <AccountInfo />
        <div className="flex flex-col gap-6 flex-auto">
          <div>
            <AccountAdminStats
              totalUserPosts={totalUserPosts}
              totalPosts={totalPosts}
              totalUsers={totalUsers}
              totalSubscribers={totalSubscribers}
              username={username}
              isUserAccount={isUserAccount}
              isAdmin={isAdmin}
            />
          </div>

          {/* USER'S POSTS & STATISTICS*/}
          {/* <AccountUserPosts totalUserPosts={totalUserPosts} /> */}
        </div>
      </div>
    </section>
  );
};

export default DashboardAccount;
<div className=""></div>;
