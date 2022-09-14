import React from 'react'
import "./Testimonial.css";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import t1 from "../../t1.webp"
import t2 from "../../t2.webp"
import t3 from "../../t3.webp"
import t4 from "../../t4.webp"

import TestimonialCards from "../../CommonComponents/TestimonialCards";

const Testimonial = () => {
    return (
        <>
            <div className="container my-5">
                <div className="testimonial-row row text-center mb-5">
                    <div className="testimonial-border-primary col-md-7 mx-auto">
                        <h2>Testimonials</h2>
                    </div>
                </div>

                <div className="row">


                    <OwlCarousel items={1}
                        loop
                        nav
                        autoplay={true}
                        margin={25}
                        responsiveClass={true}
                    >
                        <div className="item">
                            <div className="col-12">
                                <TestimonialCards img={t1} name="John Smith"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-12">
                            <TestimonialCards img={t2} name="Christine Aguilar"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-12">
                            <TestimonialCards img={t3} name="Robert Spears"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-12">
                            <TestimonialCards img={t4} name="Bruce Rogers"/>
                            </div>
                        </div>
                        
                    </OwlCarousel>

                </div>
            </div>
        </>
    )
}

export default Testimonial