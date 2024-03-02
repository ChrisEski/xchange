"use client";

import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccountPostCard = ({ post }) => {
  const { featuredImage, body, title, category, createdAt } = post;
  const formattedDate = formatDate(createdAt);

  return (
    <article className="flex gap-2">
      {/* FIX: ADD DARKER DIV OVER IMAGE */}
      <div className="relative w-[200px] aspect-[4/3] flex-shrink-0 overflow-hidden border border-neutral-300 rounded-md">
        <Image
          src={featuredImage}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-auto flex flex-col justify-between">
        {/* FIX: PLACE CATEGORY OVER IMAGE */}
        {/* <span>{category}</span> */}
        <span className="font-display font-bold text-lg">{title}</span>
        <span className="text-neutral-600 text-sm">{formattedDate}</span>
        <div className="flex gap-2">
          <Button variant="outline">
            <Pencil className="mr-2 h-4 w-4" /> Edit article
          </Button>
          <Button
            variant="outline"
            style={{ borderColor: "red", color: "red" }}
          >
            <Trash className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </div>
    </article>
  );
};

export default AccountPostCard;
