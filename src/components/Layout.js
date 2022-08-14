import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Resume from './Resume/Resume';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import './Layout.css';

const Layout = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
