import SectionTitle from "./SectionTitle";
import SinglePost from "./SinglePost";

const SectionPosts = ({ category }) => {
  return (
    <section className="flex flex-col gap-8">
      <SectionTitle title="Technology Articles" />
      <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
      <div className="bg-blue-200 flex justify-center items-center">Pagination</div>
    </section>
  );
};

export default SectionPosts;
