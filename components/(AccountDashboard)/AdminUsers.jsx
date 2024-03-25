"use client";
export const dynamic = "force-dynamic";

import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { formatDate, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { fetchUsers } from "@/lib/data/users";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await fetchUsers();
      setUsers(allUsers);
      setIsLoading(false);
    };

    getAllUsers();
  }, []);

  return (
    <div className="border border-neutral-300 rounded-lg p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">All Users</h2>
        <div>
          <Link
            href="https://dashboard.clerk.com"
            target="_blank"
            className={`${buttonVariants({ variant: "outline" })} flex items-center gap-1`}
          >
            <span>Manage users</span>
            <ExternalLink className="w-4 text-neutral-800" />
          </Link>
        </div>
      </div>
      {isLoading ? (
        <div>Loading data...</div>
      ) : users.length === 0 || users === undefined ? (
        <div>No users joined yet</div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 table-fixed">
          <thead className="text-sm">
            <tr>
              <th className="text-left px-5">User</th>
              <th className="text-left pr-5">Email</th>
              <th className="text-left">Joined</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {users.map((user) => (
              <tr
                key={user?._id}
                className="hover:bg-neutral-100"
              >
                <td className="max-w-[150px] px-5 ">
                  <Link
                    href={`/profile/${user?.username}`}
                    target="_blank"
                    className="flex gap-2 items-center h-16"
                  >
                    <Avatar>
                      <AvatarImage
                        style={{ objectFit: "cover" }}
                        src={user?.avatar}
                        alt={user?.username}
                      />
                      <AvatarFallback>
                        {getInitials(user?.firstName, user?.lastName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-bold">{`${user?.firstName} ${user?.lastName}`}</span>
                      <span className="text-neutral-700">{user?.username}</span>
                    </div>
                  </Link>
                </td>
                <td className="max-w-[120px] pr-5">{user?.email}</td>
                <td className="">{formatDate(user?.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminUsers;
