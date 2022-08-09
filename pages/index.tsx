import Default from "../components/layouts/Default";
import SEO from "../components/SEO";
import config from "../utils/config";
import OptimizedImage from "../components/OptimizedImage";
import OptimizedCarousel from "../components/OptimizedCarousel";
import { CTAs } from "../components/CTAs";
import { reviews } from "../data/reviews";
import { NextPageContext } from "next";
import axios from "axios";

export default function Home({ reviews }) {
  return (
    <Default>
      <SEO
        title="Royalty Carpet & Tile Cleaning. Serving all of Austin, Round Rock, Pflugerville, Hutto, Cedar Park, Georgetown, Leander and between!"
        description="Royalty Carpet & Tile Cleaning all of Austin, Round Rock, Pflugerville, Hutto, Cedar Park, Georgetown and Leander"
        image={config.images.default}
        url={config.liveUrl}
      />
      <div className="w-full rounded-sm md:w-2/3 md:mx-auto">
        <OptimizedImage
          altText="Puppy on clean tile floor"
          fileName="hero.jpeg"
          classes=""
        />
      </div>
      <CTAs />

      <div className="container mx-auto">
        <div className="px-2">
          <section className="mx-auto md:w-2/3 my-4 px-4 md:py-6 flex flex-col items-center">
            <h3 className="text-3xl text-center font-extrabold  mb-2">
              Cleaning All of Austin
            </h3>
            <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
            <p className="font-medium text-lg text-center">
              Get results and peace of mind with Royalty Carpet & Tile Cleaning
            </p>
            <p className="font-medium text-lg text-center">
              We are here to provide professional cleaning services for your
              home. We are experienced, picky, and educated professionals that
              want you as a forever client. You can count on us!
            </p>
            <div className="flex justify-center flex-wrap my-4">
              <span className="flex rounded-full bg-brand-med px-3 py-1 text-xs font-bold mr-3 my-2 text-white">
                Round Rock
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Pflugerville
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Hutto
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Austin
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Cedar Park
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Georgetown
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Leander
              </span>
            </div>
          </section>
          <section className="mx-auto w-full py-4 md:py-6">
            <div className="md:flex md:justify-center">
              <div className="md:w-4/5">
                <OptimizedCarousel content={reviews} />
              </div>
            </div>
          </section>
          <section className="mx-auto w-full px-4 md:py-6">
            <div className="md:flex my-16 md:py-20">
              <div className="w-full rounded-md max-w-screen-sm h-40 md:h-56 lg:h-64 overflow-hidden">
                <OptimizedImage
                  fileName="carpet.jpg"
                  altText="Clean carpet floor"
                  classes=""
                />
              </div>
              <div className="md:p-16">
                <div className="flex">
                  {/* <TiPhoneOutline className="hidden md:block text-3xl m-2" /> */}
                  <h3 className="text-2xl  my-2 font-bold">Carpet Cleaning</h3>
                </div>
                <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
                <p className="font-medium text-lg">
                  Carpet feels so good on the feet, but life happens! Let us
                  keep your carpets clean, healthy, and looking fantastic. We
                  can also take care of pet accidents, spills and stains, and
                  more. We can even do carpet repairs while we are there.
                </p>
              </div>
            </div>
            <div className="md:flex my-16 md:py-20 flex-row-reverse">
              <div className="w-full rounded-md max-w-screen-sm h-40 md:h-56 lg:h-64 overflow-hidden">
                <OptimizedImage
                  fileName="tile.jpg"
                  altText="Clean white tile"
                  classes=""
                />
              </div>
              <div className="md:p-16">
                <div className="flex">
                  {/* <TiPhoneOutline className="hidden md:block text-3xl m-2" /> */}
                  <h3 className="text-2xl  my-2 font-bold">Tile & Grout</h3>
                </div>
                <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
                <p className="font-medium text-lg">
                  Tile floors are fantastic for ease of cleaning, but over time
                  dirt builds up in the grout lines. Grout needs professional
                  cleaning to truly remove all of the dirt that gets embedded,
                  which makes the grout get darker and darker.
                </p>
              </div>
            </div>
            <div className="md:flex my-16 md:py-20">
              <div className="w-full rounded-md max-w-screen-sm h-40 md:h-56 lg:h-64 overflow-hidden">
                <OptimizedImage
                  fileName="couch.jpg"
                  altText="Clean couch with decor"
                  classes=""
                />
              </div>
              <div className="md:p-16">
                <div className="flex">
                  {/* <TiPhoneOutline className="hidden md:block text-3xl m-2" /> */}
                  <h3 className="text-2xl  my-2 font-bold">Upholstery</h3>
                </div>
                <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
                <p className="font-medium text-lg">
                  We all love curling up on the couch, but spills, pet smells,
                  sweat and dirt can make the experience less relaxing. Let us
                  help keep your home healthy and happy, which includes the
                  cleaning and maintenance of your couches and chairs. We offer
                  a low moisture cleaning process using our truck mounted system
                  based on the type of fabric that cleans, sanitizes, and
                  deodorizes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Default>
  );
}

// get static props
export const getStaticProps = async (ctx: NextPageContext) => {
  const apiKey = process.env.GOOGLE_DEV_API_KEY || "";
  const placeId = process.env.PLACE_ID || "";

  const reviewData = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name%2Crating%2Creview&key=${apiKey}`
  );
  const reviews = reviewData.data.result.reviews;
  return {
    props: {
      reviews,
    },
    unstable_revalidate: 10,
  };
};
