"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const NavAccount = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  const username = user?.username;

  if (!isLoaded) {
    return <div className="min-w-[140px] flex justify-end"></div>;
  }

  if (isSignedIn) {
    return (
      <div className="min-w-[140px] flex justify-end items-center">
        {username ? (
          <Link
            href={`/account/${username}`}
            className={`${buttonVariants({ variant: "link" })}`}
          >
            Dashboard
          </Link>
        ) : null}

        <UserButton />
      </div>
    );
  } else {
    return (
      <div className="min-w-[140px] flex justify-end">
        <SignInButton>
          <Button>Sign in</Button>
        </SignInButton>
      </div>
    );
  }
};

export default NavAccount;
