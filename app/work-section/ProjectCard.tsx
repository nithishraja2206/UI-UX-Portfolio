import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      style={
        {
          backgroundColor: "#212531",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        } as React.CSSProperties
      }
      className={`relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
      initial="initial"
      animate="animate"
    >
      <Image
        src={image}
        alt={name}
        className={`absolute -bottom-2 h-[40%] w-[100%] sm:w-[85%] md:h-auto md:w-[60%] lg:h-[70%] lg:max-w-[50%] xl:h-auto ${
          id % 2 === 0 ? "right-5 md:right-0" : " left-5 md:left-0"
        }`}
      />
      <div
        className={`absolute top-0 text-[#0E1016] ${
          id % 2 === 0
            ? "right-0 mr-8 md:right-auto md:left-0 md:mr-0 md:ml-8 lg:ml-14"
            : "right-0 mr-8 lg:mr-14"
        } mt-6 flex items-center justify-center gap-4 lg:mt-10`}
      >
        {available ? (
          <>
            <Link
              href={github}
              target="_blank"
              className="rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faFigma}
                className=" w-[20px] rounded-full bg-white p-2 text-[20px] md:w-[25px] md:text-[24px] lg:h-[25px] lg:w-[25px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <Link href={demo} target="_blank" aria-label="Open Live Demo">
              <FontAwesomeIcon
                icon={faLink}
                className=" w-[20px] rounded-full bg-white p-2 text-[20px] md:w-[25px] md:text-[24px] lg:h-[25px] lg:w-[25px]  lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="trues"
              />
            </Link>
          </>
        ) : (
          <div className=" flex items-center justify-center gap-4">
            <Link
              href={github}
              target="_blank"
              className="mt-1 rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faFigma}
                className=" w-[15px] rounded-full bg-white p-2 text-[20px] md:w-[25px] md:text-[24px] lg:h-[25px] lg:w-[25px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <div className=" rounded-md bg-white px-2 py-1 md:px-2 md:py-1 lg:px-2 lg:py-1">
              <h3 className="text-[12px] md:text-[12px] lg:text-[14px] ">
                Coming soon
              </h3>
            </div>
          </div>
        )}
      </div>
      <div
        // className={`absolute text-white  ${
        //   !(id % 2 === 0)
        //     ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-36  lg:mr-16"
        //     : "left-10 top-32 ml-0 md:mr-12 lg:top-36 lg:ml-4"
        // } mb-10  md:mb-16 lg:mb-14`}
        className={`absolute text-white  ${
          !(id % 2 === 0)
            ? "top-32 mx-5 text-center md:right-0 md:mr-0 md:ml-0 md:text-left lg:right-0 lg:top-36 lg:mr-8"
            : "top-32 mx-5 text-center md:left-10 md:mr-12 md:text-left lg:top-36 lg:ml-4"
        }  mb-10 md:mb-16  lg:mb-14 lg:max-w-[46%]`}
      >
        <AnimatedTitle
          text={name}
          className={
            "text-[40px] leading-none text-white md:max-w-[90%] md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={description}
          className={
            "mt-4 w-[100%] max-w-[457px] text-[16px] font-semibold text-[#95979D]"
          }
        />
        <div className="mt-24 hidden flex-col md:flex md:flex-row md:gap-4 ">
          {technologies.map((tech, id) => (
            <AnimatedTitle
              text={tech}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              key={id}
              className={
                "text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px] "
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
