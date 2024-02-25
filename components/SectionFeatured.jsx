import FeaturedPost from "./FeaturedPost";
import SectionTitle from "./SectionTitle";

const SectionFeatured = () => {
  return (
    <div className="flex flex-col gap-8 px-12 py-16 max-w-[1220px] mx-auto">
      <SectionTitle
        category=""
        altTitle="Don't Miss"
      />
      <div className="flex justify-between gap-5">
        <FeaturedPost />
        <FeaturedPost />
      </div>
    </div>
  );
};

export default SectionFeatured;
