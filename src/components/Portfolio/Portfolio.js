import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/fontawesome-free-solid";
import { faEye } from "@fortawesome/fontawesome-free-regular";
import { useSelector } from "react-redux";
import img1 from "../../assets/images/project-1.png";
import img2 from "../../assets/images/project-2.png";
import img3 from "../../assets/images/project-3.png";
import img4 from "../../assets/images/project-4.png";
import img5 from "../../assets/images/project-5.png";
import img6 from "../../assets/images/project-6.png";
import img7 from "../../assets/images/project-7.png";
import img8 from "../../assets/images/project-8.png";
import img9 from "../../assets/images/project-9.png";
import img10 from "../../assets/images/project-10.png";
import img11 from "../../assets/images/project-11.png";
import img12 from "../../assets/images/project-12.png";
import img13 from "../../assets/images/project-13.png";
import img14 from "../../assets/images/project-14.png";
import img15 from "../../assets/images/project-15.png";
import img16 from "../../assets/images/project-16.png";
import img17 from "../../assets/images/project-17.png";
import img18 from "../../assets/images/project-18.png";
import img19 from "../../assets/images/project-19.png";

import "./Portfolio.css";

const Portfolio = () => {
  const portfolio = useSelector((state) => state.pages.portfolio);

  const [toggleList, setToggleList] = useState(false);
  const [toggleAll, setToggleAll] = useState(true);
  const [toggleWeb, setToggleWeb] = useState(false);
  const [toggleCrud, setToggleCrud] = useState(false);
  const [toggleApi, setToggleApi] = useState(false);

  const handleToggle = () => {
    setToggleList(!toggleList);
  };

  const handleAll = () => {
    setToggleAll(true);
    setToggleWeb(false);
    setToggleCrud(false);
    setToggleApi(false);
  };
  const handleWeb = () => {
    setToggleAll(false);
    setToggleWeb(true);
    setToggleCrud(false);
    setToggleApi(false);
  };
  const handleCrud = () => {
    setToggleAll(false);
    setToggleWeb(false);
    setToggleCrud(true);
    setToggleApi(false);
  };
  const handleApi = () => {
    setToggleAll(false);
    setToggleWeb(false);
    setToggleCrud(false);
    setToggleApi(true);
  };

  const Section = ({ link, image, title, category }) => {
    return (
      <a href={link}>
        <figure className="project-img">
          <div className="project-item-icon-box">
            <FontAwesomeIcon icon={faEye} className="icon" />
          </div>

          <img src={image} alt="finance" loading="lazy" />
        </figure>

        <h3 className="project-title">{title}</h3>

        <p className="project-category">{category}</p>
      </a>
    );
  };

  return (
    <article className={portfolio ? "portfolio active" : "portfolio"}>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className={toggleAll ? "active" : ""} onClick={handleAll}>
              All
            </button>
          </li>

          <li className="filter-item">
            <button className={toggleWeb ? "active" : ""} onClick={handleWeb}>
              Static websites
            </button>
          </li>

          <li className="filter-item">
            <button className={toggleCrud ? "active" : ""} onClick={handleCrud}>
              CRUD
            </button>
          </li>

          <li className="filter-item">
            <button className={toggleApi ? "active" : ""} onClick={handleApi}>
              API Related
            </button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button
            className={toggleList ? "filter-select active" : "filter-select "}
            onClick={handleToggle}
          >
            <div className="select-value">Select category</div>

            <div className="select-icon">
              <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button className="active" onClick={handleAll}>
                All
              </button>
            </li>

            <li className="select-item">
              <button onClick={handleWeb}>Static websites</button>
            </li>

            <li className="select-item">
              <button onClick={handleCrud}>CRUD</button>
            </li>

            <li className="select-item">
              <button onClick={handleApi}>API Related</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className={
              toggleAll || toggleApi ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/All-in-One-v1.0"
              image={img19}
              title="All-in-One v1.0"
              category="API Related"
            />
          </li>

          <li
            className={
              toggleAll || toggleApi ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Social-media-app-1"
              image={img18}
              title="Social Media App"
              category="API Related"
            />
          </li>

          <li
            className={
              toggleAll || toggleApi ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Google-Clone"
              image={img12}
              title="Google Clone App"
              category="API Related"
            />
          </li>

          <li
            className={
              toggleAll || toggleApi ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Youtube-clone-app"
              image={img13}
              title="Youtube Clone App"
              category="API Related"
            />
          </li>

          <li
            className={
              toggleAll || toggleApi ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Exercise-App"
              image={img14}
              title="Exercise App"
              category="API Related"
            />
          </li>

          <li
            className={
              toggleAll || toggleApi ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Weather-App"
              image={img15}
              title="Weather App"
              category="API Related"
            />
          </li>

          <li
            className={
              toggleAll || toggleApi ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/crypto-app"
              image={img11}
              title="CryptoCurrency App"
              category="API Related"
            />
          </li>

          <li
            className={
              toggleAll || toggleApi ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Real-Estate-App"
              image={img16}
              title="Real Estate App"
              category="API Related"
            />
          </li>

          <li
            className={
              toggleAll || toggleApi ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Story-App"
              image={img17}
              title="Story App"
              category="API Related"
            />
          </li>

          <li
            className={
              toggleAll || toggleApi ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Blog"
              image={img9}
              title="Social Media App"
              category="API Related"
            />
          </li>

          <li
            className={
              toggleAll || toggleWeb ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Food-1"
              image={img1}
              title="Food 1"
              category="Static websites"
            />
          </li>

          <li
            className={
              toggleAll || toggleWeb ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Food-2"
              image={img2}
              title="Food 2"
              category="Static websites"
            />
          </li>

          <li
            className={
              toggleAll || toggleWeb ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/School"
              image={img3}
              title="School"
              category="Static websites"
            />
          </li>

          <li
            className={
              toggleAll || toggleWeb ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Travel"
              image={img4}
              title="Travel"
              category="Static websites"
            />
          </li>

          <li
            className={
              toggleAll || toggleWeb ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/E-Commerce"
              image={img5}
              title="E-commerce"
              category="Static websites"
            />
          </li>

          <li
            className={
              toggleAll || toggleWeb ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Youtube-Clone"
              image={img10}
              title="Youtube Clone"
              category="Static websites"
            />
          </li>

          <li
            className={
              toggleAll || toggleCrud ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Todo-List"
              image={img6}
              title="Todo App"
              category="CRUD"
            />
          </li>

          <li
            className={
              toggleAll || toggleCrud ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Contact-App"
              image={img7}
              title="Contact App"
              category="CRUD"
            />
          </li>

          <li
            className={
              toggleAll || toggleCrud ? "project-item  active" : "project-item "
            }
          >
            <Section
              link="https://github.com/Mohamed-Salah-El-dien/Shopping-Cart-App"
              image={img8}
              title="Shopping Cart App"
              category="CRUD"
            />
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
