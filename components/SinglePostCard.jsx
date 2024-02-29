import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { capitalizeFirstLetter, createExcerpt, formatDate, getInitials } from "@/lib/utils";

const SinglePostCard = ({ post }) => {
  const { title, body, category, featuredImage, author, slug, createdAt } = post;
  const { firstName, lastName, avatar, isAdmin } = author;
  const formattedCategory = capitalizeFirstLetter(category);
  const formattedDate = formatDate(createdAt);
  const nameInitials = getInitials(firstName, lastName);
  const bodyExcerpt = createExcerpt(body, 20);
  const role = isAdmin ? "Admin" : "Author";

  return (
    <article className="rounded-lg overflow-hidden min-h-[440px] flex flex-col">
      <span className="absolute text-white z-10 rounded text-sm font-semibold px-2 bg-white/20 m-4 border border-white">
        {formattedCategory}
      </span>
      <div className="relative h-52 brightness-75 overflow-hidden">
        <Link href={`/${category}/${slug}`}>
          <Image
            src={featuredImage}
            alt={title}
            style={{ objectFit: "cover" }}
            fill
            className="transform hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>
      <div className="flex-1 details p-3 flex flex-col gap-3 justify-between rounded-b-lg border border-neutral-300 border-t-0">
        <div className="flex flex-col gap-3">
          <span className="text-sm text-neutral-600">Published {formattedDate}</span>
          <Link href="#">
            <h3 className="text-lg font-bold font-display leading-none">{title}</h3>
          </Link>
          <p className="text-sm text-neutral-600">{bodyExcerpt}</p>
        </div>

        <div className="flex flex-col gap-3">
          <Separator />
          <div className="author flex gap-3">
            <Avatar>
              <AvatarImage
                src={avatar}
                style={{ objectFit: "cover" }}
              />
              <AvatarFallback>{nameInitials}</AvatarFallback>
            </Avatar>
            <div className="text-sm text-neutral-600 flex flex-col">
              <span className="font-bold text-black">
                By {firstName} {lastName}
              </span>
              <span className="text-sm">{role}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SinglePostCard;
