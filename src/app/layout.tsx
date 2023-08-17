import { Metadata } from "next";
import config from "@/utils/config";
import "lazysizes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/index.css";
import PlausibleProvider from "next-plausible";
import { Lato, Raleway, Noto_Sans_JP, Open_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const lato = Lato({
  weight: ["400", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  weight: ["700"],
  display: "swap",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Royalty Carpet and Tile Cleaning",
  description: "Carpet cleaning service in Round Rock, Texas",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2007 Montclair Dr",
    addressLocality: "Round Rock",
    addressRegion: "TX",
    postalCode: "78664",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.484976",
    longitude: "-97.6802681",
  },
  url: "https://www.royaltycarpetcleaning.net",
  telephone: "+5129831812",
  priceRange: "$$$",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://royaltycarpetcleaning.net/"),
  title:
    "Royalty Carpet & Tile Cleaning. Serving all of Austin, Round Rock, Pflugerville, Hutto, Cedar Park, Georgetown, Leander and between!",
  description:
    "Royalty Carpet & Tile Cleaning all of Austin, Round Rock, Pflugerville, Hutto, Cedar Park, Georgetown and Leander",
  openGraph: {
    images: [config.images.default],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={
        lato.className +
        " " +
        raleway.className +
        " " +
        notoSansJP.className +
        " " +
        openSans.className
      }
    >
      <PlausibleProvider domain="royaltycarpetcleaning.net">
        <body>{children}</body>
      </PlausibleProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '466267611395999'); 
        fbq('track', 'PageView');
        `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          src="https://www.facebook.com/tr?id=466267611395999&ev=PageView
        &noscript=1"
        />
      </noscript>
      <script
        id="housecall-pro-chat-bubble"
        src="https://chat.housecallpro.com/proChat.js"
        type="text/javascript"
        data-color="#a0aec0"
        data-organization="b0c4c76e-5c25-41d4-b35f-1584f801d811"
        defer
      ></script>
    </html>
  );
}
