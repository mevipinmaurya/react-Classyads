import React from 'react'
import "./Ads.css";
import LoginBody from '../Components/LoginComponents/LoginBody';
import Navbar from '../CommonComponents/Navbar';
import NewsLetter from '../CommonComponents/NewsLetter';
import Footer from '../CommonComponents/Footer';
import CommonHero from '../CommonComponents/CommonHero';


const Login = () => {
    return (
        <>
            <header className='ads-header'>
                <div className="container-fluid ads-header-bg">
                    <div className="row ads-header-absolute">
                        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">

                            <Navbar />
                            <CommonHero heroTitle="LogIn" description="LogIn here"/ >

                        </div>
                    </div>
                </div>
            </header>

            <LoginBody />

            <NewsLetter />
            <Footer />

        </>
    )
}

export default Login