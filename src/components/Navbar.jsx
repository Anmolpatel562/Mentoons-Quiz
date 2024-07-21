import React from 'react';
import MentoonsLogo from '../assets/Mentoonslogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={MentoonsLogo} className="navbar-brand"/>
      <ul className="navbar-as">
        <li className='navbarElements'>
          <a href="#about-section" smooth={true} duration={500}>About</a>
        </li>
        <li className='navbarElements'>
          <a href="#categories-section" smooth={true} duration={500}>Categories</a>
        </li>
        <li className='navbarElements'>
          <a href="#how-it-works-section" smooth={true} duration={500}>How It Works</a>
        </li>
        <li className='navbarElements'>
          <a href="#benefits-section" smooth={true} duration={500}>Benefits</a>
        </li>
        <li className='navbarElements'>
          <a href="#testimonials-section" smooth={true} duration={500}>Testimonials</a>
        </li>
        <li className='navbarElements'>
          <a href="#call-to-action-section" smooth={true} duration={500}>Call to Action</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
