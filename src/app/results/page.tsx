import DefaultLayout from "@/components/layouts/Default";
import { CTAs } from "@/components/CTAs";
import axios from "axios";
import ResultsPageClient from "./page-client";

// import RoomBefore from "@/images/room-before.png";
// import RoomAfter from "@/images/room-after.png";
// import TileBefore from "@/images/tile-before.png";
// import TileAfter from "@/images/tile-after.png";
// import UpholsteryDirty from "@/images/upholstery-dirty.png";
// import UpholsteryClean from "@/images/upholstery-clean.png";
import CompareImage from "./compare-image-wrapper";
import Link from "next/link";

export default async function () {
  const apiKey = process.env.GOOGLE_DEV_API_KEY || "";
  const placeId = process.env.PLACE_ID || "";

  const reviewData = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name%2Crating%2Creview&key=${apiKey}`
  );
  const reviews = reviewData.data.result.reviews;

  return (
    <DefaultLayout>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center align-middle">
          <h3 className="text-center text-3xl font-extrabold font-sans mt-4 mb-2">
            Expect Results
          </h3>
          <hr className="border-t-4 self-center border-brand-medium w-1/12" />
        </div>
        <CTAs />
        <div className="grid gap-2 px-4 md:gap-6 md:grid-cols-3">
          <div className="my-6">
            <h3 className="text-2xl mb-4 font-bold md:my-4 text-center text-ellipsis overflow-hidden">
              Carpet Cleaning
            </h3>
            <CompareImage
              leftImage={`room-before.png`}
              rightImage={`room-after.png`}
              leftImageAlt="Dirty carpet in Round Rock Before"
              rightImageAlt="Clean carpet in Round Rock After"
            />
            <div className="px-2">
              <h3 className="text-xl font-bold mt-2 text-center text-ellipsis overflow-hidden">
                Carpet Care Tips
              </h3>
              <ul className="list-disc ml-6">
                <li>Take your shoes off</li>
                <li>Put an entry mat at all entrances</li>
                <li>Vacuum frequently (try for every other day)</li>
                <li>
                  If a spill happens, blot as much of the liquid as possible
                  before it sets. Do not scrub, it will damage the fibers of
                  your carpet.
                </li>
                <li>Call us and we can walk you through it!</li>
                <li>
                  Carpet should be professionally cleaned every 12-18 months,
                  unless someone in your household suffers from allergies and/or
                  asthma. We recommend daily vacuuming and carpets to be cleaned
                  every 6-8 months.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-6">
            <h3 className="text-2xl my-4 font-bold text-center text-ellipsis overflow-hidden">
              Tile Cleaning
            </h3>
            <CompareImage
              leftImage={`tile-before.png`}
              rightImage={"tile-after.png"}
              rightImageCss={{ height: "100%" }}
              leftImageAlt="Dirty tile floor in Austin before"
              rightImageAlt="Clean tile floor in Austin after"
            />
            <div className="px-2">
              <h3 className="text-xl font-bold mt-2 text-center">
                Tile & Grout Care Tips
              </h3>
              <ul className="list-disc ml-6">
                <li>Vacuum your tile so dirt does not settle in the grout</li>
                <li>
                  Clean your tile with a neutral cleaner or water. Follow the
                  instructions...many cleaners need to be rinsed with water so
                  that there is no residue. Using a stiff brush for the grout is
                  recommended.
                </li>
                <li>
                  Do not use anything that adds a shine. This will cause build
                  up and dullness over time, leading to a costly stripping
                  process in the future.
                </li>
                <li>
                  Spill something in the grout? Clean up immediately especially
                  if it is oil based. Oil can stain grout, so it is also
                  recommended to put dry baking soda over the oil spill to
                  absorb.
                </li>
                <li>
                  Tile & grout should be professionally cleaned every 12-18
                  months.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-6">
            <h3 className="text-2xl my-4 font-bold text-center">
              Upholstery Cleaning
            </h3>
            <CompareImage
              leftImage={`upholstery-dirty.png`}
              rightImage={`upholstery-clean.png`}
              rightImageCss={{ height: "100%" }}
              leftImageAlt="Dirty upholstery Pflugerville before"
              rightImageAlt="Clean upholstery Pflugerville after"
            />
            <div className="px-2">
              <h3 className="text-xl font-bold mt-2 text-center">
                Upholstery Care Tips
              </h3>
              <ul className="list-disc ml-6">
                <li>
                  Vacuum as much as possible for your schedule, especially if
                  you have pets. Pet coats are much oilier, and can build up a
                  smell over time.
                </li>
                <li>
                  For people, putting a cover over the arms and head area will
                  keep the oils from your body staining and attracting dirt.
                </li>
                <li>
                  Spills should be cleaned immediately with a dry towel. Blot up
                  liquid. Upholstery that is cotton or a natural fiber, water
                  will leave a water ring and will become discolored. Never rub
                  a spot, it will damage the fibers.
                </li>
                <li>
                  Upholstery should be cleaned every 12-18 months. If you have
                  pets, consider cleaning it every 6-8 months.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 my-8">
          <Link
            href="https://client.housecallpro.com/reviews/Royalty-Carpet-&-Tile-Cleaning/b0c4c76e-5c25-41d4-b35f-1584f801d811"
            target="_blank"
            className="text-blue-600"
          >
            <h3 className="text-blue-600 text-3xl text-center font-extrabold  mb-2">
              Reviews
            </h3>
          </Link>
          <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
          <ResultsPageClient reviews={reviews} />
        </div>
      </div>
    </DefaultLayout>
  );
}
