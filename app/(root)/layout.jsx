export const revalidate = 1800;

import { Lato, Playfair_Display, Source_Code_Pro } from "next/font/google";
import "../globals.css";
import Footer from "@/components/(Footer)/Footer";
import Script from "next/script";
import Header from "@/components/(Navbar)/Header";
import GlobalContainer from "@/components/ui/GlobalContainer";
import { ClerkProvider } from "@clerk/nextjs";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const source = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Xchange | Blog Site",
  description:
    "Blog site where users can publish articles and share their thoughts and expreriences about Technology, traveling and psychology.",
};

export default function RootLayout({ children }) {
  const showBorders = false;
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${showBorders && "border-4 border-blue-500"}`}
        // className="h-100"
      >
        <body
          className={`${showBorders && "border-4 border-red-500"}`}
          //  className="font-body flex flex-col min-h-screen"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Header showBorders={showBorders} />
            <main className={`${showBorders && "border-4 border-yellow-500 "} "font-body"`}>
              {/* <GlobalContainer> */}
              {children}
              {/* </GlobalContainer> */}
            </main>
            <Footer showBorders={showBorders} />
            <Toaster />
          </ThemeProvider>
        </body>
        <Script src="https://kit.fontawesome.com/edbd25a9bd.js"></Script>
      </html>
    </ClerkProvider>
  );
}
