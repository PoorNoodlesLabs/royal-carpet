import DefaultLayout from "@/components/layouts/Default";
import SEO from "@/components/SEO";
import { CTAs } from "@/components/CTAs";
import Image from "next/image";
import RoseLogo from "@/images/rose-logo.png";
import RetroVan from "@/images/retro-van.png";
import Logo from "@/images/logo.png";
import Dad from "@/images/dad.png";
import FireStation from "@/images/fire-station.png";
import Door from "@/images/door.png";
import Fundraiser from "@/images/fundraiser.png";
import Rink from "@/images/rink.png";
import Truck from "@/images/truck.png";

export default function () {
  return (
    <DefaultLayout>
      <div className="px-2 container mx-auto md:flex md:flex-col md:justify-center">
        <section className="mx-auto w-full my-4 px-4 md:py-6 md:flex">
          <div className="w-full mb-4">
            <div className="flex flex-col justify-center align-middle">
              <h3 className="text-3xl font-bold  mb-2">In a nutshell</h3>
              <hr className="border-t-4 border-brand-medium w-1/12 mb-4" />
            </div>
            <div>
              <h3 className="font-bold text-xl ">Owner operated.</h3>
              <span className="text-sm italic text-gray-600">
                which means you have an owner at each job.
              </span>
            </div>
            <div>
              <h3 className="font-bold text-xl ">
                We have been in business since 1986.
              </h3>
              <span className="text-sm italic text-gray-600">
                We have the experience and knowledge.
              </span>
            </div>
            <div>
              <h3 className="font-bold text-xl ">
                We believe what we do is important
              </h3>
              <span className="text-sm italic text-gray-600">
                We choose chemicals that protect you and us while doing an
                amazing job.
              </span>
            </div>
            <div>
              <h3 className="font-bold text-xl ">We take pride in our work</h3>
              <span className="text-sm italic text-gray-600">
                We don't take shortcuts!
              </span>
            </div>
            <div>
              <h3 className="font-bold text-xl ">
                We believe in respecting your time, family, pets, furniture, and
                wall corners.
              </h3>
              <span className="text-sm italic text-gray-600">
                We truly want you to be a forever friend.
              </span>
            </div>
          </div>
          <div className="md:w-2/3">
            <Image
              src={Truck}
              alt="Royalty Carpet and Tile Work Truck"
              sizes="100vw"
              placeholder="blur"
            />
          </div>
        </section>
        <CTAs />
        <section className="mx-auto my-4 px-4 md:py-6">
          <div>
            <h3 className="text-3xl font-extrabold mb-2">The Full Story</h3>
            <hr className="border-t-4 border-brand-medium w-1/12 mb-4" />
          </div>
          <div>
            <h4 className="text-2xl font-extrabold  mb-2">Excellence</h4>
            <p className="leading-loose my-4">
              Royalty Carpet & Tile Cleaning lives and breathes excellence. It
              has been a part of our mission statement since 1986, “Personalized
              Service, Committed to Excellence.” Royalty Carpet & Tile Cleaning
              rises above our competitors because we focus on our clients and we
              treat each job as a unique opportunity to establish a long term
              relationship. We care about our clients happiness, their
              environment, and their time. In order to do this, we follow the
              industry standard every single time, and we take extra steps to
              get our desired results while protecting their investment. How do
              we do this? We protect corners with corner guards so we don’t ding
              up their paint, we put stakes in their lawn to protect their lawn
              and shrubs from being burned by our hot hoses, and we always make
              sure to make it as perfect as possible.
            </p>
            <div className="md:flex md:justify-center">
              <Image
                src={RoseLogo}
                alt="Original Royalty Carpet and Tile Logo from 1986"
                sizes="100vw"
                placeholder="blur"
              />
              <Image
                src={RetroVan}
                alt="Original Royalty Carpet and Tile Work Truck from 1986"
                sizes="100vw"
                placeholder="blur"
              />
            </div>
            <p className="leading-loose my-4">
              Royalty Carpet & Tile Cleaning opened its door in 1986, when Bob
              Winchell retired from the military. He started Royalty Carpet &
              Upholstery Cleaning to provide for him and his son Craig (who was
              12 at the time.) Bob knew that personal relationships were first
              and foremost. The Royalty logo was a rose, and after he completed
              a job he would give a rose to every appointment as a sincere thank
              you. Those relationships kept his business strong and alive, and
              many of his earliest clients became some of his closest friends.
              When it was time for him to retire, (for the second time), his son
              Craig took over the family business in 2010.
            </p>
            <div className="md:flex md:justify-center">
              <Image
                src={Logo}
                alt="Current Royalty Carpet and Tile Logo"
                sizes="100vw"
                placeholder="blur"
              />
              <Image
                src={Dad}
                alt="Bob Winchell next to work truck in the 1900s"
                sizes="100vw"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-2xl font-extrabold  mb-2">Integrity</h4>
            <p className="leading-loose my-4">
              Royalty Carpet & Tile Cleaning takes great pride in our integrity,
              and since we are owner operated the buck stops with us. This
              personal responsibility ensures our clients the highest technical
              expertise and the best customer service. At every job, there is an
              owner present, but we also encourage open communication through a
              variety of means, whether it is through call, text, email, or
              social media. We love our job, because honestly, our clients are
              happy to see us when we arrive, and happy when we finish. It is
              such a good feeling to be a part of someone's life and make it
              just a little bit better. In our industry many chemicals can be
              used that are not always healthy for the environment or the
              person, and we have made it an integral part of our company that
              we use environmentally friendly products. We are always happy to
              provide the safety detail sheets if someone has a particular
              sensitivity, but we also offer products that have no scent and are
              hypo-allergenic. This transparency allows our clients to trust in
              the process. It is our job to make everyone’s environment as
              healthy as possible.
            </p>
          </div>
          <div className="mt-8">
            <h4 className="text-2xl font-extrabold  mb-2">Teamwork</h4>
            <p className="leading-loose my-4">
              {" "}
              Craig and I are a pretty awesome team. We are complete opposites,
              constantly striving for excellence in our business, so that means
              that we have all the bases covered! We have received countless
              commendations about our teamwork and have even been asked for
              marriage advice occasionally! We are proactive in building this
              teamwork by focusing on our strengths, and while each of us can
              run each part of the business, Craig’s attention to detail puts
              him as lead most of the time in the field, with me running support
              and customer service. In the office, I am the office manager,
              while Craig is the shop manager. We wear a lot of hats, but we
              enjoy our work, and it is never dull!
            </p>
          </div>
          <div className="mt-8">
            <h4 className="text-2xl font-extrabold  mb-2">Trust</h4>
            <p className="leading-loose my-4">
              {" "}
              In order to be trustworthy we demonstrate our commitment to our
              local business. We do this by guaranteeing our work which is
              provided by our experience and knowledge. We use the Better
              Business Bureau, online reviews, and social media to allow our
              clients to share how they feel about us and our work. It can be
              difficult to invite someone into your home without having met them
              before and so we appreciate the online review and referral system
              that is provided in the online community to all our prospective
              clients. Trust has grown our business from day one and this is a
              major pillar of Royalty Carpet & Tile Cleaning.
            </p>
            <div className="md:flex md:justify-center">
              <Image
                src={FireStation}
                alt="Company Work Truck in front of Round Rock Central Fire Station after cleaning"
                sizes="100vw"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-2xl font-extrabold mb-2">Respect</h4>
            <p className="leading-loose my-4">
              At Royalty Carpet & Tile Cleaning we believe you must earn the
              respect of your clients, your peers, and your vendors. We believe
              that EVERY interaction deserves respect and therefore we are
              constantly striving to improve our processes and customer service.
              We maintain open communication within all of our relationships,
              and we freely give our knowledge whether someone has a question
              about a DIY option or if we are mentoring a new carpet cleaning
              business.
            </p>
            <div className="md:flex md:justify-center">
              <Image
                src={Door}
                alt="On the job at Round Rock Central Fire Station"
                sizes="100vw"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-2xl font-extrabold mb-2">
              Community Involvement
            </h4>
            <p className="leading-loose my-4">
              Royalty Carpet & Tile Cleaning supports our community in a few
              different ways that are near and dear to our hearts. We always
              offer our military members and nonprofits 20% off as a thank you
              for their service. Every year we also participate in the Shubee
              fundraiser for Breast Cancer, which allows us and our customers to
              get involved.
            </p>
            <div className="md:flex md:justify-center">
              <Image
                src={Fundraiser}
                alt="Rockin’ City Roller Derby fundraiser"
                sizes="100vw"
                placeholder="blur"
              />
              <Image
                src={Rink}
                alt="Royalty Carpet and Tile proud sponsers of Rockin’ City Roller Derby"
                sizes="100vw"
                placeholder="blur"
              />
            </div>
            <p className="leading-loose my-4">
              Kelly has been involved in non-profit work for over 15 years and
              serves on the board of{" "}
              <a
                href="https://rockincityrollergirls.org/"
                className="text-blue-600"
              >
                Rockin’ City Roller Derby
              </a>{" "}
              team in Round Rock, TX. There are many community sponsored events
              in which we are involved in conjunction with Rockin’ City Roller
              Derby. To name just a few, Royalty Carpet & Tile Cleaning has been
              involved in a Food Drive for the Round Rock Serving Area, a skate
              a thon for the junior roller derby team, and donations for
              cleaning services as raffle prizes to donate to the Rock Sports
              Arena.
            </p>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
