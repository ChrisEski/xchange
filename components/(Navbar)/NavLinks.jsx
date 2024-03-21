"use client";

import { navLinks } from "@/lib/links";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const NavLinks = () => {
  const params = useParams();
  const currentPath = usePathname();

  return (
    <ul className={`px-12 py-2 border-y border-y-[#BFBFBF] flex justify-center items-center gap-4`}>
      {navLinks.map((navLink) => (
        <li key={navLink.path}>
          <Link
            href={navLink.path === "/" ? "/" : `/posts/categories/${navLink.path}`}
            className={`${
              (navLink.path === "/" && currentPath === "/") ||
              (currentPath.startsWith("/posts/categories") && navLink.category === params.category)
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
