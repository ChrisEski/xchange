import SectionTitle from "./SectionTitle";
import SinglePost from "./SinglePost";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// flex flex-col gap-16

const SectionPosts = ({ category, viewAll }) => {
  return (
    <div className="flex flex-col gap-8 px-12 py-16 max-w-[1220px] mx-auto">
      <SectionTitle
        category={category}
        // IF A SECTION HAS PAGINATION, SHOULD HAVE THE 'VIEW ALL' BUTTON AS WELL
        viewAll={viewAll}
      />
      <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5">
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
};

export default SectionPosts;
