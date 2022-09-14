import React from 'react'
import "./Ads.css";
import Navbar from '../CommonComponents/Navbar';
import AdsProducts from '../Components/AdsComponents/AdsProducts';
import NewsLetter from '../CommonComponents/NewsLetter';
import Footer from '../CommonComponents/Footer';
import CommonHero from '../CommonComponents/CommonHero';

const Ads = () => {
    return (
        <>
            <header className='ads-header'>
                <div className="container-fluid ads-header-bg">
                    <div className="row ads-header-absolute">
                        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">

                            <Navbar />

                            <CommonHero heroTitle="Ads Listings" description="Choose product you want." />
                        </div>
                    </div>
                </div>
            </header>

            <AdsProducts />
            <NewsLetter />
            <Footer />


        </>
    )
}

export default Ads