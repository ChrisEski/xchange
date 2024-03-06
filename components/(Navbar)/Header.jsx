import NavSocials from "./NavSocials";
import NavAccount from "./NavAccount";

const Header = () => {
  return (
    <header className="border-4 border-green-500">
      {/* Header container */}
      <div className="border-4 border-black max-w-[1220px] mx-auto px-12 py-4 flex justify-between items-center">
        <NavSocials />
        <div className="font-black text-4xl">Xchange</div>
        <NavAccount />
      </div>
    </header>
  );
};

export default Header;
