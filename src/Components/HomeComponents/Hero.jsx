import React from 'react'
import "./Hero.css";

const Hero = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto mt-lg-5 mt-sm-2">

                        <div className="justify-content-center align-items-center mb-lg-4 mb-sm-2 mt-lg-5 mt-sm-2">
                            <div className="site-content-block col-md-8 mx-auto">
                                <h1 className='text-center text-white'>Largest Classifieds In The World</h1>
                                <p className='text-center'>You can buy, sell anything you want.</p>
                            </div>
                        </div>


                        <div className="header-input-wrap align-items-center justify-content-center rounded">
                            <div className="col-md-12 mx-auto">
                                <form>
                                    <div className="row gy-2">
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <input type="text" className="header-input p-3 form-control" placeholder="What are you looking for?" aria-label="First name" />
                                        </div>
                                        <div className="col-lg-3 col-md-12 col-sm-12">
                                            <div className="icon-location-wrap">
                                                    <span className="icon-location"><i className="fa-solid fa-location-dot"></i></span>
                                                    <input type="text" className="header-input p-3 form-control" placeholder="Location" aria-label="Location" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12 col-sm-12">
                                            <select className="header-input p-3 form-select" aria-label="Default select example">
                                                <option selected>All Categories</option>
                                                <option value="1">Real State</option>
                                                <option value="2">Books & Magzines</option>
                                                <option value="3">Furniture</option>
                                                <option value="4">Electronics</option>
                                                <option value="5">Cars & Vehicles</option>
                                                <option value="6">Others</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12">
                                            <input type="submit" className="header-input header-input-button p-3 btn btn-primary btn-block rounded" value="Search" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero