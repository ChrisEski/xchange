import FeaturedPost from "./FeaturedPost";
import SectionTitle from "./SectionTitle";
import SinglePost from "./SinglePost";

const SectionFeatured = () => {
  return (
    <section className="flex flex-col gap-8 px-12 py-16 max-w-[1220px] mx-auto">
      <SectionTitle
        category=""
        altTitle="Don't Miss"
      />
      <div className="flex justify-between gap-5">
        <FeaturedPost />
        <FeaturedPost />
      </div>
    </section>
  );
};

export default SectionFeatured;
