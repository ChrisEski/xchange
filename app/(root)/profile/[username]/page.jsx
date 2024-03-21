export const dynamic = "force-dynamic";

import AccountInfo from "@/components/(AccountDashboard)/AccountInfo";
import { getSingleUserByUsername } from "@/lib/data/users";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import UserPosts from "@/components/(AccountDashboard)/UserPosts";

const ProfileAccount = async ({ params }) => {
  const { username } = params;
  const { userId } = auth();

  // Check if displayed profile belongs to logged in user (if yes, redirect to /dashboard/:username)
  const displayedUser = await getSingleUserByUsername(username);
  const isUserAccount = userId === displayedUser.clerkId;
  const fullName = `${displayedUser.firstName} ${displayedUser.lastName}`;

  return userId && isUserAccount ? (
    redirect(`/dashboard/${username}`)
  ) : (
    // <div>Profile Page</div>;
    <section className="flex flex-col gap-12">
      <div className="flex gap-12">
        {/* ACCOUNT INFO */}
        <AccountInfo />
        <div className="flex flex-col gap-6 flex-auto">
          {/* USER'S POSTS & STATISTICS*/}
          <UserPosts
            username={username}
            isUserAccount={isUserAccount}
            fullName={fullName}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileAccount;
