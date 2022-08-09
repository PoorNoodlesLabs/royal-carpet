import { DefaultSeo } from "next-seo";
import "lazysizes";
// import "@brainhubeu/react-carousel/lib/style.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={`mx-auto`}>
      <DefaultSeo />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
