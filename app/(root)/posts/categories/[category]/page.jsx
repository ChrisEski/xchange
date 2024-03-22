import SectionTitle from "@/components/(Sections)/SectionTitle";
import SinglePostCard from "@/components/ui/SinglePostCard";
import { fetchCategoryPosts } from "@/lib/data/posts";
import { capitalizeFirstLetter } from "@/lib/utils";

const Category = async ({ params }) => {
  const showBorders = false;
  const { category } = params;
  const posts = await fetchCategoryPosts(category);

  return (
    <section
      className={`${showBorders && "border-4 border-black"} flex flex-col gap-12 section-content`}
    >
      <SectionTitle altTitle={`${capitalizeFirstLetter(category)} articles`} />
      <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5">
        {posts.map((post) => (
          <SinglePostCard
            key={post._id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
