import React from 'react'
import "./Trending.css";
import "./Product.css"
import p1 from '../../../src/product-image/p1.webp'
import p2 from '../../../src/product-image/p2.webp'
import p3 from '../../../src/product-image/p3.webp'
import p4 from '../../../src/product-image/p4.webp'
import p5 from '../../../src/product-image/p5.webp'
import TrendingCards from '../../CommonComponents/TrendingCards';

const Trending = () => {
    return (
        <>
            <section className='bg-light mb-5'>
                <div className="container">
                    <div className="trending-row row my-5">
                        <div className="trending-border-primary col-md-7">
                            <h2 className='mt-5'>Trending Today</h2>
                        </div>
                    </div>


                    <div className="row mt-5">
                        <div className="col-lg-6">

                            <TrendingCards img={p1} category="Real Estate" title="House with Smimming Pool" address="Don St, Brooklyn, New York" />
                            <TrendingCards img={p3} category="Real Estate" title="House with Smimming Pool" address="Don St, Brooklyn, New York" />
                            <TrendingCards img={p2} category="Real Estate" title="House with Smimming Pool" address="Don St, Brooklyn, New York" />


                        </div>

                        <div className="col-lg-6">

                            <TrendingCards img={p5} category="Real Estate" title="House with Smimming Pool" address="Don St, Brooklyn, New York" />
                            <TrendingCards img={p3} category="Real Estate" title="House with Smimming Pool" address="Don St, Brooklyn, New York" />
                            <TrendingCards img={p4} category="Real Estate" title="House with Smimming Pool" address="Don St, Brooklyn, New York" />

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Trending