import Link from "next/link";
import NavSocials from "./NavSocials";
import NavAccount from "./NavAccount";
import NavLinks from "./NavLinks";
// import { auth } from "@/auth";
import ThemeToggleBtn from "../ui/themeToggleBtn";
import { navLinks } from "@/lib/links";
import { getSingleUser } from "@/lib/data";

const Header = async () => {
  // const sessionUser = await getSingleUser("user1");
  const testSession = true;
  // const session = await auth();
  // console.log("Session in Header:", session);

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
          testSession={testSession}
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
