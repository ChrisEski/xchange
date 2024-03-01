import { navLinks } from "@/lib/links";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-section px-12 pb-3 pt-16">
      <div className="container max-w-[1220px] flex flex-col gap-10">
        {/* <Link
          href="/"
          className="font-black text-2xl"
        >
          XCHANGE
        </Link> */}
        <div className="flex justify-between">
          <div className="max-w-[300px]">
            {/* <h3 className="font-bold mb-4">About Us</h3>
             */}
            <Link
              href="/"
              className="font-black text-2xl"
            >
              XCHANGE
            </Link>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit facilis
              tempore necessitatibus deleniti veritatis labore.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Blog</h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.path === "/" ? "/" : `/posts/categories${link.path}`}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookies">Cookies Policy</Link>
              </li>
              <li>
                <Link href="/tos">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <h4>Newsletter form</h4>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span>
            Copyright © 2024 <span className="font-bold">XCHANGE</span>
          </span>
          <span>
            Designed & Developed by{" "}
            <Link
              href="https://github.com/ChrisEski"
              className="font-bold"
            >
              Chris Eski
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
