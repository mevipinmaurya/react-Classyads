import React from 'react';
import "./OverlapBox.css";
import img1 from "../../../src/house.png";
import img2 from "../../../src/books.png";
import img3 from "../../../src/furniture.png";
import img4 from "../../../src/business.png";
import img5 from "../../../src/car.png";
import img6 from "../../../src/pizza.png";
import OverlapCards from '../../CommonComponents/OverlapCards';

import p1 from '../../../src/product-image/p1.webp'
import p2 from '../../../src/product-image/p2.webp'
import p3 from '../../../src/product-image/p3.webp'
import p4 from '../../../src/product-image/p4.webp'
import p5 from '../../../src/product-image/p5.webp'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AdsCards from '../../CommonComponents/AdsCards';


const OverlapBox = () => {
    return (
        <>
            <section className='bg-light'>
                <div className="container">
                    <div className="row justify-content-center align-items-center mx-auto">

                        {/* <div className="row"> */}
                        <div className="col-12 overlapBox-section mx-auto">
                            <div className="overlap-row row rounded">
                                <OverlapCards img={img1} title="Real Estate" counts="3,921" />
                                <OverlapCards img={img2} title="Books" counts="3,211" />
                                <OverlapCards img={img3} title="Furniture" counts="3,321" />
                                <OverlapCards img={img4} title="Electronics" counts="3,901" />
                                <OverlapCards img={img5} title="Car & Vehicles" counts="1,325" />
                                <OverlapCards img={img6} title="Others" counts="5,001" />
                            </div>
                        </div>
                        {/* </div> */}

                        <div className="row">
                            <h5 className='mb-5'>Featured Ads</h5>

                            <div className="row mb-0">

                                <OwlCarousel items={4}
                                    loop={true}
                                    nav={true}
                                    dots={false}
                                    autoplay={true}
                                    margin={25}
                                    responsiveClass={true}
                                    autoWidth={true}
                                >
                                    <div className="item">
                                        <div className="col-12">
                                            <AdsCards img={p1} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-12">
                                            <AdsCards img={p2} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-12">
                                            <AdsCards img={p3} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-12">
                                            <AdsCards img={p4} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-12">
                                            <AdsCards img={p5} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-12">
                                            <AdsCards img={p2} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-12">
                                            <AdsCards img={p4} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-12">
                                            <AdsCards img={p1} title="House with Smimming Pool" category="Real Estate" address="Don St, Brooklyn, New York" />
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>

                        </div>

                    </div>
                </div>
                {/* </div>
                </div> */}
            </section>
        </>
    )
}

export default OverlapBox