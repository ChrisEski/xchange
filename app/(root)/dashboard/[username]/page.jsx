import { getNewsletterSubscribers, getPosts, getSingleUser, getUsers } from "@/lib/data";
import { auth } from "@clerk/nextjs";

import AccountInfo from "@/components/AccountInfo";
import AccountPosts from "@/components/AccountPosts";
import { formatDate } from "@/lib/utils";
import AccountInfoStats from "@/components/AccountInfoStats";
import { notFound } from "next/navigation";

const Account = async ({ params, searchParams }) => {
  const urlParamsUsername = params.username;
  const page = searchParams["page"] ?? "1";
  const limit = searchParams["limit"] ?? "2";
  const start = (Number(page) - 1) * Number(limit);
  const end = start + Number(limit);

  // 1. Deconstruct logged in user's id
  const { userId: loggedInUserId } = auth();

  // 2. Fetch total published posts
  const allPosts = await getPosts();

  // 3. Fetch total registered users
  const allUsers = await getUsers();

  // 4. Fetch total newsletter subscribers
  const allSubscribers = await getNewsletterSubscribers();

  // 5. Fetch the user whose username is in the url (whose profile is displayed)
  const displayedUser = await getSingleUser(urlParamsUsername);

  // 6. Get displayed user's data along with clerkId and posts array
  const { clerkId, posts, avatar, bio, createdAt, email, firstName, lastName, isAdmin, username } =
    displayedUser;

  // 7. Check if the account displayed is the logged in user's account
  const isUserAccount = loggedInUserId === clerkId;

  // 8. Get page stats
  const totalPostsCount = allPosts.length;
  const totalUsersCount = allUsers.length;
  const totalNewsletterSubscribers = allSubscribers.length;
  const userPostsCount = posts.length;

  // 9. Format data
  const fullName = `${firstName} ${lastName}`;
  const signupDate = formatDate(createdAt);
  const role = isAdmin ? "Admin" : "Author";

  return !isUserAccount ? (
    notFound()
  ) : (
    <section className="flex flex-col gap-12">
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
          role={role}
          signupDate={signupDate}
          isUserAccount={isUserAccount}
          userPostsCount={userPostsCount}
        />
        <div className="flex flex-col gap-6 flex-auto">
          {isAdmin && (
            <AccountInfoStats
              totalPostsCount={totalPostsCount}
              totalUsersCount={totalUsersCount}
              totalNewsletterSubscribers={totalNewsletterSubscribers}
            />
          )}

          {/* USER'S POSTS & STATISTICS*/}
          <AccountPosts
            username={username}
            isUserAccount={isUserAccount}
          />
        </div>
      </div>
    </section>
  );
};

export default Account;
