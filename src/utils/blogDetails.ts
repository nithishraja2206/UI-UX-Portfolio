import Cert1 from "../../public/certifications/Cert-Professional.jpeg";
import Cert2 from "../../public/certifications/Cert-High.jpeg";
import Cert3 from "../../public/certifications/Cert-Research.jpeg";

export type blogProps = {
  title: string;
  image: any;
  date: string;
  url: string;
  available: boolean;
  index: number;
};

export const blogDetails = [
  {
    title: "Google UX Design Professional",
    image: Cert1,
    date: "Google | 2025",
    url: "https://coursera.org/share/d439a995291e261c5a586e3738b5addb",
    available: true,
  },
  {
    title: "High-Fidelity Designs and Prototypes in Figma",
    image: Cert2,
    date: "Google | 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/ETE9RLJMODHP?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    available: true,
  },
  {
    title: "UX Research and Test Early Concepts",
    image: Cert3,
    date: "Google | 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/S4EHTJDUBWA3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    available: true,
  },
];
