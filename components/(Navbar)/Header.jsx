// "use client";
// import Link from "next/link";
// import NavSocials from "./NavSocials";
// import NavAccount from "./NavAccount";
// import NavLinks from "./NavLinks";
// import { auth } from "@/auth";
// import ThemeToggleBtn from "../ui/themeToggleBtn";
// import { navLinks } from "@/lib/links";
// import { getSingleUser } from "@/lib/data";
// import { RedirectToSignIn, useUser } from "@clerk/clerk-react";
// import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import GlobalContainer from "../GlobalContainer";
// import Link from "next/link";

const Header = () => {
  // const { isSignedIn, user, isLoaded } = useUser();
  // const sessionUser = await getSingleUser("user1");
  // const testSession = true;
  // const session = await auth();
  // console.log("Session in Header:", session);

  return (
    // <header className="bg-white">
    //   {/* PRIMARY SECTION */}
    //   <section className="flex justify-between items-center px-12 py-3">
    //     <NavSocials />
    //     <Link
    //       href="/"
    //       className="font-black text-4xl"
    //     >
    //       XCHANGE
    //     </Link>
    //     <NavAccount
    //       testSession={testSession}
    //       // sessionUser={sessionUser}
    //     />
    //   </section>
    //   <section>
    //     {/* SECONDARY SECTION */}
    //     {/* <ThemeToggleBtn /> */}
    //     <NavLinks />
    //   </section>
    // </header>
    <header className="border-4 border-green-500">
      {/* Header container */}
      <div className="border-4 border-black max-w-[1220px] mx-auto px-12 py-4 flex justify-between items-center">
        <div className="min-w-[120px]">Socials</div>
        <div className="font-black text-4xl">Xchange</div>
        <div className="min-w-[120px] flex justify-end">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button>
              <SignInButton />
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
