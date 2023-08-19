import DefaultLayout from "@/components/layouts/Default";
import ContactForm from "@/components/ContactForm";
import { GoogleMapImage } from "@/components/GoogleMap";
import Image from "next/image";
import Owners from "@/images/owners.jpeg";
import Example from "@/components/ContactHero";

export default function () {
  return (
    <DefaultLayout>
      <Example image={Owners} />
      <div className="container mx-auto md:flex md:items-center md:justify-between md:p-6">
        <div className="p-4 md:w-1/2">
          <ContactForm />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center px-4 flex-grow">
          <div className="max-w-full w-full">
            <h2 className="py-4">Austin</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13768.16099108686!2d-97.729669!3d30.378215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cbb43bb50285%3A0x90148d0979f9cb45!2sRoyalty%20Carpet%20%26%20Tile%20Cleaning!5e0!3m2!1sen!2sus!4v1692396618523!5m2!1sen!2sus" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
              }}
            ></div>
          </div>
          <div className="max-w-full w-full">
            <h2 className="py-4">Round Rock</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.053321817659!2d-97.6730061!3d30.4912414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091439d40ad07dd%3A0xe3f39b2808a2d74a!2sRoyalty%20Carpet%20%26%20Tile%20Cleaning!5e0!3m2!1sen!2sus!4v1692394694479!5m2!1sen!2sus" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `,
              }}
            ></div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
