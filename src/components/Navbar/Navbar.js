import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pagesActions } from '../store/PagesSlice';
import './Navbar.css';

const Navbar = () => {
  const about = useSelector((state) => state.pages.about);
  const resume = useSelector((state) => state.pages.resume);
  const portfolio = useSelector((state) => state.pages.portfolio);
  const contact = useSelector((state) => state.pages.contact);
  const dispatch = useDispatch();

  const handleAbout = () => {
    dispatch(pagesActions.toggleabout());
  };
  const handleResume = () => {
    dispatch(pagesActions.toggleresume());
  };
  const handlePortfolio = () => {
    dispatch(pagesActions.toggleportfolio());
  };
  const handleContact = () => {
    dispatch(pagesActions.togglecontact());
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={about ? 'navbar-link  active' : 'navbar-link'}
            onClick={handleAbout}
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={resume ? 'navbar-link  active' : 'navbar-link'}
            onClick={handleResume}
          >
            Resume
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={portfolio ? 'navbar-link  active' : 'navbar-link'}
            onClick={handlePortfolio}
          >
            Portfolio
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={contact ? 'navbar-link  active' : 'navbar-link'}
            onClick={handleContact}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
