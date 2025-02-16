import Cert1 from "../../public/certifications/Cert-Foundation.jpeg";
import Cert2 from "../../public/certifications/Cert-Start.jpeg";
import Cert3 from "../../public/certifications/Cert-Wireframe.jpeg";

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
    title: "Foundations of User Experience (UX) Design",
    image: Cert1,
    date: "Google | 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/BX1W5C6WO731?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    available: true,
  },
  {
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    image: Cert2,
    date: "Google | 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/2W9SU8EBWPNI?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    available: true,
  },
  {
    title: "Build Wireframes and Low-Fidelity Prototypes",
    image: Cert3,
    date: "Google | 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/6U60JJDOIEDG?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    available: true,
  },
];
