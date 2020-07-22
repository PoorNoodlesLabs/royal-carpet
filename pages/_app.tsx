import 'lazysizes'
import '@brainhubeu/react-carousel/lib/style.css'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/index.css'

// TODO: Create hook to detect user color preferences and hook up to the dark boolean

export default function MyApp({ Component, pageProps }) {

  return (
    <div className={`mx-auto`}>
      <Component {...pageProps} />
    </div>
  )
}
