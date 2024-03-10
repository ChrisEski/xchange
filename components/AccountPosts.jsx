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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async (username, limit) => {
      try {
        // MAKE FETCH REQUEST DIRECTLY TO DB TO ADD SORTING AND LIMIT
        const response = await fetch(
          `http://localhost:3000/api/users/${username}/posts?limit=${limit}`
        );
        const posts = await response.json();
        setUserPosts(posts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      }
    };

    fetchPosts(username, 5);
  }, [username]);

  return (
    <div className="border border-neutral-300 rounded-lg p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Published articles</h2>
        {isUserAccount && (
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Create new
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {isLoading ? (
          <div>Retrieving published posts...</div>
        ) : userPosts.length === 0 ? (
          <div>No posts published yet</div>
        ) : (
          userPosts.map((post) => (
            <AccountPostCard
              post={post}
              key={post._id}
            />
          ))
        )}
        {userPosts.length !== 0 && (
          <Pagination className="mt-4">
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
        )}
      </div>
    </div>
  );
};
{
}
export default AccountPosts;
