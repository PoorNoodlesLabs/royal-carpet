import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://royaltycarpetcleaning.net/"),
  title: "Royalty Carpet & Tile - FAQs",
  description: `Frequently asked questions. Here are some tips and answers to some common questions`,
};

export default function ({ children }: { children: React.ReactNode }) {
  return children;
}
