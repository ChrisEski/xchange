import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

import "../globals.css";

export const metadata = {
  title: "Xchange | Blog Site",
  description:
    "Blog site where users can publish articles and share their thoughts and expreriences about Technology, traveling and psychology.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const showBorders = true;
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-slate-900 bg-[url('/bg-lines.svg')]`}>
          <main className="min-h-screen flex justify-center items-center">
            <div className="">
              {children}
              <Link
                href="/"
                className={`${buttonVariants({
                  variant: "link",
                })} text-white pl-9`}
              >
                <ChevronLeft className="w-4" /> Back to homepage
              </Link>
              <div className="flex w-full justify-between items-center px-10 mt-4 text-sm text-neutral-300 font-light">
                <div>&copy; {new Date().getFullYear()} Xchange</div>
                <div>
                  <ul className="flex items-center gap-3">
                    <li>
                      <Link
                        href="/contact"
                        className="hover:underline"
                      >
                        Help
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy"
                        className="hover:underline"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="hover:underline"
                      >
                        Terms
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
