import { getSinglePost } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

const Article = async ({ params }) => {
  const { slug } = params;
  const post = await getSinglePost(slug);
  const { title, body, author, featuredImage, category, createdAt } = post;
  return (
    <article>
      <div>{title}</div>
      <div>{body}</div>
      <div>
        {author.username} | {author.email}
      </div>
      <div className="relative w-[400px] h-[300px]">
        <Image
          src={featuredImage}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>{category}</div>
      <div>{formatDate(createdAt)}</div>
    </article>
  );
};

export default Article;
