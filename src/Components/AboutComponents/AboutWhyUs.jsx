import React from 'react'
import "./AboutWhyUs.css";
import img1 from "../../bg.webp";
import img2 from "../../b1.webp";

const AboutWhyUs = () => {
  return (
    <>
    <section className='site-section mb-5'>
        <div className="container">



            <div className="row p-3 my-5">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <img src={img1} alt="Why-us-image" className='rounded img-fluid'/>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 ms-auto mb-5">
                    <div className="mb-3">
                        <h3 className='color-cyan'>Why Us</h3>
                        <p className='color-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptates a explicabo delectus sed labore dolor enim optio odio at!</p>
                        <p className='color-light'>Adipisci dolore reprehenderit est et assumenda veritatis, ex voluptate odio consequuntur quo ipsa accusamus dicta laborum exercitationem aspernatur reiciendis perspiciatis!</p>
                    </div>
                    <div className="mb-3">
                        <ul className="list-unstyled ula">
                            <li className="mb-3"><p className='color-light'><i className="correct-icon fa-solid fa-check"></i>Adipisci dolore reprehenderit</p></li>
                            <li className="mb-3"><p className='color-light'><i className="correct-icon fa-solid fa-check"></i>Accusamus dicta laborum</p></li>
                            <li className="mb-3"><p className='color-light'><i className="correct-icon fa-solid fa-check"></i>Delectus sed labore</p></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="row p-3 my-5">
                <div className="col-lg-6 col-md-6 col-sm-12 ms-auto mb-5 order-md-2">
                    <img src={img2} alt="Why-us-image" className='rounded img-fluid'/>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 mb-5 order-md-1">
                    <div className="mb-3">
                        <h3 className='color-cyan'>Customer Centered Co.</h3>
                        <p className='color-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptates a explicabo delectus sed labore dolor enim optio odio at!</p>
                    </div>
                    <div className="mb-3">
                        <ul className="list-unstyled ula">
                            <li className="mb-3"><p className='color-light'><i className="correct-icon fa-solid fa-check"></i>Adipisci dolore reprehenderit</p></li>
                            <li className="mb-3"><p className='color-light'><i className="correct-icon fa-solid fa-check"></i>Accusamus dicta laborum</p></li>
                            <li className="mb-3"><p className='color-light'><i className="correct-icon fa-solid fa-check"></i>Delectus sed labore</p></li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    </section>

    </>
  )
}

export default AboutWhyUs