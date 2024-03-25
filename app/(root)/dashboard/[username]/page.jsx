export const dynamic = "force-dynamic";

import AccountInfo from "@/components/(AccountDashboard)/AccountInfo";
import AccountAdminStats from "@/components/(AccountDashboard)/AccountAdminStats";
import { getSingleUserByUsername } from "@/lib/data/users";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import AdminPageTag from "@/components/(AccountDashboard)/AdminPageTag";

const DashboardAccount = async ({ params }) => {
  const { username } = params;
  const { userId } = auth();
  const displayedUser = await getSingleUserByUsername(username);
  const isUserAccount = userId === displayedUser.clerkId;
  const isAdmin = displayedUser.isAdmin;

  try {
    return userId && !isUserAccount ? (
      redirect(`/profile/${username}`)
    ) : (
      <section className="flex flex-col gap-12">
        {isAdmin && <AdminPageTag />}
        <div className="flex gap-12">
          {/* ACCOUNT INFO */}
          <AccountInfo isUserAccount={isUserAccount} />
          <div className="flex flex-col gap-6 flex-auto">
            <div>
              <AccountAdminStats
                username={username}
                isUserAccount={isUserAccount}
                isAdmin={isAdmin}
              />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.log(error);
  }
};

export default DashboardAccount;
