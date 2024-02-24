import Link from "next/link";
import NavSocials from "./NavSocials";
import NavAccount from "./NavAccount";
import NavLinks from "./NavLinks";
import { Lato, Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

const linksFont = playfairDisplay.className;

const Header = () => {
  const session = true;

  return (
    <header className="bg-white">
      {/* PRIMARY SECTION */}
      <section className="flex justify-between items-center px-12 py-3">
        <NavSocials />
        <Link
          href="/"
          className="font-black text-3xl"
        >
          XCHANGE
        </Link>
        <NavAccount session={session} />
      </section>
      <section>
        {/* SECONDARY SECTION */}
        <NavLinks linksFont={linksFont} />
      </section>
    </header>
  );
};

export default Header;
