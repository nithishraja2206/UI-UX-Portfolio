import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useBlobity from "blobity/lib/react/useBlobity";

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
  const blobityInstance = useBlobity(initialBlobityOptions);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      // Show preloader on first visit this session
      setShowPreloader(true);
      sessionStorage.setItem("hasVisited", "true");

      // Hide preloader after some time (e.g., 3 seconds)
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
