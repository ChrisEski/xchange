"use client";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { capitalizeFirstLetter, createExcerpt, formatDate } from "@/lib/utils";
import CategoryLabel from "./CategoryLabel";
import { getLastPost, getPosts } from "@/lib/data";
import { useEffect, useState } from "react";
import BannerLoader from "./BannerLoader";

const Banner = () => {
  const [post, setPost] = useState(null);
  // const [lastPost] = await getPosts(1);
  // const { title, body, slug, category, author, featuredImage, createdAt } = lastPost;
  // const { firstName, lastName } = author;

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts/last");

        if (!response.ok) throw Error("Error fetching latest post");

        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLatestPost();
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
          <div
            // className="absolute inset-0 bg-black opacity-45"
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          ></div>{" "}
          {/* Darkening overlay */}
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
