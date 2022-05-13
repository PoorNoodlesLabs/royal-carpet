import Document, { Html, Head, Main, NextScript } from "next/document";
import { LocalBusinessJsonLd } from "next-seo";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="6tVPbhp6IAbBtNadppaPNfdPF1awnw-3kzWUPlhFibI"
          />
          <LocalBusinessJsonLd
            type="service"
            id="https://www.royaltycarpetcleaning.net/"
            name="Royalty Carpet and Tile Cleaning"
            description="Carpet cleaning service in Round Rock, Texas"
            address={{
              streetAddress: "2007 Montclair Dr",
              addressLocality: "Round Rock",
              addressRegion: "TX",
              postalCode: "78664",
              addressCountry: "US",
            }}
            geo={{
              latitude: "30.484976",
              longitude: "-97.6802681",
            }}
            url="https://www.royaltycarpetcleaning.net"
            telephone="+5129831812"
            priceRange="$$$"
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
