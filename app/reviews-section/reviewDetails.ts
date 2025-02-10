import { StaticImageData } from "next/image";
import vignesh from "../../public/vignesh.jpg";
import steve from "../../public/steve.jpg";
import aritra from "../../public/aritra.jpg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Raja Ramachandran",
    role: "Founder & CEO",
    company: "HeroCore LLC",
    profileImg: vignesh,
    testimonial:
      "Nithish has been the driving force behind our UX strategy, crafting scalable design systems and seamless interaction models that elevate our SaaS products. His expertise in user research, prototyping, and cross-functional collaboration has streamlined workflows and improved product efficiency. His work continues to set the bar for design excellence at HeroCore.",
  },
  {
    name: "Steve Mintz",
    role: "Communications Director",
    company: "Michigan Tech",
    profileImg: steve,
    testimonial:
      " There was never a project that Nithish was unwilling to take on. His contributions greatly enhanced the site’s design, functionality, and accessibility, making information more intuitive for users. He spearheaded key redesigns and implemented impactful updates that elevated the overall user experience—his work speaks for itself.",
  },
  {
    name: "Aritra Chakrabarty",
    role: "President",
    company: "ISA, Michigan Tech",
    profileImg: aritra,
    testimonial:
      "Nithish revamped how ISA connects with its community online, designing a website that is both inviting and easy to navigate. His keen eye for detail and thoughtful approach made the experience seamless, ensuring members could engage effortlessly. His work has left a lasting impact, shaping how ISA interacts with its members.",
  },
  // {
  //   name: "Umar Abdullahi",
  //   role: "Head of Engineering",
  //   company: "Mono",
  //   profileImg: umar,
  //   testimonial:
  //     "Victor is hardworking and has great sense of ownership. He was able to contribute in engineering excellent user interfaces and user experiences at Mono. I’m confident he will be a great asset to any engineering team.",
  // },
  // {
  //   name: "Olamide Sholanke",
  //   role: "Senior Frontend Engineer",
  //   company: "Mono",
  //   profileImg: olamide,
  //   testimonial:
  //     "I had the pleasure of working with Victor on a frontend development project at Mono, and I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  // },
  // {
  //   name: "Alan Franciskovic",
  //   role: "Sales Specialist",
  //   company: "Croatia Osiguranje d.d",
  //   profileImg: alan,
  //   testimonial:
  //     "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  // },
];
