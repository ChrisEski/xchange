import { Suspense } from "react";
import Loader from "../ui/Loader";
import AccountPostsTable from "./AccountPostsTable";

const AccountPostsGroup = async ({ userPosts }) => {
  return userPosts === undefined || userPosts.length === 0 ? (
    <div>No articles published yet.</div>
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <AccountPostsTable posts={userPosts} />
      </Suspense>
    </>
  );
};

export default AccountPostsGroup;
