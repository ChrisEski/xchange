"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { SignInButton, UserButton } from "@clerk/nextjs";

const NavAccount = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="min-w-[120px] flex justify-end"></div>;
  }

  if (isSignedIn) {
    return (
      <div className="min-w-[120px] flex justify-end">
        <UserButton />
      </div>
    );
  } else {
    return (
      <div className="min-w-[120px] flex justify-end">
        <SignInButton>
          <Button>Sign in</Button>
        </SignInButton>
      </div>
    );
  }
};

export default NavAccount;
