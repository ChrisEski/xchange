import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Banner = () => {
  return (
    <div className="flex flex-col gap-8 px-12 py-16 max-w-[1220px] mx-auto">
      {/* <div className="flex justify-between gap-5"> */}
      <Link
        href="#"
        className="relative rounded-lg overflow-hidden flex-1 min-h-[500px] group"
      >
        {/* ARTICLE IMAGE */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/travelling.jpg"
              fill
              objectFit="cover"
              className="transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-25"></div> {/* Darkening overlay */}
        </div>

        {/* ARTICLE INFO */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 gap-4 w-[55%]">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-white rounded font-semibold px-2 bg-white/20 border border-white">
              Category
            </span>
            <span className=" text-neutral-300">Published 01/01/2024</span>
          </div>
          <h3 className="text-4xl font-bold font-display leading-none text-white mt-1">Article Title</h3>
          <p className="text-neutral-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsa veniam voluptatem? Laudantium
            debitis harum nobis fugiat odio commodi!
          </p>
          <Separator className="w-[25%] bg-white/30" />
          <div className="text-neutral-300 text-sm">
            Written by <span className="text-white font-bold">John Doe</span>
          </div>
        </div>
      </Link>
    </div>
    // </div>
  );
};

export default Banner;
