"use client";

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
import { useEffect, useState } from "react";
import { getInitials } from "@/lib/utils";

const NavAccount = ({ session }) => {
  const [sessionUser, setSessionUser] = useState({});

  useEffect(() => {
    const fetchSessionUser = async (userId) => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        setSessionUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessionUser("65dbf993cfb0106d747d6898");
  }, []);

  const { firstName, lastName, email, avatar } = sessionUser;
  const userInitials = firstName && lastName ? getInitials(firstName, lastName) : null;

  return (
    <div className="min-w-[120px] flex justify-end items-center">
      {session ? (
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
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Account Dashboard</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <span>New article</span>
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
