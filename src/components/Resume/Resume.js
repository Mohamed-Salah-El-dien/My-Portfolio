import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/fontawesome-free-solid';
import { faFolderOpen } from '@fortawesome/fontawesome-free-regular';
import { useSelector } from 'react-redux';

import './Resume.css';

const Resume = () => {
  const resume = useSelector((state) => state.pages.resume);

  return (
    <article className={resume ? 'resume active' : 'resume'}>
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

            <p className="timeline-text">Geology Department</p>
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
            <h4 className="h4 timeline-item-title">Two Restaurant websites</h4>

            <span>
              React — Static — SwiperJs — LightGalleryJs — Single Page —
              Responsive
            </span>

            <p className="timeline-text">
              Two simple Restaurant-themed websites focused on CSS, contain
              swiper js, light gallery js, and animations.
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
            <h4 className="h4 timeline-item-title">E-commerce website</h4>

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
            <h4 className="h4 timeline-item-title">Youtube Clone</h4>

            <span>React — Static — Single Page — Responsive</span>

            <p className="timeline-text">
              A simple responsive Youtube Home Page clone built in react
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Todo App</h4>

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
            <h4 className="h4 timeline-item-title">Contact App</h4>

            <span>React — Dynamic — Redux — MultiPage — Responsive</span>

            <p className="timeline-text">
              A Simple contact app where the user can enter a name, email, and
              phone number on the add contact page, a contact card would be
              created on the home page with the previous data and the user can
              delete the card or edit its content in the edit page.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Shopping Cart App</h4>

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
            <h4 className="h4 timeline-item-title">An API related website</h4>

            <span>React — Dynamic — Redux — API — MultiPage — Responsive</span>

            <p className="timeline-text">
              A social-media-themed app where the data are fetched from a remote
              API and laid out with a post-themed format, the user can add,
              delete and edit any post. each post has in addition to the data
              fetched a (time ago ) function that shows when the post was added
              or edited, and each post also has reaction buttons.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
