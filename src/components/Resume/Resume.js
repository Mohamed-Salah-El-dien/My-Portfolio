import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/fontawesome-free-solid";
import { faFolderOpen } from "@fortawesome/fontawesome-free-regular";
import { useSelector } from "react-redux";

import "./Resume.css";

const Resume = () => {
  const resume = useSelector((state) => state.pages.resume);

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
              Faculty of Science Tanta University
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
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Youtube-Clone Application
            </h4>

            <span>
              React — Dynamic — Redux — Rapid-API — Material-Ui — MultiPage —
              Responsive — dark/light
            </span>

            <p className="timeline-text">
              Youtube clone powered by RapidAPI in which the user can search for
              any video or category and watch videos or open a channel to see
              more videos from the content creator.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Google-Clone Application</h4>

            <span>
              React — Dynamic — Redux — Rapid-API — TailwindCss — MultiPage —
              Responsive — dark/light
            </span>

            <p className="timeline-text">
              Using Rapid API this application provides news, images, videos,
              and search results related to the search term provided by the
              user.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Weather Application</h4>

            <span>React — Dynamic — Redux — Rapid-API</span>

            <p className="timeline-text">
              Weather app that provides weather data based on the user's
              geolocation with the ability to search for any city.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Exercises Application</h4>

            <span>
              React — Dynamic — Redux — Rapid-API — Material-Ui — MultiPage —
              Responsive
            </span>

            <p className="timeline-text">
              Exercise app in which the user can either search for an exercise
              or pick from different categories which part of the body the user
              needs exercises for, or pick from different sets of exercises,
              then the application would provide illustrations and youtube
              videos for either the search term provided or the chosen category.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Cryptocurrency Application
            </h4>

            <span>
              React — Dynamic — Redux — Rapid-API — Material-Ui-Components —
              MultiPage — Responsive
            </span>

            <p className="timeline-text">
              A Crypto application in which the user can get the global stats of
              all cryptocurrencies with the ability to search for a single
              cryptocurrency and acquire all the detailed information about it,
              there is also a news section where the user can read the news
              about all cryptocurrencies or just search for a single
              cryptocurrency news.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Blog Application</h4>

            <span>React — Dynamic — Redux — API — MultiPage — Responsive</span>

            <p className="timeline-text">
              A social-media-themed app where the data are fetched from a remote
              API and laid out with a post-themed format, the user can add,
              delete and edit any post. each post has in addition to the data
              fetched a (time ago ) function that shows when the post was added
              or edited, and each post also has reaction buttons.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Todo Application</h4>

            <span>React — Dynamic — Redux — Single Page — Responsive</span>

            <p className="timeline-text">
              A Simple todo app where the user can enter one or multiple todos
              in the input and the todos will be destructured into a single todo
              in the todo list. of course, the user has the ability to delete
              any todo and it will be saved in a list from which the user can
              restore it to the todo list.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Contact Application</h4>

            <span>React — Dynamic — Redux — MultiPage — Responsive</span>

            <p className="timeline-text">
              A Simple contact app where the user can enter a name, email, and
              phone number on the add contact page, a contact card would be
              created on the home page with the previous data and the user can
              delete the card or edit its content in the edit page.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Shopping Cart Application
            </h4>

            <span>React — Dynamic — Redux — Single Page — Responsive</span>

            <p className="timeline-text">
              A shopping cart app where the user can add items to the cart, the
              total number of items is shown next to the cart logo, clicking the
              cart logo would open the cart where the items selected are shown,
              and the user has the ability to increase or decrease the quantity
              of the items from the cart menu, and below the items, there is the
              order button which shows the total price of the transaction.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Youtube Home-Page Clone</h4>

            <span>React — Static — Single Page — Responsive</span>

            <p className="timeline-text">
              A simple responsive Youtube Home Page clone built in react
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">E-commerce Landing Page</h4>

            <span>
              React — Static — Pop-up News Letter and Ads — Dropdown Menus —
              Single Page — Responsive
            </span>

            <p className="timeline-text">
              E-commerce single-page website with pop-up ads, dropdown menus,
              and a different mobile look.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">A Travel Agency website</h4>

            <span>
              React — Static — Video Player — Single Page — Responsive
            </span>

            <p className="timeline-text">
              A simple CSS-focused single-page travel-themed website contains a
              slider-like format through which different videos can be played in
              the background.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">School website</h4>

            <span>React — Static — SwiperJs — MultiPage — Responsive</span>

            <p className="timeline-text">
              Simple CSS-focused multipage school-themed website.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Two Restaurants websites</h4>

            <span>
              React — Static — SwiperJs — LightGalleryJs — Single Page —
              Responsive
            </span>

            <p className="timeline-text">
              Two simple Restaurant-themed websites focused on CSS, contain
              swiper js, light gallery js, and animations.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
