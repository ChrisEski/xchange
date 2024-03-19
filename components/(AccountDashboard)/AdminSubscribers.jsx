"use client";
export const dynamic = "force-dynamic";

import { fetchSubscribers } from "@/lib/data/subscribers";
import { formatDate } from "@/lib/utils";
import { CheckCircle2, Pencil, RefreshCw, Trash2, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminSubscribers = () => {
  const router = useRouter();
  const [subscribers, setSubscribers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllSubscribers = async () => {
      const allSubscribers = await fetchSubscribers();
      setSubscribers(allSubscribers);
      setIsLoading(false);
    };

    getAllSubscribers();
  }, []);

  const handleEditButtonClick = () => {
    alert("Editing");
  };
  const handleDeleteButtonClick = () => {
    alert("Deleting");
  };

  return (
    <div className="border border-neutral-300 rounded-lg p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">All Subscribers</h2>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : subscribers.length === 0 || subscribers === undefined ? (
        <div>No subscribers registered yet</div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 table-fixed">
          <thead className="text-sm">
            <tr>
              <th className="text-left px-5">Email</th>
              <th className="text-left pr-5">Is user</th>
              <th className="text-left">Registered at</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {subscribers.map((subscriber) => (
              <tr
                key={subscriber?._id}
                className="hover:bg-neutral-100"
              >
                <td className="max-w-[250px] px-5 flex gap-2 items-center h-8">
                  {subscriber?.email}
                </td>
                <td className="max-w-[120px]">
                  {subscriber?.isUser ? (
                    <CheckCircle2 className="text-green-600 w-5" />
                  ) : (
                    <XCircle className="text-red-600 w-5" />
                  )}
                </td>
                <td className="">{formatDate(subscriber?.createdAt)}</td>
                <td>
                  <button onClick={handleDeleteButtonClick}>
                    <Trash2 className="w-4 text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminSubscribers;
