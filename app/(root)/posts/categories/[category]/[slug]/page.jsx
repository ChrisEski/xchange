import { getSinglePost } from "@/lib/data/posts";
import { formatDate, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Image from "next/image";
import CategoryLabel from "@/components/CategoryLabel";
import SectionContainer from "@/components/SectionContainer";
import SectionPosts from "@/components/SectionPosts";
import Link from "next/link";

const Article = async ({ params }) => {
  const { slug } = params;

  const post = await getSinglePost(slug);
  const { title, body, author, featuredImage, category, createdAt } = post;
  const { username, firstName, lastName, avatar, isAdmin } = author;
  const authorInitials = getInitials(firstName, lastName);

  return (
    <>
      <section className="border-4 border-black flex flex-col gap-12 section-content">
        <div className="flex flex-col items-start gap-3">
          <div>
            <CategoryLabel
              category={category}
              dark={true}
            />
          </div>
          <div className="font-display text-5xl font-bold mb-2">{title}</div>
          <div className="flex justify-between items-center w-full">
            <div className="author flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={avatar}
                  style={{ objectFit: "cover" }}
                />
                <AvatarFallback>{authorInitials}</AvatarFallback>
              </Avatar>
              <div className="text-neutral-700 flex flex-col">
                <Link
                  href={`/profile/${username}`}
                  className="font-bold text-black"
                >
                  By{" "}
                  <span className="hover:underline">
                    {firstName} {lastName}
                  </span>
                </Link>
                <span className="">{isAdmin ? "Admin" : "Author"}</span>
              </div>
            </div>
            <span className="text-neutral-700">{formatDate(createdAt, true)}</span>
          </div>
        </div>

        <div className="relative w-full min-h-[560px] rounded-md overflow-hidden">
          <Image
            src={featuredImage}
            fill
            alt={title}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-lg">{body}</p>
      </section>
      <SectionContainer>
        <SectionPosts
          category={category}
          viewAll={true}
          related={true}
        />
      </SectionContainer>
    </>
  );
};

export default Article;
