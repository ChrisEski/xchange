import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AccountPostsGroup from "./AccountPostsGroup";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

const AccountPosts = ({ username, isUserAccount }) => {
  return (
    <div className="border border-neutral-300 rounded-lg p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Published articles</h2>
        {isUserAccount && (
          <Link
            href={`/dashboard/${username}/create-post`}
            className={buttonVariants({ variant: "outline" })}
          >
            <Plus className="mr-2 h-4 w-4" /> Create new
          </Link>
        )}
      </div>
      <AccountPostsGroup username={username} />
    </div>
  );
};
{
}
export default AccountPosts;
