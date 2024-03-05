import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { LogOut, Plus, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getInitials } from "@/lib/utils";
import Link from "next/link";
import { getSingleUser } from "@/lib/data";

const NavAccount = async ({ testSession }) => {
  const sessionUser = await getSingleUser("user1");
  const { firstName, lastName, email, avatar, username } = sessionUser;
  const userInitials = firstName && lastName ? getInitials(firstName, lastName) : null;

  return (
    <div className="min-w-[120px] flex justify-end items-center">
      {testSession ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarImage
                src={avatar}
                style={{ objectFit: "cover" }}
              />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>
              {firstName} {lastName} <br />
              <span className="text-xs text-neutral-500 font-normal">{email}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href={`/account/${username}`}>
                  <User className="mr-2 h-4 w-4" />
                  Account Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/account/${username}/create-post`}>
                  <Plus className="mr-2 h-4 w-4" />
                  New article
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button>
          <LogIn className="mr-2 h-4 w-4" /> Login
        </Button>
      )}
    </div>
  );
};

export default NavAccount;
