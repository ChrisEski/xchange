"use client";
import AdminUsers from "./AdminUsers";
import AdminSubscribers from "./AdminSubscribers";
import AdminPosts from "./AdminPosts";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import UserPosts from "./UserPosts";
import { fetchAllPosts, fetchUserPosts } from "@/lib/data/posts";
import { fetchUsers } from "@/lib/data/users";
import { fetchSubscribers } from "@/lib/data/subscribers";

const AccountAdminStats = ({ username, isUserAccount, isAdmin }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPosts, setShowPosts] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showSubscribers, setShowSubscribers] = useState(false);
  const [totalUserPosts, setTotalUserPosts] = useState(null);
  const [totalPosts, setTotalPosts] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalSubscribers, setTotalSubscribers] = useState(null);

  useEffect(() => {
    const getUserPosts = async (username) => {
      const userPosts = await fetchUserPosts(username);
      setTotalUserPosts(userPosts.length);
    };

    const getAllPosts = async () => {
      const allPosts = await fetchAllPosts();
      setTotalPosts(allPosts.length);
    };

    const getAllUsers = async () => {
      const allUsers = await fetchUsers();
      setTotalUsers(allUsers.length);
    };

    const getAllSubscribers = async () => {
      const allSubscribers = await fetchSubscribers();
      setTotalSubscribers(allSubscribers.length);
    };

    const fetchAllData = async () => {
      await Promise.all([
        getUserPosts(username),
        getAllPosts(),
        getAllUsers(),
        getAllSubscribers(),
      ]);
      setIsLoading(false);
    };

    fetchAllData();
  }, [username]);

  const handleShowAllClick = () => {
    setShowPosts(true);
    setShowUsers(true);
    setShowSubscribers(true);
  };
  const handleHideAllClick = () => {
    setShowPosts(false);
    setShowUsers(false);
    setShowSubscribers(false);
  };

  return (
    <div className="flex flex-col gap-6">
      {isAdmin && (
        <div className="border border-neutral-300 rounded-lg p-4 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl">Blog&apos;s overview</h2>
            <div className="flex gap-3">
              <Button
                onClick={handleShowAllClick}
                className={!showPosts ? "" : "hidden"}
                variant="outline"
              >
                Show all stats
                <ChevronDown className="ml-2 mt-1 h-4 w-4" />
              </Button>
              <Button
                onClick={handleHideAllClick}
                className={showPosts ? "" : "hidden"}
                variant="outline"
              >
                Hide all stats
                <ChevronUp className="ml-2 mt-1 h-4 w-4" />
              </Button>
              <Button
                onClick={() => {
                  location.reload();
                }}
                variant="outline"
              >
                Refresh stats
                <RefreshCw className="ml-2 mt-1 h-4 w-4" />
              </Button>
            </div>
          </div>
          {isLoading ? (
            <div>Loading data...</div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
              <div className="border border-neutral-300 px-6 py-3 rounded-md flex flex-col items-center">
                <span className=" text-neutral-700 text-lg">My Articles</span>
                <span className="font-semibold text-xl mb-2">{totalUserPosts}</span>
                <Button disabled={true}>Always visible</Button>
              </div>

              <div className="border border-neutral-300 px-6 py-3 rounded-md flex flex-col items-center">
                <span className=" text-neutral-700 text-lg">Total articles</span>
                <span className="font-semibold text-xl mb-2">{totalPosts}</span>
                <Button
                  onClick={() => setShowPosts(true)}
                  className={!showPosts ? "" : "hidden"}
                >
                  Show
                </Button>
                <Button
                  className={showPosts ? "" : "hidden"}
                  onClick={() => setShowPosts(false)}
                >
                  Hide
                </Button>
              </div>

              <div className="border border-neutral-300 px-6 py-3 rounded-md flex flex-col items-center">
                <span className=" text-neutral-700 text-lg">Total users</span>
                <span className="font-semibold text-xl mb-2">{totalUsers}</span>
                <Button
                  onClick={() => setShowUsers(true)}
                  className={!showUsers ? "" : "hidden"}
                >
                  Show
                </Button>
                <Button
                  className={showUsers ? "" : "hidden"}
                  onClick={() => setShowUsers(false)}
                >
                  Hide
                </Button>
              </div>

              <div className="border border-neutral-300 px-6 py-3 rounded-md flex flex-col items-center">
                <span className=" text-neutral-700 text-lg">Total subscribers</span>
                <span className="font-semibold text-xl mb-2">{totalSubscribers}</span>
                <Button
                  onClick={() => setShowSubscribers(true)}
                  className={!showSubscribers ? "" : "hidden"}
                >
                  Show
                </Button>
                <Button
                  className={showSubscribers ? "" : "hidden"}
                  onClick={() => setShowSubscribers(false)}
                >
                  Hide
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {showPosts && <AdminPosts />}
      {showUsers && <AdminUsers />}
      {showSubscribers && <AdminSubscribers />}
      <UserPosts
        username={username}
        isUserAccount={isUserAccount}
      />
    </div>
    // <div>Test</div>
  );
};

export default AccountAdminStats;
