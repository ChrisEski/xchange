"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { createExcerpt, formatDate } from "@/lib/utils";
import CategoryLabel from "./CategoryLabel";
import { useEffect, useState } from "react";
import BannerLoader from "./BannerLoader";

const Banner = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async (numOfPosts) => {
      try {
        const response = await fetch(`http://localhost:3000/api/posts?limit=${numOfPosts}`, {
          revalidate: 1000,
        });

        if (!response.ok) throw Error("Error fetching latest post");

        const data = await response.json();
        setPost(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLatestPost(1);
  }, []);

  if (!post) return <BannerLoader />;

  const { slug, featuredImage, title, category, createdAt, body, author } = post;
  const { firstName, lastName } = author;

  return (
    <div className="border-4 border-black flex flex-col gap-8 section-content">
      <Link
        href={`/posts/${slug}`}
        className="relative rounded-lg overflow-hidden flex-1 min-h-[500px] group"
      >
        {/* ARTICLE IMAGE */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={featuredImage}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              className="transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          {/* Darkening overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>{" "}
        </div>

        {/* ARTICLE INFO */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 gap-4 w-[65%]">
          <div className="flex flex-col items-start">
            <CategoryLabel category={category} />
            <h3 className="text-4xl font-bold font-display leading-none text-white mt-1">
              {title}
            </h3>
            <span className=" text-neutral-300 text-sm mt-2">
              Published {formatDate(createdAt)}
            </span>
          </div>
          <p className="text-neutral-300">{createExcerpt(body, 26)}</p>
          <Separator className="w-[25%] bg-white/30" />
          <div className="text-neutral-300 text-sm">
            Written by{" "}
            <span className="text-white font-bold">
              {firstName} {lastName}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Banner;
