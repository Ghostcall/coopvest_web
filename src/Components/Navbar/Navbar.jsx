import React from 'react';
import logo from '../../assets/coopvest.ico';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Coopvest Logo" />
      </div>

      <div className="nav-menu">
        <ul>
          <li>
            <NavLink to="/" className="nav-links" activeClassName="nav-links-active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-links" activeClassName="nav-links-active">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="nav-links" activeClassName="nav-links-active">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className="nav-links" activeClassName="nav-links-active">
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/faqs" className="nav-links" activeClassName="nav-links-active">
              FAQs
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="contact">
        <ul>
          <li>
            <NavLink to="/contact" className="nav-links" activeClassName="nav-links-active">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
