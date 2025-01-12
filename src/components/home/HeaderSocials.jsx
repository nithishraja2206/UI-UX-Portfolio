import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/nithishraja2206"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

      <a
        href="https://www.linkedin.com/in/klnithishraja/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=klnithishraja@gmail.com"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaEnvelope />
      </a>

      {/* <a href='https://wwww.facebook.com/Greg.Sithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://www.twitter.com/GregSithole' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a> */}
    </div>
  );
};

export default HeaderSocials;
