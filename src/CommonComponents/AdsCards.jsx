import React from 'react'

const AdsCards = (props) => {
    return (
        <>
            {/* <div className="col-lg-6"> */}
            <div className="d-block d-md-flex listing vertical">
                <a href="#" className='img d-block' style={{ backgroundImage: `url(${props.img})` }}></a>
                <div className="lh-content">
                    <span className="category">{props.category}</span>
                    <a href="#" className='bookmark'>
                        <span className="icon-heart"><i className="heart-icon fa-solid fa-heart"></i></span>
                    </a>
                    <h3><a href="#">{props.title}</a></h3>
                    <address>{props.address}</address>
                    <p className='mb-0'>
                        <i className="text-warning fa-solid fa-star"></i>
                        <i className="text-warning fa-solid fa-star"></i>
                        <i className="text-warning fa-solid fa-star"></i>
                        <i className="text-warning fa-solid fa-star"></i>
                        <i className="text-warning fa-regular fa-star"></i>
                        <span className="review"> (3 Reviews)</span>
                    </p>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default AdsCards