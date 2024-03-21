import NavSocials from "./NavSocials";
import NavAccount from "./NavAccount";
import NavLinks from "./NavLinks";
import Link from "next/link";
import logoLight from "../../public/logo.svg";
import logoDark from "../../public/logo_dark.svg";
import { Moon, SunDim } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggleBtn from "../ui/themeToggleBtn";
import { ModeToggle } from "../ui/ModeToggle";
import Image from "next/image";

const Header = ({ showBorders }) => {
  return (
    <header className={`${showBorders && "border-4 border-green-500"}`}>
      {/* Header container */}
      <div
        className={`${
          showBorders && "border-4 border-black "
        } max-w-[1220px] mx-auto px-12 py-4 flex justify-between items-center`}
      >
        <NavSocials />
        {/* <Link
          href="/"
          className="font-black text-4xl"
        >
          Xchange
        </Link> */}
        <Link
          href="/"
          className="dark:hidden"
        >
          <div className="relative w-[220px] h-[60px]">
            <Image
              src={logoLight}
              alt="Xchange logo"
              fill
            />
          </div>
        </Link>
        <Link
          href="/"
          className="hidden dark:block"
        >
          <div className="relative w-[220px] h-[60px]">
            <Image
              src={logoDark}
              alt="Xchange logo"
              fill
            />
          </div>
        </Link>

        <div className="flex items-center justify-end gap-4 min-w-[200px]">
          <NavAccount />
          <ModeToggle />
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
