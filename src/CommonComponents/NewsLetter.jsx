import React from 'react'
import "./NewsLetter.css";

const NewsLetter = () => {
    return (
        <>
            <section className='newsletter'>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-10 mx-auto my-5">
                            <div className="row">
                                <div className="newsletter-text col-lg-6 col-md-12">
                                    <h6>Newsletter</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="row">
                                        <div className="input-group">
                                            <input type="email" className="newsletter-input form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span className="input-group-text newsletter-btn">Subscribe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter