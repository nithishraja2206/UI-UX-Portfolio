import React from "react";
import "./Home.css";
import Me from "../../assets/home_portfolio.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" width="120" />
        <h1 className="home__name">Nithish Raja Karuppiah Loganathan</h1>
        <span className="home__education">Digital Design Specialist</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          {" "}
          Contact Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
