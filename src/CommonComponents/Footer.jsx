import React from 'react'
import "./Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='site-footer'>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row d-column gy-4">
                            <div className="footer-row row justify-content-center align-items-center text-white gy-3">

                                <div className="col-md-9 gy-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2 className="footer-heading mb-lg-4 mb-md-4 mb-sm-2">About</h2>
                                            <p className='footer-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rerum unde possimus molestias dolorem fuga, illo quis fugiat!</p>
                                        </div>
                                        <div className="col-md-3">
                                            <h2 className="footer-heading mb-lg-4 mb-md-4 mb-sm-2">Navigations</h2>
                                            <ul className="list-unstyled">
                                                <li className='footer-li'><NavLink to="/about">About us</NavLink></li>
                                                <li className='footer-li'><NavLink to="#">Services</NavLink></li>
                                                <li className='footer-li'><NavLink to="/blog">Blogs</NavLink></li>
                                                <li className='footer-li'><NavLink to="/contact">Contact us</NavLink></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h2 className="footer-heading mb-lg-4 mb-md-4 mb-sm-2">Follow us</h2>
                                            <NavLink className='pl-0 pr-3' to="#"><i className="fa-brands fa-facebook-f"></i></NavLink>
                                            <NavLink className='pl-3 pr-3' to="#"><i className="fa-brands fa-twitter"></i></NavLink>
                                            <NavLink className='pl-3 pr-3' to="#"><i className="fa-brands fa-instagram"></i></NavLink>
                                            <NavLink className='pl-3 pr-3' to="#"><i className="fa-brands fa-linkedin-in"></i></NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <form action="#">

                                        <div className="input-group mb-3">
                                            <input type="text" className="shadow-none bg-transparent footer-input text-light form-control" placeholder="Search products..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span className="footer-btn input-group-text">Search</span>
                                        </div>
                                    </form>
                                </div>

                            </div>


                            <div className="row text-center ">
                                <div className="col-md-12 mx-auto">
                                    <div className="border-top pt-4">
                                        <p className='footer-p'>
                                            Copyright © 2022
                                            All rights reserved | This website is made by <span className="creator-name">Vipin Maurya.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer