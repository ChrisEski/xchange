"use client";

import { navLInks } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ linksFont }) => {
  const pathname = usePathname();

  return (
    <ul
      className={`${linksFont} px-12 py-2 border-y border-y-[#BFBFBF] text-sm flex justify-center items-center gap-4`}
    >
      {navLInks.map((navLink) => (
        <li key={navLink.path}>
          <Link
            href={navLink.path}
            className={`${navLink.path === pathname ? "font-bold" : ""}`}
          >
            {navLink.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
