import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royalty Carpet & Tile - About Us",
  description: `Royalty Carpet & Tile Cleaning lives and breathes excellence. It
        has been a part of our mission statement since 1986.`,
};

export default function ({ children }: { children: React.ReactNode }) {
  return children;
}
