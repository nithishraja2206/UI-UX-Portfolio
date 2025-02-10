import { useEffect } from "react";
import dynamic from "next/dynamic";
import useBlobity from "blobity/lib/react/useBlobity";

import Hero from "./hero-section/Hero";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./navbar/NavBar";
import PreLoader from "./animations/PreLoader/PreLoader";
import Reviews from "./reviews-section/ReviewGrid";
import Footer from "./footer/Footer";
import Contact from "./contact-section/Contact";

const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <PreLoader />
      <NavBar />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Work />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
