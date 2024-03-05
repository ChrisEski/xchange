// MAKE PAGE LIKE GITHUB'S PROFILE PAGE

import { getSingleUser } from "@/lib/data";
import AccountInfo from "@/components/AccountInfo";
import AccountPosts from "@/components/AccountPosts";

const UserPosts = async ({ params }) => {
  const loggedInUser = await getSingleUser("user1");
  const visitedUser = await getSingleUser(params.username);

  const { firstName, lastName, username, email, bio, avatar, _id } = visitedUser;

  const fullName = `${firstName} ${lastName}`;

  // Check if the account displayed is the logged in user's account
  const isUserAccount = loggedInUser?.username === params?.username;
  return (
    <section className="flex flex-col gap-12">
      <div className="flex justify-between items-center">
        <h1 className="font-display font-bold text-5xl">
          {isUserAccount ? "Account Dashboard" : `${params.username}'s Account`}
        </h1>
      </div>
      <div className="flex gap-12">
        {/* ACCOUNT INFO */}
        <AccountInfo
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
          fullName={fullName}
          username={username}
          email={email}
          bio={bio}
          isUserAccount={isUserAccount}
        />

        {/* USER'S POSTS */}
        <AccountPosts
          username={username}
          isUserAccount={isUserAccount}
        />
      </div>
    </section>
  );
};

export default UserPosts;
