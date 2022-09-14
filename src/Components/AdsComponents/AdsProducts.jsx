import React from 'react'
import "./AdsProducts.css";
import p1 from '../../../src/product-image/p1.webp'
import p2 from '../../../src/product-image/p2.webp'
import p3 from '../../../src/product-image/p3.webp'
import p4 from '../../../src/product-image/p4.webp'
import p5 from '../../../src/product-image/p5.webp'
import Trending from "../HomeComponents/Trending";
import AdsCards from '../../CommonComponents/AdsCards';

const AdsProducts = () => {
    return (
        <>
            <section className='site-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">

                            <div className="row">
                                <div className="col-lg-6">
                                    <AdsCards img={p1} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                </div>
                                <div className="col-lg-6">
                                    <AdsCards img={p2} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                </div>
                                <div className="col-lg-6">
                                    <AdsCards img={p3} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                </div>
                                <div className="col-lg-6">
                                    <AdsCards img={p4} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                </div>
                                <div className="col-lg-6">
                                    <AdsCards img={p5} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                </div>
                                <div className="col-lg-6">
                                    <AdsCards img={p3} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                </div>
                                <div className="col-lg-6">
                                    <AdsCards img={p1} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                </div>
                                <div className="col-lg-6">
                                    <AdsCards img={p2} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                </div>
                                <div className="col-lg-6">
                                    <AdsCards img={p4} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                </div>
                                <div className="col-lg-6">
                                    <AdsCards img={p3} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                </div>




                                <div className="col-12 mt-5 text-center">
                                    <div className="custom-pagination">
                                        <span>1</span>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <span className='more-page'>. . .</span>
                                        <a href="#">10</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-3 ms-auto">

                            <div className="mb-4">
                                <h3 className='text-black mb-3'>Filter</h3>
                                <form action="#">
                                    <div className="mb-3">
                                        <input type="text" className="ads-input form-control" id="formGroupExampleInput" placeholder="What are you looking for?" />
                                    </div>
                                    <div className="mb-3">
                                        <select className="ads-input form-select" aria-label="Default select example">
                                            <option selected>Real State</option>
                                            <option value="2">Books & Magzines</option>
                                            <option value="3">Furniture</option>
                                            <option value="4">Electronics</option>
                                            <option value="5">Cars & Vehicles</option>
                                            <option value="6">Others</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <div className="icon-location-wrap">
                                            <span className="icon-location"><i className="fa-solid fa-location-dot"></i></span>
                                            <input type="text" className="ads-input form-control" id="formGroupExampleInput2" placeholder="Location" />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="mb-5">
                                <div className="range-section form-group">
                                    <p>Radius around selected destination</p>
                                </div>
                                <div className="range-section form-group">
                                    <input type="range" className="range-input form-range" min="0" max="100" value="20" id="customRange2" />
                                </div>
                            </div>

                            <div className="mb-5">
                                <form action="#">
                                    <div className="form-group">
                                        <p>Category 'Real Estate' is selected</p>
                                        <p>More filters</p>
                                    </div>
                                    <div className="form-group">
                                        <ul className="list-unstyled">
                                            <li className='pb-2'>
                                                <label className="checkbox-grey form-check-label" htmlFor="gridCheck">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    Check me out
                                                </label>
                                            </li>
                                            <li className='py-2'>
                                                <label className="checkbox-grey form-check-label" htmlFor="gridCheck">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    Commercial
                                                </label>
                                            </li>
                                            <li className='py-2'>
                                                <label className="checkbox-grey form-check-label" htmlFor="gridCheck">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    Industrial
                                                </label>
                                            </li>
                                            <li className='py-2'>
                                                <label className="checkbox-grey form-check-label" htmlFor="gridCheck">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    Land
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>

                            <div className="mb-5">
                                <h3 className='mb-3 color-grey h3-font'>More Info</h3>
                                <p className='line-height'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem placeat facilis, reprehenderit eius officiis.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <Trending />
        </>
    )
}

export default AdsProducts