import { NextSeo } from "next-seo";
import config from "@/utils/config";

export default function ({
  title,
  description,
  url,
  image,
}: {
  title: string;
  description: string;
  url?: string;
  image?: string;
}) {
  return (
    <NextSeo
      title={title}
      description={description || "Royalty Carpet Cleaning, Round Rock TX"}
      openGraph={{
        title: title || "Royalty Carpet Cleaning, Round Rock TX",
        url: url ? `${config.liveUrl}/${url}` : config.liveUrl,
        images: [
          image
            ? require(`../assets/images/${image}`)
            : require(`../assets/images/logo.png`),
        ],
      }}
    />
  );
}
