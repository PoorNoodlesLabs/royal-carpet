import Image, { StaticImageData } from "next/image";

export default function Example({ image }: { image: StaticImageData }) {
  return (
    <div className="relative bg-gray-100">
      <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/2 flex flex-col justify-center">
        <Image
          className="w-full rounded-lg px-2"
          alt="Royalty Carpet and Tile Owners Craig and Kelly"
          src={image}
          sizes="100vw"
          placeholder="blur"
        />
      </div>
      <div className="relative mx-auto max-w-7xl pt-10 pb-4 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:pl-16 md:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-black">
            Highly rated
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
            We’re here to help
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8"></div>
        </div>
      </div>
    </div>
  );
}
