import Link from "next/link";
import { useState } from "react";

import Menu from "../components/svgs/Menu";
import Close from "../components/svgs/Close";
import OptimizedImage from "../components/OptimizedImage";
import { CTAs } from "./CTAs";

const links = [
  { text: "About", url: "/about" },
  { text: "Results", url: "/results" },
  { text: "FAQS", url: "/faqs" },
];

export default function () {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <nav className="flex md:flex-col items-center justify-between flex-wrap p-6 text-gray-900 sticky top-0 z-50 bg-white">
        <div className="flex items-center flex-shrink-1">
          <Link href="/">
            <a>
              <h2 className="text-2xl md:text-3xl font-bold">
                Royalty Carpet & Tile
              </h2>
            </a>
          </Link>
        </div>
        <div className="block md:hidden">
          {/* Hamburger */}
          <button
            className="rounded-md border border-black focus:outline-none"
            onClick={() => setHidden(!hidden)}
          >
            {hidden ? <Menu /> : <Close />}
          </button>
        </div>
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
          <div
            className={`md:flex-grow md:flex md:justify-end ${
              hidden ? "hidden" : ""
            }`}
          >
            <div className="flex flex-col gap-2 md:mt-4 md:flex md:flex-row md:gap-2 md:items-center md:justify-center">
              {links.map((link) => {
                return (
                  <Link href={link.url} key={link.url}>
                    <a>
                      <div className="mx-1 block font-semibold md:inline-block md:mt-0 hover:text-gray-700 mr-4">
                        {link.text}
                      </div>
                    </a>
                  </Link>
                );
              })}
              <Link href="contact">
                <div>
                  <a className="btn">Contact</a>
                </div>
              </Link>
              <div>
                <a href="https://housecallpro.com/book/Royalty-Carpet--Tile-Cleaning/331682fdd7e241ecb6a8ac97c3680572">
                  <button className="btn">Book Online Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
