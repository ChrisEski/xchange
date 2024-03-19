import NavSocials from "./NavSocials";
import NavAccount from "./NavAccount";
import NavLinks from "./NavLinks";
import Link from "next/link";
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
        <Link
          href="/"
          className="font-black text-4xl"
        >
          Xchange
        </Link>
        <div className="flex items-center justify-end gap-4">
          <NavAccount />
          {/* <ThemeToggleBtn /> */}
          <ModeToggle />
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
