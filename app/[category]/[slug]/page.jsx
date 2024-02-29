import { getSinglePost } from "@/lib/data";
import { formatDate, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Image from "next/image";
import CategoryLabel from "@/components/CategoryLabel";
import SectionContainer from "@/components/SectionContainer";
import SectionPosts from "@/components/SectionPosts";

const Article = async ({ params }) => {
  const { slug } = params;
  const post = await getSinglePost(slug);
  const { title, body, author, featuredImage, category, createdAt } = post;
  const { firstName, lastName, avatar, isAdmin } = author;
  const authorInitials = getInitials(firstName, lastName);

  return (
    <>
      <section className="flex flex-col gap-12 px-12 py-16 max-w-[1220px] mx-auto ">
        <div className="flex flex-col gap-3">
          <div>
            <CategoryLabel
              category={category}
              dark={true}
            />
          </div>
          <div className="font-display text-5xl font-bold mb-2">{title}</div>
          <div className="flex justify-between items-center">
            <div className="author flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={avatar}
                  style={{ objectFit: "cover" }}
                />
                <AvatarFallback>{authorInitials}</AvatarFallback>
              </Avatar>
              <div className="text-neutral-600 flex flex-col">
                <span className="font-bold text-black">
                  By {firstName} {lastName}
                </span>
                <span className="">{isAdmin ? "Admin" : "Author"}</span>
              </div>
            </div>
            <span className="text-neutral-600">{formatDate(createdAt)}</span>
          </div>
        </div>

        <div className="relative w-full min-h-[640px] rounded-md overflow-hidden">
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
        />
      </SectionContainer>
    </>
  );
};

export default Article;
