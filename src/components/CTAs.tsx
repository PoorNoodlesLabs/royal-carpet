import Link from "next/link";

export const CTAs = () => {
  return (
    <div className="flex justify-center">
      <Link
        href="https://housecallpro.com/book/Royalty-Carpet--Tile-Cleaning/331682fdd7e241ecb6a8ac97c3680572"
        target="_blank"
      >
        <button className="btn w-full mt-4">Book Online Now</button>
      </Link>
    </div>
  );
};
