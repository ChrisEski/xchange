const AccountInfoStats = ({ totalPostsCount, totalUsersCount, totalNewsletterSubscribers }) => {
  return (
    <div className="border border-neutral-300 rounded-lg p-4 flex flex-col gap-5">
      <h2 className="font-bold text-xl">Blog&apos;s stats</h2>
      {/* grid grid-cols-[repeat(auto-fill,_minmax(182px,_1fr))] gap-4 */}
      {/* STATS */}
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(182px,_1fr))] gap-4">
        <div className="border border-neutral-300 px-6 py-3 rounded-md flex flex-col items-center">
          <span className=" text-neutral-700 text-lg">Total posts</span>
          <span className="font-semibold text-xl">{totalPostsCount}</span>
        </div>

        <div className="border border-neutral-300 px-6 py-3 rounded-md flex flex-col items-center">
          <span className=" text-neutral-700 text-lg">Total users</span>
          <span className="font-semibold text-xl">{totalUsersCount}</span>
        </div>

        <div className="border border-neutral-300 px-6 py-3 rounded-md flex flex-col items-center">
          <span className=" text-neutral-700 text-lg">Total subscribers</span>
          <span className="font-semibold text-xl">{totalNewsletterSubscribers}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoStats;
