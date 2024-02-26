"use client";

import { navLInks } from "@/lib/links";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className={`px-12 py-2 border-y border-y-[#BFBFBF] flex justify-center items-center gap-4`}>
      {navLInks.map((navLink) => (
        <li key={navLink.path}>
          <Link
            href={navLink.path}
            className={`${navLink.path === pathname ? "font-bold" : ""} font-display`}
          >
            {navLink.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
