import Link from "next/link";
import NavSocials from "./NavSocials";
import NavAccount from "./NavAccount";
import NavLinks from "./NavLinks";

const Header = () => {
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
        <NavAccount session={session} />
      </section>
      <section>
        {/* SECONDARY SECTION */}
        <NavLinks />
      </section>
    </header>
  );
};

export default Header;
