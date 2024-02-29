import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { capitalizeFirstLetter, createExcerpt, formatDate } from "@/lib/utils";

const FeaturedPost = ({ post }) => {
  const { title, body, slug, author, featuredImage, createdAt, category } = post;
  const formattedBody = createExcerpt(body);
  const formattedCategory = capitalizeFirstLetter(category);
  const formattedDate = formatDate(createdAt);
  const { firstName, lastName } = author;

  return (
    <Link
      href={`${category}/${slug}`}
      className="relative rounded-lg overflow-hidden flex-1 min-h-[400px] group"
    >
      {/* ARTICLE IMAGE */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={featuredImage}
            fill
            style={{ objectFit: "cover" }}
            className="transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-25"></div> {/* Darkening overlay */}
      </div>

      {/* ARTICLE INFO */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 gap-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-white rounded font-semibold px-2 bg-white/20 border border-white">
            {formattedCategory}
          </span>
          <span className=" text-neutral-300">Published {formattedDate}</span>
        </div>
        <h3 className="text-lg font-bold font-display leading-none text-white mt-1">{title}</h3>
        <p className="text-sm text-neutral-300">{formattedBody}</p>
        <Separator className="w-[25%] bg-white/30" />
        <div className="text-neutral-300 text-xs">
          Written by{" "}
          <span className="text-white font-bold">
            {firstName} {lastName}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPost;
