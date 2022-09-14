import React from 'react'
import Navbar from '../CommonComponents/Navbar';
import "./Ads.css";
import BlogBody from '../Components/BlogComponents/BlogBody';
import NewsLetter from '../CommonComponents/NewsLetter';
import Footer from '../CommonComponents/Footer';
import CommonHero from '../CommonComponents/CommonHero';


const Blog = () => {
    return (
        <>
            <header className='ads-header'>
                <div className="container-fluid ads-header-bg">
                    <div className="row ads-header-absolute">
                        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">

                            <Navbar />
                            <CommonHero heroTitle="Our Blogs" description="Read our interesting blogs." />

                        </div>
                    </div>
                </div>
            </header>

            <BlogBody />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Blog