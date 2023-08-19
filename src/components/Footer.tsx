import { FaGoogle, FaYelp } from "react-icons/fa";
import Image from "next/image";
import SuperproSVG from "@/images/superpro-new.svg";
import Link from "next/link";

export default function () {
  return (
    <footer className="p-4 bg-gray-200 md:flex md:flex-col md:items-center md:justify-center md:px-6">
      <div className="w-full flex-col items-center justify-center md:flex md:flex-row">
        <div className="my-4 flex justify-between md:justify-center">
          <div className="flex flex-row justify-evenly w-full">
            {/* google */}
            <Link
              href="https://www.google.com/maps/place/Royalty+Carpet+%26+Tile+Cleaning/@30.4912414,-97.6730061,15z/data=!4m6!3m5!1s0x8091439d40ad07dd:0xe3f39b2808a2d74a!8m2!3d30.4912414!4d-97.6730061!16s%2Fg%2F1tnpfp5y?hl=en&entry=ttu"
              className="cursor-pointer hover:text-blue-500 px-2 flex items-center justify-center"
              aria-label="Google"
              target="_blank"
            >
              <div>
                <FaGoogle className="text-3xl md:text-6xl hover:text-blue-300" />
              </div>
            </Link>
            {/* yelp */}
            <Link
              href="https://www.yelp.com/biz/royalty-carpet-and-tile-cleaning-round-rock"
              className="cursor-pointer hover:text-blue-500 px-2 flex items-center justify-center"
              aria-label="Yelp"
              target="_blank"
            >
              <FaYelp className="text-3xl md:text-6xl hover:text-blue-300" />
            </Link>
            {/* superpro */}
            <Link
              href="https://www.housecallpro.com/superpro/"
              className="cursor-pointer hover:text-blue-500 px-2 flex items-center justify-center"
              target="_blank"
              aria-label="Housecall Pro Superpro"
            >
              <div>
                <Image
                  src={SuperproSVG}
                  sizes="100vw"
                  alt="Superpro badge from Housecall Pro"
                  aria-label="Housecall Pro Superpro"
                  className="w-16 md:w-24"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-6 justify-center">
        <Link
          href="https://www.google.com/maps?ll=30.378215,-97.729669&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=10382078112836471621"
          target="_blank"
        >
          <div className="p-4 rounded-lg shadow-md">
            <address>
              9200 Waterford Centre Blvd
              <br />
              Suite 100-B
              <br />
              Austin, TX 78758
            </address>
          </div>
        </Link>
        <Link
          href="https://www.google.com/maps?ll=30.491241,-97.673006&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=16425642862196217674"
          target="_blank"
        >
          <div className="p-4 rounded-lg shadow-md">
            <address>
              2007 Montclair Dr <br />
              Round Rock, TX 78664
            </address>
          </div>
        </Link>
      </div>
    </footer>
  );
}
