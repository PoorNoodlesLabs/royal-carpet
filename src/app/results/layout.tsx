import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://royaltycarpetcleaning.net/"),
  title: "Royalty Carpet & Tile - Get Results Today!",
  description: `Family owned and operated for over 32 years. Great service, great results. Round Rock, Pflugerville, Hutto, Cedar Park, Georgetown, Leander.`,
};

export default function ({ children }: { children: React.ReactNode }) {
  return children;
}
