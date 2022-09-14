import React from 'react'
import "../LoginComponents/LoginBody.css";
import { NavLink } from 'react-router-dom';


const RegisterBody = () => {
    return (
        <>
            <section className="site-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="row">

                                <form action="#" className='bg-white p-5'>

                                    <div className="row form-group">
                                        <div className="col-12 mb-3">
                                            <div className="mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                                <input type="email" className="ads-input form-control" id="formGroupExampleInput" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-12 mb-3">
                                            <div className="mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                                <input type="password" className="ads-input form-control" id="formGroupExampleInput" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-12 mb-3">
                                            <div className="mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Re-type Password</label>
                                                <input type="password" className="ads-input form-control" id="formGroupExampleInput" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-12 mb-3">
                                            <div className="mb-2">
                                                <p className="para-black">Have an account? <NavLink to="/login">Login</NavLink></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-12 mb-3">
                                            <input type="submit" className="btn btn-cyan py-2 px-4" value="Sign Up" />
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterBody