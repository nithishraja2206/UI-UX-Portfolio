import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getBlobity, destroyBlobity } from "../src/utils/blobityInstance";

import Hero from "./hero-section/Hero";
import { initialBlobityOptions } from "../src/utils/BlobityConfig";
import NavBar from "./navbar/NavBar";
import PreLoader from "./animations/PreLoader/PreLoader";
import Reviews from "./reviews-section/ReviewGrid";
import Footer from "./footer/Footer";
import Contact from "./contact-section/Contact";
import Blog from "./blog-section/BlogGrid";

const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const blobity = getBlobity();
    // @ts-ignore
    window.blobity = blobity;

    return () => {
      destroyBlobity();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowPreloader(true);
      sessionStorage.setItem("hasVisited", "true");

      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 5500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showPreloader && <PreLoader />}
      <NavBar />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Work />
        <Blog />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
