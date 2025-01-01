import React from "react";
import "./Blog.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../../assets/workshop-1.png";
import Image2 from "../../assets/workshop-2.png";

const Blog = () => {
  const images = [Image1, Image2];
  const data = [
    {
      title: "CanFig: A Hands-on Workshop on Figma and Canva",
      content:
        "This workshop provided an interactive experience for students to explore the powerful design tools, Figma and Canva. Participants gained practical skills to create impactful graphics, prototypes, and designs, fostering creativity and visual storytelling in a collaborative environment.",
    },
    {
      title: "Design Thinking: Visual Representation of Concepts and Ideas",
      content:
        "This workshop focused on the core principles of design thinking, guiding students through the stages of empathizing, ideating, defining, and designing. Participants learned to transform abstract concepts into structured and visually engaging ideas, fostering creativity, innovation, and effective communication.",
    },
  ];
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Workshops Conducted</h2>

      {/* <div className="blog__container grid"> */}
      {/* <div className="blog__card"> */}
      {/* <div className="blog__thumb"> */}

      {/* </div> */}
      {/* <div className="blog__details">
            <h3 className="blog__title">Example Blog</h3>
            <div className="blog__meta">
              <span>09 February, 2022</span>
              <span className="blog__dot">.</span>
              <span>Greg</span>
            </div>
          </div> */}
      {/* </div> */}
      {/* </div> */}

      <Swiper
        className="blog-testimonial__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ title, content }, index) => {
          return (
            <SwiperSlide className="blog-testimonial__item" key={index}>
              <div className="blog__container">
                <img src={images[index]} alt="" className="blog__img" />
              </div>
              <div className="blog-comment">
                <h3 className="blog-comment-title">{title}</h3>
                <div>{content}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Blog;
