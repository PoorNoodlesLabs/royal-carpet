import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import PlausibleProvider from "next-plausible";

class Default extends React.Component {
  render() {
    return (
      <PlausibleProvider domain="royaltycarpetcleaning.net">
        <div className="flex flex-col md:mx-auto md:w-full min-h-screen">
          <Navbar />
          <main className="flex-col flex-grow w-full relative">
            {this.props.children}
          </main>
          <Footer />
        </div>
      </PlausibleProvider>
    );
  }
}

export default Default;
