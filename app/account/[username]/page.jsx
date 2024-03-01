// MAKE PAGE LIKE GIHUB'S PROFILE PAGE

import { getSingleUser } from "@/lib/data";

const UserPosts = async ({ params }) => {
  const loggedInUser = await getSingleUser("user1");

  const { firstName } = loggedInUser;
  // Check if the account displayed is the logged in user's account
  const isUserAccount = loggedInUser?.username === params?.username;
  console.log(`Is user's account:`, isUserAccount);
  return (
    <section className="flex flex-col gap-8 px-12 py-16 max-w-[1220px] mx-auto border-4 border-blue-400">
      <div className="flex justify-between items-center">
        <h1 className="font-display font-bold text-5xl">
          {isUserAccount ? "Account Dashboard" : `${params.username}'s Account`}
        </h1>
        {isUserAccount && (
          <span className="text-lg text-neutral-700">
            Welcome, <span className="font-bold">{firstName}!</span>
          </span>
        )}
      </div>
    </section>
  );
};

export default UserPosts;
