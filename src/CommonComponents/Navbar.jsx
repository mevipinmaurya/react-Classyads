// rafce
import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light rounded mt-lg-4 mt-sm-0 mb-4">
        <div className="container-fluid py-3 px-4 site-logo">
          <NavLink className="navbar-brand text-black" to="/">CLASSY
            <span className='text-primary'>ADS</span></NavLink>
          <button className="navbar-toggler hamburger-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="site-menu navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/ads">Ads</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item pe-lg-3 pe-md-3 pe-sm-0">
                <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item border-start ps-lg-3 ps-md-0 ps-sm-0">
                <NavLink className="nav-link " aria-current="page" to="/login">Login</NavLink>
              </li>
              <li className="nav-item pe-4">
                <NavLink className="nav-link " aria-current="page" to="/register">Register</NavLink>
              </li>
              <li className="nav-item ps-3">
                <a className="menu-btn btn btn-primary" aria-current="page" href="#"><i className="fa-solid fa-plus"></i> Post an Ad</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar