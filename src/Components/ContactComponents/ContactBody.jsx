import React from 'react'
import "./ContactBody.css";

const ContactBody = () => {
    return (
        <>
            <section className="site-section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-7 col-md-7 col-sm-12 mb-5">
                            <form action="#" className='bg-white p-5'>

                                <div className="row form-group">
                                    <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                            <input type="text" className="ads-input form-control" id="formGroupExampleInput" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                            <input type="text" className="ads-input form-control" id="formGroupExampleInput" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-12 mb-3">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                            <input type="email" className="ads-input form-control" id="formGroupExampleInput" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-12 mb-3">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Subject</label>
                                            <input type="text" className="ads-input form-control" id="formGroupExampleInput" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-12 mb-3">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
                                            <textarea className="ads-input form-control" placeholder="Write your notes or questions here..." cols="30" rows="7"></textarea>
                                        </div>
                                    </div>
                                </div>


                                <div className="row form-group">
                                    <div className="col-12 mb-3">
                                        <input type="submit" className="btn btn-cyan py-2 px-4" value="Send Message" />
                                    </div>
                                </div>


                            </form>

                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-12 mb-5">
                            <div className="mb-3 bg-white p-4">
                                <div className="mb-5">
                                    <h3 className="text-black">Address</h3>
                                    <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>

                                <div className="mb-5 contact-a">
                                    <h3 className="text-black">Phone</h3>
                                    <a href="#">+1 232 3235 324</a>
                                </div>

                                <div className="mb-5 contact-a">
                                    <h3 className="text-black">Email Address</h3>
                                    <a href="#">youremail@domain.com</a>
                                </div>

                                <div className="mb-5">
                                    <h3 className="text-black">More Info</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
                                    <div className="col-12">
                                        <div className="col-12 mb-3">
                                            <input type="submit" className="btn btn-cyan py-2 px-4" value="Learn More" />
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

export default ContactBody