import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { capitalizeFirstLetter, createExcerpt, formatDate } from "@/lib/utils";
import CategoryLabel from "./CategoryLabel";
import { getLastPost, getPosts } from "@/lib/data";

const Banner = async () => {
  const [lastPost] = await getPosts(1);
  const { title, body, slug, category, author, featuredImage, createdAt } = lastPost;
  const { firstName, lastName } = author;

  return (
    <div className="flex flex-col gap-8 px-12 py-16 max-w-[1220px] mx-auto">
      {/* <div className="flex justify-between gap-5"> */}
      <Link
        href={`/${category}/${slug}`}
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
          <div className="absolute inset-0 bg-black opacity-45"></div> {/* Darkening overlay */}
        </div>

        {/* ARTICLE INFO */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 gap-4 w-[65%]">
          <div className="flex items-center gap-2 text-sm">
            <CategoryLabel category={category} />
            <span className=" text-neutral-300">Published {formatDate(createdAt)}</span>
          </div>
          <h3 className="text-4xl font-bold font-display leading-none text-white mt-1">{title}</h3>
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
    // </div>
  );
};

export default Banner;
