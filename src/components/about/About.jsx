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
              A <strong>Digital Experience Designer</strong> with 5+ years of expertise crafting <strong>intuitive, scalable, and visually engaging digital solutions</strong> 
              across web, mobile, and interactive platforms. I specialize in <strong>interaction design, prototyping, and usability research</strong>, 
              ensuring every product is seamless, accessible, and deeply engaging. My approach integrates <strong>human-centered design principles</strong> with behavioral 
              insights, allowing me to create experiences that are both visually compelling and highly functional.
              <br></br>
              <br></br>
              With a strong foundation in <strong>data-informed design</strong>, I optimize user experiences through <strong>A/B testing, behavioral analytics, and personalization</strong>. 
              I thrive in <strong>cross-functional collaboration</strong>, aligning business goals with user needs while leveraging <strong>design systems, motion design, 
              and visual storytelling</strong> to craft impactful digital experiences.
              <br />
              <br />
              Here are a few tools, methodologies, and technologies I’ve been working with recently: 
            </p>

            <ul className="about__list">
              <li><b>Design & Prototyping: </b> Figma, Adobe XD, Sketch, InVision, Principle</li>
              <li><b>Visual & Motion Design </b>Illustrator, Photoshop, After Effects, Lottie, Framer Motion</li>
              <li><b>Web Technologies: </b>HTML, CSS, JavaScript (ES6+), ReactJS</li>
              <li><b>Research Methods: </b>A/B Testing, Heuristic Evaluations, Heatmaps, Usability Testing, Behavioral Analysis, CRO</li>
              <li><b>Data & Analytics: </b>Tableau, Python, Google Analytics, Hotjar, Data Visualization</li>
              <li><b>Collaboration & Workflow: </b>Agile, JIRA, Miro, FigJam, Confluence</li>
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
