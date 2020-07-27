import Link from 'next/link'
import { useState } from 'react'

import Menu from '../components/svgs/Menu'
import Close from '../components/svgs/Close'
import OptimizedImage from '../components/OptimizedImage'

const links = [
  { text: 'About', url: '/about' },
  { text: 'Results', url: '/results' },
  // { text: 'Contact', url: '/contact' },
  { text: 'Social', url: '/social' },
]

export default function () {
  const [hidden, setHidden] = useState(true)

  return (
    <>
      <nav className="flex md:flex-col items-center justify-between flex-wrap p-6 text-gray-900">
        <div className="flex items-center flex-shrink-1">
          <Link href="/">
            <a>
              {/* <OptimizedImage
                fileName="logo.png"
                altText="Royalty Carpet and Tile Logo"
                classes="w-1/2 md:w-1/5"
              /> */}
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
              hidden ? 'hidden' : ''
            }`}
          >
            <div>
              {links.map((link) => {
                return (
                  <Link href={link.url}>
                    <a>
                      <div className="mx-1 block mt-4 font-semibold md:inline-block md:mt-0 hover:text-gray-700 mr-4">
                        {link.text}
                      </div>
                    </a>
                  </Link>
                )
              })}
              <Link href="contact">
                <a className="btn text-md">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
