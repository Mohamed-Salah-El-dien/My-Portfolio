import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';
import { faEye } from '@fortawesome/fontawesome-free-regular';
import { useSelector } from 'react-redux';
import img1 from '../../assets/images/project-1.png';
import img2 from '../../assets/images/project-2.png';
import img3 from '../../assets/images/project-3.png';
import img4 from '../../assets/images/project-4.png';
import img5 from '../../assets/images/project-5.png';
import img6 from '../../assets/images/project-6.png';
import img7 from '../../assets/images/project-7.png';
import img8 from '../../assets/images/project-8.png';
import img9 from '../../assets/images/project-9.png';
import img10 from '../../assets/images/project-10.png';

import './Portfolio.css';

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

  return (
    <article className={portfolio ? 'portfolio active' : 'portfolio'}>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className={toggleAll ? 'active' : ''} onClick={handleAll}>
              All
            </button>
          </li>

          <li className="filter-item">
            <button className={toggleWeb ? 'active' : ''} onClick={handleWeb}>
              Web development
            </button>
          </li>

          <li className="filter-item">
            <button className={toggleCrud ? 'active' : ''} onClick={handleCrud}>
              CRUD
            </button>
          </li>

          <li className="filter-item">
            <button className={toggleApi ? 'active' : ''} onClick={handleApi}>
              API Related
            </button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button
            className={toggleList ? 'filter-select active' : 'filter-select '}
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
              <button onClick={handleWeb}>Web design</button>
            </li>

            <li className="select-item">
              <button onClick={handleCrud}>Applications</button>
            </li>

            <li className="select-item">
              <button onClick={handleApi}>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className={
              toggleAll || toggleWeb ? 'project-item  active' : 'project-item '
            }
          >
            <a href="https://github.com/Mohamed-Salah-El-dien/Food-1">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} className="icon" />
                </div>

                <img src={img1} alt="finance" loading="lazy" />
              </figure>

              <h3 className="project-title">Food 1</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className={
              toggleAll || toggleWeb ? 'project-item  active' : 'project-item '
            }
          >
            <a href="https://github.com/Mohamed-Salah-El-dien/Food-2">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} className="icon" />
                </div>

                <img src={img2} alt="orizon" loading="lazy" />
              </figure>

              <h3 className="project-title">Food 2</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className={
              toggleAll || toggleWeb ? 'project-item  active' : 'project-item '
            }
          >
            <a href="https://github.com/Mohamed-Salah-El-dien/School">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} className="icon" />
                </div>

                <img src={img3} alt="fundo" loading="lazy" />
              </figure>

              <h3 className="project-title">School</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className={
              toggleAll || toggleWeb ? 'project-item  active' : 'project-item '
            }
          >
            <a href="https://github.com/Mohamed-Salah-El-dien/Travel">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} className="icon" />
                </div>

                <img src={img4} alt="brawlhalla" loading="lazy" />
              </figure>

              <h3 className="project-title">Travel</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className={
              toggleAll || toggleWeb ? 'project-item  active' : 'project-item '
            }
          >
            <a href="https://github.com/Mohamed-Salah-El-dien/E-Commerce">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} className="icon" />
                </div>

                <img src={img5} alt="dsm." loading="lazy" />
              </figure>

              <h3 className="project-title">E-commerce</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className={
              toggleAll || toggleWeb ? 'project-item  active' : 'project-item '
            }
          >
            <a href="https://github.com/Mohamed-Salah-El-dien/Youtube-Clone">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} className="icon" />
                </div>

                <img src={img10} alt="dsm." loading="lazy" />
              </figure>

              <h3 className="project-title">Youtube Clone</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className={
              toggleAll || toggleCrud ? 'project-item  active' : 'project-item '
            }
          >
            <a href="https://github.com/Mohamed-Salah-El-dien/Todo-List">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} className="icon" />
                </div>

                <img src={img6} alt="metaspark" loading="lazy" />
              </figure>

              <h3 className="project-title">Todo App</h3>

              <p className="project-category">CRUD</p>
            </a>
          </li>

          <li
            className={
              toggleAll || toggleCrud ? 'project-item  active' : 'project-item '
            }
          >
            <a href="https://github.com/Mohamed-Salah-El-dien/Contact-App">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} className="icon" />
                </div>

                <img src={img7} alt="summary" loading="lazy" />
              </figure>

              <h3 className="project-title">Contact App</h3>

              <p className="project-category">CRUD</p>
            </a>
          </li>

          <li
            className={
              toggleAll || toggleCrud ? 'project-item  active' : 'project-item '
            }
          >
            <a href="https://github.com/Mohamed-Salah-El-dien/Shopping-Cart-App">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} className="icon" />
                </div>

                <img src={img8} alt="task manager" loading="lazy" />
              </figure>

              <h3 className="project-title">Shoping Cart App</h3>

              <p className="project-category">CRUD</p>
            </a>
          </li>

          <li
            className={
              toggleAll || toggleApi ? 'project-item  active' : 'project-item '
            }
          >
            <a href="https://github.com/Mohamed-Salah-El-dien/Blog">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FontAwesomeIcon icon={faEye} className="icon" />
                </div>

                <img src={img9} alt="arrival" loading="lazy" />
              </figure>

              <h3 className="project-title">Social Media App</h3>

              <p className="project-category">API Related</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
