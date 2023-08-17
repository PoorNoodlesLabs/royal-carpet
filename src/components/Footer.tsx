import { FaYelp } from "react-icons/fa";
import Image from "next/image";
import Superpro from "@/images/Superpro_badge_Plain_Level1.png";
import Roller from "@/images/roller.png";
import Link from "next/link";

export default function () {
  return (
    <footer className="p-4 bg-gray-200 md:flex md:flex-col md:items-center md:justify-center md:px-6">
      <div className="w-full flex-col items-center justify-center md:flex md:flex-row">
        <div className="my-4 flex justify-between md:justify-center">
          <div className="flex flex-row gap-6 items-center justify-center">
            <Link
              href="https://www.yelp.com/biz/royalty-carpet-and-tile-cleaning-round-rock"
              className="cursor-pointer hover:text-blue-500 px-2 flex items-center justify-center"
              aria-label="Yelp"
            >
              <FaYelp className="text-3xl md:text-6xl hover:text-blue-300" />
            </Link>
            <Link
              href="https://www.housecallpro.com/superpro/"
              className="cursor-pointer hover:text-blue-500 px-2 flex items-center justify-center"
            >
              <div>
                <Image
                  src={Superpro}
                  sizes="100vw"
                  placeholder="blur"
                  alt="Plain 2019 Superpro badge from Housecall Pro"
                  aria-label="Housecall Pro Superpro"
                  className="w-16 md:w-24"
                />
              </div>
            </Link>
            <Link
              href="https://rockincityrollergirls.org/"
              className="cursor-pointer hover:text-blue-500 px-2 flex items-center justify-center"
              aria-label="Rock n City Roller Girls"
            >
              <Image
                src={Roller}
                sizes="100vw"
                placeholder="blur"
                alt="Rockin City Roller Girls Logo"
                className="w-16 md:w-24"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <address>
          2007 Montclair Dr <br />
          Round Rock, TX 78664
        </address>
        {/* <GoogleMapImage /> */}
      </div>
    </footer>
  );
}
