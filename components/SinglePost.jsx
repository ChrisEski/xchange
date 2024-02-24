import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SinglePost = () => {
  return (
    <article className="rounded-lg overflow-hidden">
      <span className="absolute text-white z-10 rounded text-sm font-semibold px-2 bg-white/20 m-4 border border-white">
        Category
      </span>
      <div className="relative h-52 brightness-75 overflow-hidden">
        <Link href="#">
          <Image
            src="/technology.jpg"
            alt="Article image"
            objectFit="cover"
            fill
            className="transform hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>
      <div className="details p-3 flex flex-col gap-3 rounded-b-lg border border-neutral-300 border-t-0">
        <span className="text-sm text-neutral-600">Published 01/01/2024</span>
        <Link href="#">
          <h3 className="text-lg font-bold font-display leading-none">Article Title</h3>
        </Link>
        <p className="text-sm text-neutral-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsa veniam voluptatem? Laudantium
          debitis harum nobis fugiat odio commodi!
        </p>
        <Separator />
        <div className="author flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-sm text-neutral-600 flex flex-col">
            <span className="font-bold text-black">By John Doe</span>
            <span className="text-sm">Admin | Author</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SinglePost;
