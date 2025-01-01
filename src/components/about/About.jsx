import React from "react";
import "./About.css";
import Image from "../../assets/about_me_portfolio.png";
import Resume from "../../assets/resume.pdf";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              A passionate Digital Designer with over 5 years of experience
              crafting user-centric, intuitive, and visually engaging digital solutions
              across web, mobile, and other platforms. Proficient in
              creating scalable design systems, interactive prototypes, and
              accessible solutions that balance aesthetics with functionality.
              <br></br>
              <br></br>
              Currently focused on delivering seamless digital experiences by
              collaborating with cross-functional teams, aligning designs with
              business goals, and enhancing usability through data-driven
              insights and experience design methodologies. Expertise includes wireframing, prototyping, usability testing, and designing user journeys to create intuitive workflows that deliver exceptional and engaging user experiences.
              <br />
              <br />
              Here are a few tools, methodologies, and technologies I’ve been
              working with recently:
            </p>

            <ul className="about__list">
              <li><b>Design Tools: </b>Figma, Adobe XD, Sketch, Axure RP, InVision</li>
              <li><b>Graphic Design Software: </b>Adobe Photoshop, Illustrator</li>
              <li><b>Web Technologies: </b>HTML, CSS, JavaScript (ES6+)</li>
              <li><b>Research Methods: </b>Usability Testing, Behavioral Analysis</li>
              <li><b>Data & Analytics: </b>Tableau, Python</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload Resume
            </button>
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
