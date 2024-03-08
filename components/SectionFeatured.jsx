import { getFeaturedPosts, getSectionPosts } from "@/lib/data";
import FeaturedPost from "./FeaturedPost";
import SectionTitle from "./SectionTitle";

const SectionFeatured = async () => {
  const posts = await getFeaturedPosts();

  return (
    <div className="flex flex-col gap-8 py-16 section-content border-4 border-black">
      <SectionTitle
        category=""
        altTitle="Don't Miss"
      />
      <div className="flex justify-between gap-5">
        {posts.map((post) => (
          <FeaturedPost
            key={post._id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionFeatured;
