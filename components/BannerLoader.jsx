"use client";
import Image from "next/image";

const BannerLoader = () => {
  return (
    <div className="border-4 border-black flex flex-col gap-8 section-content">
      <div className="relative rounded-lg overflow-hidden flex-1 min-h-[500px] group">
        {/* ARTICLE IMAGE */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.jpg"
              alt="placeholder image"
              fill
              style={{ objectFit: "cover" }}
              className="transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>{" "}
          {/* Darkening overlay */}
        </div>
      </div>
    </div>
  );
};

export default BannerLoader;
