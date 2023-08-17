import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Default({ children }) {
  return (
    <div className="flex flex-col md:mx-auto md:w-full min-h-screen">
      <Navbar />
      <main className="flex-col flex-grow w-full relative">{children}</main>
      <Footer />
    </div>
  );
}
