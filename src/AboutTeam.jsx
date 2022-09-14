import React from 'react';
// import u1 from "../../../public/Images/testimonial/t1.webp";
// import u2 from "../../../public/Images/testimonial/t2.webp";
// import u3 from "../../../public/Images/testimonial/t3.webp";
// import u4 from "../../../public/Images/testimonial/t4.webp";


const AboutTeam = () => {
    return (
        <>
            <section className="site-section">
                <div className="container">
                    <div className="trending-row row my-5">
                        <div className="trending-border-primary col-md-7">
                            <h2 className='mt-5'>Our Team</h2>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-4 mx-auto">
                            <div className="card border-0">
                                <img src="../../../public/Images/testimonial/t1.webp" className="card-img-top" alt="blog-Image" />
                                <div className="card-body mt-3">
                                    <h5 className="card-title">Many People Selling Online</h5>
                                    <div className="meta mb-3">by Mark Spiker<span className="mx-1">•</span> Jan 18, 2019 <span className="mx-1">•</span> <a href="#">News</a></div>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutTeam