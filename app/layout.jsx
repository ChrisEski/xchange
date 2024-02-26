import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import Header from "@/components/(Navbar)/Header";

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

export const metadata = {
  title: "Xchange | Blog Site",
  description:
    "Blog site where users can publish articles and share their thoughts and expreriences about Technology, travelling and psycology.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-100"
    >
      <body className="font-body flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
      <Script src="https://kit.fontawesome.com/edbd25a9bd.js"></Script>
    </html>
  );
}
