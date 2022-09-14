import React from 'react'
import "./Product.css";
import p1 from '../../product-image/p1.webp'
import p2 from '../../product-image/p2.webp'
import p3 from '../../product-image/p3.webp'
import p4 from '../../product-image/p4.webp'
import p5 from '../../product-image/p5.webp'
import Cards from '../../CommonComponents/Cards';

const Product = () => {
    return (
        <>
            <div className="container my-5">
                <div className="product-row row text-center mb-5">
                    <div className="border-primary col-md-7 mx-auto">
                        <h2>Popular Products</h2>
                        <p>Lorem ipsum dolor sit Amet</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                        <Cards img={p1} category="Car & Vehicles" title="Red Luxury Car" address="West Orange, New York" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                        <Cards img={p2} category="Real Estate" title="House with Smimming Pool" address="West Orange, New York" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                        <Cards img={p3} category="Furniture" title="Wooden chair & Table" address="West Orange, New York" />
                    </div>

                </div>

                <div className="row mb-5">
                    <div className="col-md-12 col-lg-6 mb-4 mb-lg-4">
                        <Cards img={p4} category="Electronics" title="iPhone X-gray" address="West Orange, New York" />
                    </div>
                    <div className="col-md-12 col-lg-6 mb-4 mb-lg-4">
                        <Cards img={p5} category="Real Estate" title="House with Smimming Pool" address="West Orange, New York" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product