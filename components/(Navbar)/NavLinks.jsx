"use client";

import { navLinks } from "@/lib/links";
import Link from "next/link";
import { useParams } from "next/navigation";

const NavLinks = () => {
  const params = useParams();

  return (
    <ul className={`px-12 py-2 border-y border-y-[#BFBFBF] flex justify-center items-center gap-4`}>
      {navLinks.map((navLink) => (
        <li key={navLink.path}>
          <Link
            // !FIX: Active navlinks based on the post's category and url category
            href={navLink.path === "/" ? "/" : `/posts/categories/${navLink.path}`}
            className={`${
              navLink.category === params.category ||
              (navLink.category === "home" && params.category === undefined)
                ? "font-bold"
                : ""
            } font-display`}
          >
            {navLink.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
