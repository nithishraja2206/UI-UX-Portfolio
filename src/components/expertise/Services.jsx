import React, { useRef, useState } from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";
import Image4 from "../../assets/service-4.svg";
import Image5 from "../../assets/service-5.svg";
import Image6 from "../../assets/service-6.svg";
import Image7 from "../../assets/service-7.svg";
import Image8 from "../../assets/service-8.svg";
import Image9 from "../../assets/service-9.svg";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Graphic Design",
    description:
      "Crafting visually compelling designs for branding, marketing, and promotional materials that tell impactful stories.",
  },
  {
    id: 2,
    image: Image2,
    title: "User-Centered UI/UX Design",
    description:
      "Designing intuitive and user-friendly interfaces for websites, mobile apps, and digital platforms with a focus on usability and accessibility.",
  },
  {
    id: 3,
    image: Image3,
    title: "Framework & Interaction Design",
    description:
      "Developing scalable design systems and interactive components to ensure consistent user experiences across platforms",
  },
  {
    id: 4,
    image: Image4,
    title: "Prototyping & Product Design",
    description:
      "Creating high-fidelity prototypes and product designs that bridge user needs with technical feasibility",
  },
  {
    id: 5,
    image: Image5,
    title: "Website & App Design",
    description:
      "Designing and building responsive websites and mobile apps, balancing visual appeal and functionality.",
  },
  {
    id: 6,
    image: Image6,
    title: "Creative Design with Adobe CC",
    description:
      "Leveraging Adobe Creative Cloud to produce graphics, illustrations, and multimedia content for diverse creative solutions",
  },
  {
    id: 7,
    image: Image7,
    title: "Motion Graphics & VFX",
    description:
      "Creating motion graphics and VFX to enhance digital storytelling with dynamic animations and visual effects.",
  },
  {
    id: 8,
    image: Image8,
    title: "Video Editing & Multimedia Production",
    description:
      "Producing professional-grade videos and multimedia content for storytelling and promotional purposes.",
  },
  {
    id: 9,
    image: Image9,
    title: "Collaboration and Cross-Functional Teamwork",
    description:
      "Collaborating seamlessly with teams to align designs with business goals and ensure project success.",
  },
];

const Services = () => {
  const servicesRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleScroll = (direction) => {
    const container = servicesRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -360 : 360;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  //   const isAtStart = () => {
  //     const container = servicesRef.current;
  //     return container && container.scrollLeft === 0;
  //   };

  //   const isAtEnd = () => {
  //     const container = servicesRef.current;
  //     return (
  //       container &&
  //       container.scrollLeft >= container.scrollWidth - container.clientWidth
  //     );
  //   };

  return (
    <section className="services services-container section" id="services">
      <h2 className="section__title service-margin">My Expertise</h2>

      <div
        className="services-arrow-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* {!isAtStart() && ( */}
        {isHovered ? (
          <IoIosArrowDropleftCircle
            className="service-arrow"
            onClick={() => handleScroll("left")}
          />
        ) : (
          <div className="service-arrow-placeholder"></div>
        )}
        {/* )} */}
        <div className="services__container" ref={servicesRef}>
          {data.map(({ id, image, title, description }) => (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" width="80" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          ))}
        </div>
        {/* {!isAtEnd() && ( */}

        {isHovered ? (
          <IoIosArrowDroprightCircle
            className="service-arrow"
            onClick={() => handleScroll("right")}
          />
        ) : (
          <div className="service-arrow-placeholder"></div>
        )}
        {/* )} */}
      </div>
    </section>
  );
};

export default Services;
