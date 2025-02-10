export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "EventDesk",
    description:
      "A full-featured event management SaaS platform enabling seamless collaboration among organizers, hosts, vendors, and attendees for efficient planning and execution.",
    technologies: ["Product Design", "Design Systems"],
    github: "https://www.figma.com/proto/JajUJcuV1zxXwybzMNBsh9/Eventdesk_Design?node-id=1213-352&t=yEaXgV064bbM5FdM-1&scaling=scale-down-width&content-scaling=fixed&page-id=750%3A1487",
    demo: "https://eventdesk.io/",
    image: require(".//../../public/projects/Eventdesk.png"),
    available: true,
  },
  {
    id: 1,
    name: "Michigan Tech",
    description:
      "Redesigned university websites and departmental microsites to enhance search visibility, improve usability, and boost user engagement.",
    technologies: ["User Research", "Prototyping"],
    github: "https://www.mtu.edu/alumni/",
    demo: "https://www.mtu.edu/alumni/",
    image: require(".//../../public/projects/MichiganTech.png"),
    available: true,
  },
  {
    id: 2,
    name: "HuskyBot App",
    description:
      "Designed an intuitive user interface for SPOT’s navigation system, enabling seamless gesture and voice-based interaction. Focused on usability, real-time feedback, and efficient human-robot collaboration.",
    technologies: ["Interaction Design", "Human-Robot UX"],
    github: "https://www.figma.com/design/niQWcKzSMmchYnq4OxDDsO/HuskyBot_Design?node-id=1-1180&t=WRoVrV8ktaWYtJ00-1",
    demo: "https://www.figma.com/design/niQWcKzSMmchYnq4OxDDsO/HuskyBot_Design?node-id=1-1180&t=WRoVrV8ktaWYtJ00-1",
    image: require(".//../../public/projects/HuskyBot.png"),
    available: false,
  },
  {
    id: 3,
    name: "MadrasDa",
    description:
      "Designed a full-scale e-commerce platform for branded merchandise, designed to ensure seamless navigation, responsive layouts, and enhanced user engagement.",
    technologies: ["Experience Design", "E-Commerce UX"],
    github: "https://www.figma.com/proto/0gC8wcT1Ss1JYjJ1MnWCIE/Madrasda-Design?node-id=2-2298&t=zJg9WTm5uE2kvqHN-1",
    demo: "https://madrasda.com/",
    image: require(".//../../public/projects/MadrasDa.png"),
    available: true,
  },
  {
    id: 4,
    name: "Photoier",
    description:
      "Designed an AI-driven facial recognition app that automates photo organization and sharing, making it effortless to tag, manage, and share memories seamlessly.",
    technologies: ["Product Design", "AI Interaction"],
    github: "https://www.figma.com/proto/ZkPlbafeVyW1Id4YIa2ZIi/photoier-app?node-id=8-20&t=PegAB3J0SFKafWqq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A20",
    demo: "https://www.figma.com/proto/ZkPlbafeVyW1Id4YIa2ZIi/photoier-app?node-id=8-20&t=PegAB3J0SFKafWqq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A20",
    image: require(".//../../public/projects/Photoier.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
