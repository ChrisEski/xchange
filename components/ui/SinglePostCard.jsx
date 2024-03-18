import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { capitalizeFirstLetter, createExcerpt, formatDate, getInitials } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CategoryLabel from "./CategoryLabel";

const SinglePostCard = ({ post }) => {
  const formattedCategory = capitalizeFirstLetter(post?.category);
  const formattedDate = formatDate(post?.createdAt, true);
  const nameInitials = getInitials(post?.author.firstName, post?.author.lastName);
  const bodyExcerpt = createExcerpt(post?.body, 20);
  const role = post?.author.isAdmin ? "Admin" : "Author";

  return (
    <article className="rounded-lg overflow-hidden min-h-[440px] flex flex-col">
      {/* Category label */}
      <span className="absolute text-white z-10 rounded text-sm font-semibold px-2 bg-white/20 m-4 border border-white">
        {formattedCategory}
      </span>

      {/* Featured image */}
      <Link
        href={`/posts/categories/${post?.category}/${post?.slug}`}
        className="relative flex-1 group"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={post?.featuredImage}
            alt={post?.title}
            fill
            style={{ objectFit: "cover" }}
            className="transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/75"></div>{" "}
      </Link>

      {/* Details */}
      <div className="flex-1 details p-3 flex flex-col gap-3 justify-between rounded-b-lg border border-neutral-300 border-t-0">
        <div className="flex flex-col gap-3">
          {/* Publish date */}
          <span className="text-sm text-neutral-700">Published {formattedDate}</span>
          {/* Title-link */}
          <Link href={`/posts/${post?.slug}`}>
            <h3 className="text-lg font-bold font-display leading-none">{post?.title}</h3>
          </Link>
          {/* Excerpt */}
          <p className="text-sm text-neutral-700">{bodyExcerpt}</p>
        </div>

        {/* Author details */}
        <div className="flex flex-col gap-3">
          <Separator />
          <div className="author flex gap-3">
            {/* Avatar */}
            <Avatar>
              <AvatarImage
                src={post?.author.avatar}
                style={{ objectFit: "cover" }}
              />
              <AvatarFallback>{nameInitials}</AvatarFallback>
            </Avatar>
            <div className="text-sm text-neutral-700 flex flex-col">
              <Link
                href={`/profile/${post?.author.username}`}
                className="font-bold text-black"
              >
                {/* Full Name */}
                By{" "}
                <span className="hover:underline">
                  {post?.author.firstName} {post?.author.lastName}
                </span>
              </Link>
              {/* Role */}
              <span className="text-sm">{role}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SinglePostCard;
