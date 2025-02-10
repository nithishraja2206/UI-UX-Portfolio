import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I CRAFT IMPACTFUL DESIGNS, ELEVATING EXPERIENCES, PRODUCTS, AND BEYOND."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[39px] md:mb-16 md:text-[54px] lg:text-[74px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[16px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[18px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[22px] ">
            <AnimatedBody
              text={
                "With 5+ years of expertise, I specialize in creating intuitive, scalable, and visually engaging digital solutions across web, mobile, and interactive platforms. My focus on interaction design, prototyping, and usability research ensures seamless, accessible, and engaging products."
              }
            />
            <AnimatedBody
              text={
                "Blending human-centered design principles with behavioral insights, I create experiences that are both functional and visually compelling. I utilize data-informed design through A/B testing, behavioral analytics, and personalization to optimize user experiences. I thrive in cross-functional collaboration, aligning business goals with user needs while leveraging design systems, motion design, and visual storytelling to craft impactful digital experiences."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Sketch, Adobe XD, Illustrator, Photoshop, InDesign, InVision, Procreate, FigJam, After Effects, Animate."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design & Research"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "UI/UX Design, Wireframing, Prototyping, Interaction Design, Product Design, Motion Design, Scalable Design Systems, A/B Testing, User Research, Behavioral Analytics, Data-Driven UX, Accessibility (WCAG 2.1)."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Development"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody text={"HTML, CSS, JavaScript (ES6+), ReactJS."} />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text={
              "The roots of my craft,\nshaping every seamless experience I design :)"
            }
            className="absolute bottom-2 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
