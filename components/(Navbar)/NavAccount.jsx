"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { baseURL } from "@/lib/constables";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { Label } from "../ui/label";
import { LogOut, Plus, Settings } from "lucide-react";

const NavAccount = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();
  const username = user?.username;
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const fullName = user?.fullName;
  const avatar = user?.imageUrl;

  if (!isLoaded) {
    return <div className="min-w-[140px] flex justify-end"></div>;
  }

  if (isSignedIn) {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={avatar}
                alt={username}
              />
              <AvatarFallback>{getInitials(firstName, lastName)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex flex-col gap-1">
              <Label>{fullName}</Label>
              <Label className="text-neutral-700">{username}</Label>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span onClick={() => router.push(`/dashboard/${username}`)}>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" />
              <span onClick={() => router.push(`/dashboard/${username}/create-post`)}>
                New Article
              </span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <SignOutButton signOutCallback={() => router.replace(`${baseURL}`)}>
                <button>Sign out</button>
              </SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <div className="flex justify-end items-center gap-4">
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
        </div> */}
      </>
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
