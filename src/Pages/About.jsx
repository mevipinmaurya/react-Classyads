import React from 'react'
import Navbar from '../CommonComponents/Navbar';
import "./Ads.css";
import NewsLetter from '../CommonComponents/NewsLetter';
import Footer from '../CommonComponents/Footer';
import AboutTeam from '../Components/AboutComponents/AboutTeam';
import AboutWhyUs from '../Components/AboutComponents/AboutWhyUs';
import CommonHero from '../CommonComponents/CommonHero';


const Contact = () => {
    return (
        <>
            <header className='ads-header'>
                <div className="container-fluid ads-header-bg">
                    <div className="row ads-header-absolute">
                        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">

                            <Navbar />
                            <CommonHero heroTitle="About Us" description="A World class classified company" />
                        </div>
                    </div>
                </div>
            </header>

            <AboutTeam />
            <AboutWhyUs />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Contact