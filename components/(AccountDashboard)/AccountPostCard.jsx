"use client";

import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AccountPostCard = ({ featuredImage, title, createdAt, category, slug }) => {
  const formattedDate = formatDate(createdAt, true);

  return (
    <article className="flex gap-2">
      {/* FIX: ADD DARKER DIV OVER IMAGE */}
      {/* <div className="relative w-[200px] aspect-[3/2] flex-shrink-0 overflow-hidden border border-neutral-300 rounded-md">
        <Image
          alt={title}
          src={featuredImage}
          fill
          style={{ objectFit: "cover" }}
        />
      </div> */}
      {/* FIX: PLACE CATEGORY OVER IMAGE */}
      {/* <div className="flex-auto flex flex-col justify-between">
        <span className="font-display font-bold text-lg">{title}</span>
        <span className="text-neutral-700 text-sm">{formattedDate}</span>
        <div className="flex gap-2">
          <Button variant="outline">
            <Pencil className="mr-2 h-4 w-4" /> Edit
          </Button>
          <Button
            variant="outline"
            style={{ borderColor: "red", color: "red" }}
          >
            <Trash className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </div> */}
      <Link
        href={`/posts/categories/${category}/${slug}`}
        className="relative w-[140px] aspect-[3/2] border border-neutral-300 rounded-md"
      >
        <Image
          alt={title}
          src={featuredImage}
          fill
          style={{ objectFit: "cover" }}
        />
      </Link>
    </article>
  );
};

export default AccountPostCard;
