import SectionPosts from "@/components/SectionPosts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 px-12 py-16">
      <div className="max-w-[1220px] mx-auto">
        <SectionPosts category="technology" />
      </div>
    </main>
  );
}
