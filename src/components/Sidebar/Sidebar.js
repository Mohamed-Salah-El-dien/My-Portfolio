import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faPhone,
  faShieldAlt,
} from '@fortawesome/fontawesome-free-solid';
import {
  faEnvelope,
  faCalendarAlt,
  faMap,
  faCircle,
} from '@fortawesome/fontawesome-free-regular';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { pagesActions } from '../store/PagesSlice';
import pic from '../../assets/images/img2.png';
import './Sidebar.css';

const Sidebar = () => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setToggleInfo(!toggleInfo);
  };

  const handleContact = () => {
    dispatch(pagesActions.togglecontact());
  };

  return (
    <aside className={toggleInfo ? 'sidebar active' : 'sidebar'} data-sidebar>
      <div className="sidebar-info ">
        <figure className="avatar-box">
          <img src={pic} alt="" />
        </figure>

        <div className="info-content">
          <h1 className="name">Mohamed Salah</h1>

          <p className="title">Junior Frontend React dev</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={handleToggle}
        >
          <span>Show Contacts</span>

          <FontAwesomeIcon icon={faChevronDown} className="icon" />
        </button>
      </div>

      <div className="sidebar-info_more ">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item email" onClick={handleContact}>
            <div className="icon-box">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <p className="contact-link " title="mohamedelsebaey513@gmail.com">
                mohamedelsebaey513@gmail.com
              </p>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faPhone} className="icon" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <p className="contact-link">01284586022</p>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time datetime="1982-06-23">June 20, 1997</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faMap} className="icon" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>EL Mahalla EL Kubra Egypt</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Military Service</p>

              <address>Completed</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faCircle} className="icon" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Marital Status</p>

              <address>Single</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/mohamed-salah-956339176"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/Mohamed-Salah-El-dien"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
