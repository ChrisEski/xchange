"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AccountPostCard from "./AccountPostCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AccountPosts = ({ username, isUserAccount }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async (username) => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/${username}/posts`);
        const posts = await response.json();
        setUserPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts(username);
  }, [username]);
  return (
    <div className="border border-neutral-300 rounded-lg flex-auto p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">{`${isUserAccount ? "My" : "Author's"} Posts`}</h2>
        {isUserAccount && (
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Create new
          </Button>
        )}
      </div>
      <div className="flex flex-col gap-3">
        {userPosts.map((post) => (
          <AccountPostCard
            post={post}
            key={post._id}
          />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AccountPosts;
