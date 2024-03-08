import { getSectionPosts } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import SinglePostCard from "./SinglePostCard";

const SectionPosts = async ({ category, viewAll, urlParams, related }) => {
  const posts = await getSectionPosts(3, category);

  return (
    <div className="border-4 border-black flex flex-col gap-8 section-content">
      <SectionTitle
        category={category}
        viewAll={viewAll}
        related={related}
      />

      <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5">
        {posts.map((post) => (
          <SinglePostCard
            key={post._id}
            post={post}
          />
        ))}
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
};

export default SectionPosts;
