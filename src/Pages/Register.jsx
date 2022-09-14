import React from 'react'
import "./Ads.css";
import Navbar from '../CommonComponents/Navbar';
import NewsLetter from '../CommonComponents/NewsLetter';
import Footer from '../CommonComponents/Footer';
import RegisterBody from '../Components/RegisterComponents/RegisterBody';
import CommonHero from '../CommonComponents/CommonHero';


const Register = () => {
    return (
        <>
            <header className='ads-header'>
                <div className="container-fluid ads-header-bg">
                    <div className="row ads-header-absolute">
                        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">

                            <Navbar />
                            <CommonHero heroTitle="SignUp" description=""/>

                        </div>
                    </div>
                </div>
            </header>

            <RegisterBody />
            <NewsLetter />
            <Footer />


        </>
    )
}

export default Register