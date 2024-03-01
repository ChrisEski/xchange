import Link from "next/link";
import NavSocials from "./NavSocials";
import NavAccount from "./NavAccount";
import NavLinks from "./NavLinks";
import ThemeToggleBtn from "../ui/themeToggleBtn";
import { navLinks } from "@/lib/links";
import { getSingleUser } from "@/lib/data";

const Header = async () => {
  // const sessionUser = await getSingleUser("user1");
  const session = true;

  return (
    <header className="bg-white">
      {/* PRIMARY SECTION */}
      <section className="flex justify-between items-center px-12 py-3">
        <NavSocials />
        <Link
          href="/"
          className="font-black text-4xl"
        >
          XCHANGE
        </Link>
        <NavAccount
          session={session}
          // sessionUser={sessionUser}
        />
      </section>
      <section>
        {/* SECONDARY SECTION */}
        {/* <ThemeToggleBtn /> */}
        <NavLinks />
      </section>
    </header>
  );
};

export default Header;
