"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { baseURL } from "@/lib/constables";

const NavAccount = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();
  const username = user?.username;

  if (!isLoaded) {
    return <div className="min-w-[140px] flex justify-end"></div>;
  }

  if (isSignedIn) {
    return (
      <div className="flex justify-end items-center gap-4">
        {username ? (
          <Link
            href={`/dashboard/${username}`}
            className={`${buttonVariants({ variant: "link" })}`}
          >
            Dashboard
          </Link>
        ) : null}

        <UserButton afterSignOutUrl="/" />
        <SignOutButton
          signOutCallback={() => {
            router.replace(`${baseURL}`);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="flex justify-end">
        <SignInButton>
          <Button>Sign in</Button>
        </SignInButton>
      </div>
    );
  }
};

export default NavAccount;
