import React from 'react';
import { Link } from 'react-scroll';
import MentoonsLogo from '../assets/Mentoonslogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={MentoonsLogo} className="navbar-brand"/>
      <ul className="navbar-links">
        <li className='navbarElements'>
          <Link to="about-section" smooth={true} duration={500}>About</Link>
        </li>
        <li className='navbarElements'>
          <Link to="categories-section" smooth={true} duration={500}>Categories</Link>
        </li>
        <li className='navbarElements'>
          <Link to="how-it-works-section" smooth={true} duration={500}>How It Works</Link>
        </li>
        <li className='navbarElements'>
          <Link to="benefits-section" smooth={true} duration={500}>Benefits</Link>
        </li>
        <li className='navbarElements'>
          <Link to="testimonials-section" smooth={true} duration={500}>Testimonials</Link>
        </li>
        <li className='navbarElements'>
          <Link to="call-to-action-section" smooth={true} duration={500}>Call to Action</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
