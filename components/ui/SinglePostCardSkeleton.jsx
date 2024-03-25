import { Skeleton } from "./skeleton";
import { Separator } from "@/components/ui/separator";

const SinglePostCardSkeleton = () => {
  return (
    // <article className="rounded-lg overflow-hidden min-h-[440px] flex flex-col">
    //   {/* Category label */}
    //   <span className="absolute text-white z-10 rounded text-sm font-semibold px-2 bg-white/20 m-4 border border-white"></span>

    //   {/* Featured image */}
    //   <div className="relative min-h-[220px] group">
    //     {/* Darkening overlay */}
    //     <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/75"></div>{" "}
    //   </div>

    //   {/* Details */}
    //   <div className="details flex-1 p-3 flex flex-col gap-3 justify-between rounded-b-lg border border-neutral-300 border-t-0">
    //     <div className="flex flex-col gap-3">
    //       {/* Publish date */}
    //       <span className="text-sm text-neutral-700">Published </span>
    //       {/* Title-link */}
    //       <div>
    //         <h3 className="text-lg font-bold font-display leading-none">Title</h3>
    //       </div>
    //       {/* Excerpt */}
    //       <p className="text-sm text-neutral-700">Excerpt</p>
    //     </div>

    //     {/* Author details */}
    //     <div className="flex flex-col gap-3">
    //       <Separator />
    //       <div className="author flex gap-3">
    //         {/* Avatar */}
    //         <div>Avatar</div>
    //         <div className="text-sm text-neutral-700 flex flex-col">
    //           <div className="text-black">
    //             {/* Full Name */}
    //             Author
    //             <span className="hover:underline">Fullname</span>
    //           </div>
    //           {/* Role */}
    //           <span className="text-sm">role</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </article>
    <article className="rounded-lg overflow-hidden min-h-[440px] flex flex-col justify-between">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[225px] rounded-xl" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[250px]" />
          <div className="pt-5 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[270px]" />
          </div>
        </div>
      </div>
      <div className="">
        <Skeleton className="h-[1px] w-full mb-3" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[120px]" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default SinglePostCardSkeleton;
