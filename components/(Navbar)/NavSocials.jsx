import { socialLinks } from "@/lib/links";
import Link from "next/link";

const NavSocials = () => {
  return (
    <ul className="min-w-[120px] flex justify-start items-center gap-4">
      {socialLinks.map((socialLink) => (
        <li key={socialLink.title}>
          <Link href={socialLink.link}>{socialLink.iconBlack}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavSocials;
