import DefaultLayout from "@/components/layouts/Default";
import ContactForm from "@/components/ContactForm";
import { GoogleMapImage } from "@/components/GoogleMap";
import Image from "next/image";
import Owners from "@/images/owners.jpg";

export default function () {
  return (
    <DefaultLayout>
      <div className="container mx-auto md:flex md:items-center md:justify-between md:p-6">
        <div className="w-full md:w-2/5">
          <Image
            alt="Royalty Carpet and Tile Owners Craig and Kelly"
            src={Owners}
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <div className="p-4 md:w-1/2">
          <ContactForm />
        </div>
      </div>
      <div className="flex justify-center">
        <GoogleMapImage />
      </div>
    </DefaultLayout>
  );
}
