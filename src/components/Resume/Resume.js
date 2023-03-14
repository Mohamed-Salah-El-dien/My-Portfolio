import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/fontawesome-free-solid";
import { faFolderOpen } from "@fortawesome/fontawesome-free-regular";
import { useSelector } from "react-redux";

import "./Resume.css";

const Resume = () => {
  const resume = useSelector((state) => state.pages.resume);

  const Section = ({ title, tools, description }) => {
    return (
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{title}</h4>

        <span>{tools}</span>

        <p className="timeline-text">{description}</p>
      </li>
    );
  };

  return (
    <article className={resume ? "resume active" : "resume"}>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBookOpen} className="icon" />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Faculity of Science Tanta University
            </h4>

            <span>2015 — 2019</span>

            <p className="timeline-text">Geophysics Department</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FontAwesomeIcon icon={faFolderOpen} className="icon" />
          </div>

          <h3 className="h3">Projects</h3>
        </div>

        <ol className="timeline-list">
          <Section
            title="All-in-One v1.0 (MERN)"
            tools=" React — MongoDb — Node — Express — Redux — MultiPage — Responsive
            "
            description="Authenticated MERN Full Stack App in which the user
            can post products and delete/edit his/her products 
            and comment on the products and visit other user's profile to see
            their products and exchange messages with other users."
          />

          <Section
            title="Youtube-Clone Application"
            tools="React — Dynamic — Redux — Rapid-API — Material-Ui — MultiPage —
            Responsive — dark/light"
            description="Youtube clone powered by RapidAPI in which the user can search for
            any video or category and watch videos or open a channel to see
            more videos from the content creator."
          />

          <Section
            title="Google-Clone Application"
            tools="React — Dynamic — Redux — Rapid-API — TailwindCss — MultiPage —
            Responsive — dark/light"
            description="Using Rapid API this application provides news, images, videos,
            and search results related to the search term provided by the
            user."
          />

          <Section
            title="Social Media Application (MERN)"
            tools=" React — MongoDb — Node — Express — Redux — MultiPage — Responsive
            — Dark/Light — Material-Ui"
            description=" Authenticated MERN Full Stack Social Media App in which the user
            can create posts and delete his/her posts and like the posts and
            add other users as friends and visit other user's profile to see
            their posts."
          />

          <Section
            title="Story Application (MERN)"
            tools=" React — MongoDb — Node — Express — Redux — MultiPage — Responsive"
            description="A story application which require the user to be authenticated to
            be able to write, edit and delete stories, and every user have
            access to only his/her stories."
          />

          <Section
            title="Real Estate Application (Next)"
            tools=" Next.js — Dynamic — Redux — Rapid-API — TailwindCss — MultiPage —
            Responsive"
            description="Real Estate application where the user can search for properties
            for sale or rent with the ability to search for locations and the
            ability to apply some search filters."
          />

          <Section
            title="Weather Application"
            tools="React — Dynamic — Redux — Rapid-API — Css"
            description="Weather app that provides weather data based on the user's
            geolocation with the ability to search for any city."
          />

          <Section
            title="Exercises Application"
            tools="React — Dynamic — Redux — Rapid-API — Material-Ui — MultiPage —
            Responsive"
            description="Exercise app in which the user can either search for an exercise
            or pick from different categories which part of the body the user
            needs exercises for, or pick from different sets of exercises,
            then the application would provide illustrations and youtube
            videos for either the search term provided or the chosen category."
          />

          <Section
            title="Cryptocurrency Application"
            tools="React — Dynamic — Redux — Rapid-API — Material-Ui-Components —
            MultiPage — Responsive"
            description="A Crypto application in which the user can get the global stats of
            all cryptocurrencies with the ability to search for a single
            cryptocurrency and acquire all the detailed information about it,
            there is also a news section where the user can read the news
            about all cryptocurrencies or just search for a single
            cryptocurrency news."
          />

          <Section
            title="Blog Application"
            tools="React — Dynamic — Redux — API — MultiPage — Responsive — Css"
            description="A social-media-themed app where the data are fetched from a remote
            API and laid out with a post-themed format, the user can add,
            delete and edit any post. each post has in addition to the data
            fetched a (time ago ) function that shows when the post was added
            or edited, and each post also has reaction buttons."
          />

          <Section
            title="Todo Application"
            tools="React — Dynamic — Redux — Single Page — Responsive"
            description="A Simple todo app where the user can enter one or multiple todos
            in the input and the todos will be destructured into a single todo
            in the todo list. of course, the user has the ability to delete
            any todo and it will be saved in a list from which the user can
            restore it to the todo list."
          />

          <Section
            title="Contact Application"
            tools="React — Dynamic — Redux — MultiPage — Responsive"
            description="A Simple contact app where the user can enter a name, email, and
            phone number on the add contact page, a contact card would be
            created on the home page with the previous data and the user can
            delete the card or edit its content in the edit page."
          />

          <Section
            title="Shopping Cart Application"
            tools="React — Dynamic — Redux — Single Page — Responsive"
            description="A shopping cart app where the user can add items to the cart, the
            total number of items is shown next to the cart logo, clicking the
            cart logo would open the cart where the items selected are shown,
            and the user has the ability to increase or decrease the quantity
            of the items from the cart menu, and below the items, there is the
            order button which shows the total price of the transaction."
          />

          <Section
            title="Youtube Home-Page Clone"
            tools="React — Static — Pop-up News Letter and Ads — Dropdown Menus —
            Single Page — Responsive"
            description="A simple responsive Youtube Home Page clone built in react"
          />

          <Section
            title="E-commerce Landing Page"
            tools="React — Static — Single Page — Responsive"
            description="E-commerce single-page website with pop-up ads, dropdown menus,
            and a different mobile look."
          />

          <Section
            title="A Travel Agency website"
            tools="React — Static — Video Player — Single Page — Responsive"
            description="A simple CSS-focused single-page travel-themed website contains a
            slider-like format through which different videos can be played in
            the background."
          />

          <Section
            title="School website"
            tools="React — Static — SwiperJs — MultiPage — Responsive"
            description="Simple CSS-focused multipage school-themed website."
          />

          <Section
            title="Two Restaurants websites"
            tools="React — Static — SwiperJs — LightGalleryJs — Single Page —
            Responsive"
            description="Two simple Restaurant-themed websites focused on CSS, contain
            swiper js, light gallery js, and animations."
          />
        </ol>
      </section>
    </article>
  );
};

export default Resume;
