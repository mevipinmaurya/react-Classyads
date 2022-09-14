import React from 'react'
import './Home.css';
import OverlapBox from '../Components/HomeComponents/OverlapBox';
import Product from "../Components/HomeComponents/Product";
import Trending from '../Components/HomeComponents/Trending';
import HomeBlog from '../Components/HomeComponents/HomeBlog';
import Navbar from '../CommonComponents/Navbar';
import NewsLetter from '../CommonComponents/NewsLetter';
import Footer from '../CommonComponents/Footer';
import Hero from '../Components/HomeComponents/Hero';
import Testimonial from '../Components/HomeComponents/Testimonial';

const Home = () => {
    return (
        <>
            <header>
                <div className="container-fluid header-bg">
                    <div className="row header-absolute">
                        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">

                            <Navbar />

                            <Hero />

                        </div>
                    </div>
                </div>
            </header>


            <OverlapBox />
            <Product />
            <Trending />
            <Testimonial />
            <HomeBlog />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Home