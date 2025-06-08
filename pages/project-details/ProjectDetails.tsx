import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { detailedProjectInfo } from "../../src/utils/detailedProjInfo";
import { bodyAnimation } from "../../src/utils/animations";
import nlogo from "../../public/nlogo.png";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import { devProjects } from "../../src/utils/projectDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = () => {
  const router = useRouter();
  const [available, setAvailable] = useState<boolean>();
  const [github, setGithub] = useState<string>();
  const [demo, setDemo] = useState<string>();
  const { slug } = router.query;

  useEffect(() => {
    const projDetails = devProjects.find((p) => p.slug === slug);
    setAvailable(projDetails?.available);
    if (available) {
      setGithub(projDetails?.github);
    }
    setDemo(projDetails?.demo);
  }, [slug]);

  const project = detailedProjectInfo.find((p) => p.slug === slug);
  if (!project) return <div>Project not found</div>;
  return (
    <div className=" bg-[#0E1016] text-[#e4ded7] ">
      {/* navbar */}
      <div
        className={` sticky top-0 z-10 backdrop-blur-md transition-colors
        duration-300`}
      >
        <div className="flex w-full items-center justify-between px-36 py-3 ">
          <motion.div
            className="border-none px-2 pt-0 pb-2 text-[14px] font-semibold md:text-[16px]"
            variants={bodyAnimation}
          >
            <Link href={`/`}>
              <Image src={nlogo} priority alt="Logo" className="w-[35px]" />
            </Link>
          </motion.div>

          <div className="flex gap-6 text-[#e4ded7] sm:gap-12 md:gap-14">
            <Link
              href="https:www.linkedin.com/in/nithish-loganathankl/"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <motion.p
                className="text-[16px] font-bold"
                variants={bodyAnimation}
              >
                LinkedIn
              </motion.p>
            </Link>
            <Link
              href="mailto:klnithishraja@gmail.com"
              target="_blank"
              aria-label="View Mail Id"
            >
              <motion.p
                className="text-[16px] font-bold"
                variants={bodyAnimation}
              >
                Gmail
              </motion.p>
            </Link>
          </div>
        </div>
      </div>

      {/* landing image and title */}
      <div className="relative h-[90vh] w-full">
        <div className="absolute inset-0 bg-[url('.//../public/SenseBoard1.png')] bg-cover bg-center opacity-30 blur-sm filter"></div>
        <div className="relative px-32 py-24">
          <h4 className="mb-2">{project?.timeline}</h4>
          <div className="mb-20">
            {available ? (
              <>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full"
                  aria-label="Open GitHub Repository"
                >
                  <FontAwesomeIcon
                    icon={faFigma}
                    className="mr-4 h-[20px] w-[20px] rounded-full border border-white p-2 text-[20px] md:h-[20px] md:w-[20px] md:text-[24px] lg:h-[22px] lg:w-[22px] lg:text-[22px]"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </a>

                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Live Demo"
                >
                  <FontAwesomeIcon
                    icon={faLink}
                    className="h-[20px] w-[20px] rounded-full border border-white p-2 text-[20px] md:h-[20px] md:w-[20px] md:text-[24px] lg:h-[22px] lg:w-[22px]  lg:text-[22px]"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </a>
              </>
            ) : (
              <div className="flex items-center justify-center gap-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full"
                  aria-label="Open GitHub Repository"
                >
                  <FontAwesomeIcon
                    icon={faFigma}
                    className=" h-[30px] w-[30px] rounded-full bg-white p-2 text-[20px] md:h-[30px] md:w-[30px] md:text-[24px] lg:h-[35px] lg:w-[35px] lg:text-[22px]"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </a>

                <div className=" rounded-md bg-white px-2 py-1 md:px-2 md:py-1 lg:px-2 lg:py-1">
                  <h3 className="text-[12px] md:text-[12px] lg:text-[14px] ">
                    Coming soon
                  </h3>
                </div>
              </div>
            )}
          </div>
          <p className="mb-1 text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:mb-3 sm:text-[48px] md:mb-4 md:text-[54px] lg:text-[120px]">
            {project?.name[0]}
          </p>
          <p className="mb-3 text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:mb-10 sm:text-[30px]  md:mb-16 md:text-[54px] lg:text-[54px]">
            {project?.name[1]}
          </p>
          <h5>{project?.role}</h5>
        </div>
      </div>

      {/* context  */}
      <div className=" bg-[#1a1e28] px-8 py-24 text-center md:px-56">
        <h4 className="mb-10 font-normal">{project?.context[0]}</h4>
        <h4 className="mb-4 font-semibold">{project?.context[1]}</h4>
      </div>

      {/* problem  */}
      <div className=" px-36 py-16">
        <h2 className="mb-7"> Problem — What’s broken in current tools?</h2>
        <p className="text-[20px]">{project?.problem?.summary}</p>

        <div>
          <h3 className="my-6">Issues</h3>
          {project?.problem?.issues.map((item, index) => (
            <li key={index} className="text-[20px]">
              {item}
            </li>
          ))}
        </div>
        <div>
          <h3 className="my-6">Impact</h3>
          {project?.problem?.impacts.map((item, index) => (
            <li key={index} className="text-[20px]">
              {item}
            </li>
          ))}
        </div>
        <h3 className="mt-10">{project?.problem?.challenge}</h3>
      </div>

      {/* objectives  */}
      <div className="bg-[#1a1e28] py-16 px-36">
        <h2>Objectives — What I set out to build</h2>
        <div className="mt-3 flex flex-row items-center justify-between gap-8 sm:flex-col lg:flex-row">
          <div className="lg:w-[47%]">
            <p className="my-8 text-[20px]"> {project?.tldr}</p>
          </div>
          <div>
            {project?.objectives.map((item, index) => (
              <li key={index} className="my-5 text-[20px] ">
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>

      {/* research  */}
      <div className=" px-36 py-16">
        <h2 className="mb-7"> Research</h2>
        <p className="text-[20px]">{project?.research?.insight}</p>

        <div>
          <h3 className="my-6">Foundations</h3>
          {project?.research?.foundations.map((item, index) => (
            <li key={index} className="text-[20px]">
              {item}
            </li>
          ))}
        </div>
      </div>

      {/* design  */}
      <div className=" bg-[#1a1e28] px-36 py-16">
        <h2>Design — What I built and why</h2>
        <p className="my-8 text-[20px]"> {project?.design?.overview}</p>
        {project?.design?.details.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse items-center gap-12 py-8 sm:flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <Image
              className="w-full md:w-2/3"
              src={item.image}
              alt="SenseBoard"
              width={900}
              height={800}
            />
            <div className="w-full text-[#e4ded7] md:w-1/2">
              <h3 className="my-6">{item?.title}</h3>
              <p className=" text-lg leading-8">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* core features */}
      <div className="px-36 py-16">
        <h2>Core Features</h2>

        {project?.core_features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse items-center justify-between gap-12 py-8 sm:flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <Image
              className=" lg:w-1/2"
              src={item.image}
              alt="SenseBoard"
              width={400}
              height={300}
            />
            <div>
              <h3 className="my-6">{item?.title}</h3>
              {item?.items.map((item, index) => (
                <li key={index} className="text-[20px]">
                  {item}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* usablity testing */}
      <div className="bg-[#1a1e28] px-36 py-16">
        <h2 className="mb-7"> Usability Testing</h2>
        <p className="text-[20px]">{project?.testing?.scenario}</p>

        <div className="mt-3 flex items-center justify-between gap-8 sm:flex-col lg:flex-row">
          <div>
            <h3 className="my-6">Tasks</h3>
            {project?.testing?.tasks.map((item, index) => (
              <li key={index} className="list-none text-[20px]">
                Task {index + 1} : {item}
              </li>
            ))}
          </div>
          <div>
            <h3 className="my-6">Feedback</h3>
            {project?.testing?.feedback?.quotes.map((item, index) => (
              <li key={index} className="text-[20px]">
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>

      {/* reflection */}

      <div className=" px-36 py-16">
        <h2 className="mb-7"> Reflection — What I learned</h2>
        <p className="text-[20px]">{project?.reflection?.summary}</p>

        <div>
          <h3 className="my-6">Learnings</h3>
          {project?.reflection?.learnings.map((item, index) => (
            <li key={index} className="text-[20px]">
              {item}
            </li>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
