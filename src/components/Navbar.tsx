"use client";
import Link from "next/link";
import { useState } from "react";

import Menu from "./svgs/Menu";
import Close from "./svgs/Close";

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
            <span className="text-2xl md:text-3xl font-bold font-sans">
              Royalty Carpet & Tile
            </span>
          </Link>
        </div>
        <div className="block md:hidden">
          {/* Hamburger */}
          <button
            className="rounded-md border border-black focus:outline-none"
            onClick={() => setHidden(!hidden)}
            aria-label="Toggle menu"
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
                    <span className="mx-1 block md:inline-block md:mt-0 hover:text-gray-700 mr-4">
                      {link.text}
                    </span>
                  </Link>
                );
              })}
              <Link href="contact">
                <span className="btn">Contact</span>
              </Link>
              <div>
                <Link href="https://housecallpro.com/book/Royalty-Carpet--Tile-Cleaning/331682fdd7e241ecb6a8ac97c3680572">
                  <span className="btn">Book Online Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
