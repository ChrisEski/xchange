import { Skeleton } from "./skeleton";

const AccountInfoSkeleton = () => {
  return (
    <div className="border border-green-400 min-w-[280px] max-w-[25%] flex flex-col gap-5">
      {/* <div className="relative w-full aspect-square overflow-hidden rounded-full bg-red-200"></div> */}
      <Skeleton className="w-full aspect-square rounded-full" />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[50px]" />
        </div>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[90%]" />
        </div>
        <div className=" text-sm flex flex-col space-y-3">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[130px]" />
        </div>
      </div>
    </div>
  );
};

export default AccountInfoSkeleton;
