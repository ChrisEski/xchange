import { getSectionPosts } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import SinglePostCard from "./SinglePostCard";

const SectionPosts = async ({ category, viewAll }) => {
  const posts = await getSectionPosts(3, category);

  return (
    <div className="flex flex-col gap-8 py-16 section-content">
      <SectionTitle
        related={true}
        category={category}
        // IF A SECTION HAS PAGINATION, SHOULD HAVE THE 'VIEW ALL' BUTTON AS WELL
        viewAll={viewAll}
      />
      <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5">
        {posts.map((post) => (
          <SinglePostCard
            key={post._id}
            post={post}
          />
        ))}
        {/* <SinglePostCard /> */}
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
};

export default SectionPosts;
