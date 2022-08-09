import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";

import OptimizedImage from "../components/OptimizedImage";

export default function () {
  return (
    <footer className="p-4 bg-gray-200 md:flex md:flex-col md:items-center md:justify-center md:px-6">
      <div className="w-full flex-col items-center justify-center md:flex md:flex-row">
        <div className="my-4 flex justify-between md:justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center">
            <a
              href="https://www.facebook.com/RoyaltyCarpet/"
              className="cursor-pointer hover:text-blue-500 px-2 flex items-center justify-center"
            >
              <FaFacebook className="text-3xl md:text-6xl hover:text-blue-300" />
            </a>
            <a
              href="https://www.yelp.com/biz/royalty-carpet-and-tile-cleaning-round-rock"
              className="cursor-pointer hover:text-blue-500 px-2 flex items-center justify-center"
            >
              <FaYelp className="text-3xl md:text-6xl hover:text-blue-300" />
            </a>
            <a
              href="https://www.housecallpro.com/superpro/"
              className="cursor-pointer hover:text-blue-500 px-2 flex items-center justify-center"
            >
              <div>
                <OptimizedImage
                  fileName="Superpro_badge_Plain_Level1.png"
                  classes="w-[40px]"
                  altText="Plain 2019 Superpro badge from Housecall Pro"
                />
              </div>
            </a>
            <a
              href="https://rockincityrollergirls.org/"
              className="cursor-pointer hover:text-blue-500 px-2 flex items-center justify-center"
            >
              <OptimizedImage
                fileName="roller.png"
                classes="w-[40px]"
                altText="Plain 2019 Superpro badge from Housecall Pro"
              />
            </a>
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
