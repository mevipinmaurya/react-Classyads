import React from 'react'
import "./CommonHero.css";

const CommonHero = (props) => {
  return (
    <>
    <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto mt-lg-5 mt-sm-2">

                        <div className="justify-content-center align-items-center mb-lg-4 mb-sm-2 mt-lg-5 mt-sm-4">
                            <div className="site-block col-md-8 mx-auto">
                                <h1 className='text-center text-white'>{props.heroTitle}</h1>
                                <p className='text-center'>{props.description}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default CommonHero