import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useSelector } from "react-redux";
import icon1 from "../../assets/images/icon-1.png";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/icon-3.png";
import icon4 from "../../assets/images/icon-4.png";
import icon5 from "../../assets/images/icon-5.png";
import icon6 from "../../assets/images/icon-6.png";
import icon7 from "../../assets/images/icon-7.png";
import icon8 from "../../assets/images/icon-8.png";
import icon9 from "../../assets/images/icon-9.jpg";
import icon10 from "../../assets/images/icon-10.png";

import "./About.css";

const About = () => {
  const about = useSelector((state) => state.pages.about);

  return (
    <article className={about ? "about  active" : "about"}>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a self-taught dev who about a year ago was curious and intrigued
          about how simple lines of code could make apps and web pages, and got
          tired of using a pc 24/7 and not knowing a thing about how a web page
          or an app function.
        </p>

        <p>
          Through the year I was learning the basics I fell in love with coding
          and found it as fun and sometimes as enraging as playing games, and
          decided if I want to spend the rest of my life doing something that I
          can call my job proudly, it would be coding.
        </p>
      </section>

      {/* ///////////////////////// */}

      <section className="service">
        <h3 className="h3 service-title">What can i do</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box"></div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                I can design static responsive web pages in React using CSS,
                Material-Ui or Tailwind.Css.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box"></div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">CRUD Applications</h4>

              <p className="service-item-text">
                in addition to the previous, I can design dynamic CRUD
                applications using React Redux.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box"></div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                API related Applications
              </h4>

              <p className="service-item-text">
                in addition to the previous, Using a remote API, I can get the
                data and lay it out in a responsive manner according to the
                data's nature
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* ///////////////////////// */}

      <section className="skills">
        <h3 className="h3 skills-title">skills</h3>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              width: 500,
              slidesPerView: 1,
            },

            768: {
              width: 768,
              slidesPerView: 2,
            },
            991: {
              width: 991,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 4,
            },
          }}
          className="skills-list has-scrollbar ul"
        >
          <SwiperSlide className="skills-item li">
            <img src={icon1} alt="Html" title="HTML" />
          </SwiperSlide>

          <SwiperSlide className="skills-item li">
            <img src={icon2} alt="CSS" title="CSS" />
          </SwiperSlide>

          <SwiperSlide className="skills-item li">
            <img src={icon3} alt="JS" title="JavaScript" />
          </SwiperSlide>

          <SwiperSlide className="skills-item li">
            <img src={icon4} alt="React" title="React" />
          </SwiperSlide>

          <SwiperSlide className="skills-item li">
            <img src={icon5} alt="Redux" title="Redux" />
          </SwiperSlide>

          <SwiperSlide className="skills-item li">
            <img src={icon10} alt="Next" title="Next" />
          </SwiperSlide>

          <SwiperSlide className="skills-item li">
            <img src={icon6} alt="Git" title="Git" />
          </SwiperSlide>

          <SwiperSlide className="skills-item li">
            <img src={icon7} alt="Material-Ui" title="Material-Ui" />
          </SwiperSlide>

          <SwiperSlide className="skills-item li">
            <img src={icon8} alt="Tailwind.Css" title="Tailwind.Css" />
          </SwiperSlide>

          <SwiperSlide className="skills-item li">
            <img src={icon9} alt="RapidApi" title="RapidApi" />
          </SwiperSlide>
        </Swiper>
      </section>
    </article>
  );
};

export default About;
