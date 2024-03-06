"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/nextjs";

const PrivatePage = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold font-display text-3xl">Private page</h1>
      <div>
        <h2 className="font-bold text-lg">Page description</h2>
        <p className="mb-2 text-neutral-700">
          This page should be accessible ONLY to logged in users
        </p>
      </div>

      <div>
        <h2 className="font-bold text-lg">Clerk auth links</h2>
        <p className="mb-2 text-neutral-700">Click the links to the corresponding pages</p>
        <div className="flex gap-2">
          <Link
            href="/test/"
            className={buttonVariants({ variant: "" })}
          >
            Test page
          </Link>
          <Link
            href="/test/public"
            className={buttonVariants({ variant: "" })}
          >
            Public page
          </Link>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-lg">Logged in user data</h2>
        <p className="mb-2 text-neutral-700">
          If a user is logged in, his data will be displayed here. If not, a{" "}
          <code className="bg-neutral-700 rounded-[0.3rem] px-2 py-1 text-white">{`<User not found>`}</code>{" "}
          message will be displayed.
        </p>
        <div>
          {isSignedIn ? (
            <div>
              <div>{user.fullName}</div>
              <div>
                <Button variant="outline">
                  <SignOutButton />
                </Button>
              </div>
            </div>
          ) : (
            <div>No user found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivatePage;
