import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <article className="rounded-lg overflow-hidden min-h-[440px] flex flex-col">
      <div className="flex-1 details p-3 flex flex-col gap-3 justify-between rounded-lg border border-neutral-200 overflow-hidden">
        <div className="flex flex-col space-y-3 flex-1">
          <div className="flex flex-col gap-3 flex-1">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardSkeleton;
