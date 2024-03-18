import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { capitalizeFirstLetter, createExcerpt, formatDate } from "@/lib/utils";

const FeaturedPost = ({ post }) => {
  const { title, body, slug, author, featuredImage, createdAt, category } = post;
  const formattedBody = createExcerpt(body, 16);
  const formattedCategory = capitalizeFirstLetter(category);
  const formattedDate = formatDate(createdAt, true);
  const { firstName, lastName } = author;

  return (
    <Link
      href={`/posts/categories/${category}/${slug}`}
      className="relative rounded-lg overflow-hidden flex-1 min-h-[400px] group"
    >
      {/* ARTICLE IMAGE */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={featuredImage}
            fill
            alt={title}
            style={{ objectFit: "cover" }}
            className="transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-25% to-black"></div>
      </div>

      {/* ARTICLE INFO */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 gap-2">
        <div className="flex flex-col gap-1 items-start text-xs">
          <span className="text-white rounded font-semibold px-2 bg-white/20 border border-white">
            {formattedCategory}
          </span>
          <h3 className="text-lg font-bold font-display leading-none text-white">{title}</h3>
          <span className=" text-neutral-300">Published {formattedDate}</span>
        </div>
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
