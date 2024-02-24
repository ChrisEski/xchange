import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/(Navbar)/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Xchange | Blog Site",
  description:
    "Blog site where users can publish articles and share their thoughts and expreriences about Technology, travelling and psycology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} flex flex-col h-[100vh] bg-blue-200`}>
        <Header />
        {children}
        <Footer />
      </body>
      <Script src="https://kit.fontawesome.com/edbd25a9bd.js"></Script>
    </html>
  );
}
