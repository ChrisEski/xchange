import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const BannerLoader = () => {
  return (
    <div className="border-4 border-black flex flex-col gap-8 section-content">
      <div className="relative rounded-lg overflow-hidden flex-1 min-h-[500px] group border border-neutral-200">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 animate-pulse bg-neutral-50 dark:bg-neutral-800 flex flex-col justify-end gap-3 p-12">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-7 w-[75%]" />
            <Skeleton className="h-7 w-[45%]" />
            <Skeleton className="h-3 w-[160px] mb-3" />
            <Skeleton className="h-3 w-[75%]" />
            <Skeleton className="h-3 w-[45%]" />
            <Skeleton className="h-[2px] w-[25%]" />
            <Skeleton className="h-3 w-[160px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLoader;
