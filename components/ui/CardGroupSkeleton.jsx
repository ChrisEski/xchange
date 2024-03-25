import SinglePostCardSkeleton from "./SinglePostCardSkeleton";

const CardGroupSkeleton = () => {
  return (
    <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5">
      <SinglePostCardSkeleton />
      <SinglePostCardSkeleton />
      <SinglePostCardSkeleton />
      <SinglePostCardSkeleton />
      <SinglePostCardSkeleton />
    </div>
  );
};

export default CardGroupSkeleton;
