"use client";

import SectionTitle from "@/components/(Sections)/SectionTitle";
import SinglePostCard from "@/components/ui/SinglePostCard";
import { fetchCategoryPosts } from "@/lib/data/posts";
import { capitalizeFirstLetter } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Category = () => {
  const params = useParams();
  const { category } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [categoryPosts, setCategoryPosts] = useState([]);

  useEffect(() => {
    const getPosts = async (category) => {
      const posts = await fetchCategoryPosts(category);
      setCategoryPosts(posts);
      setIsLoading(false);
    };

    getPosts(category);
  }, [category]);
  const showBorders = false;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <section
      className={`${showBorders && "border-4 border-black"} flex flex-col gap-12 section-content`}
    >
      <SectionTitle altTitle={`${capitalizeFirstLetter(category)} articles`} />
      <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5">
        {categoryPosts.map((post) => (
          <SinglePostCard
            key={post._id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
