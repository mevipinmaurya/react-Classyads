import React from 'react'

const Cards = (props) => {
    return (
        <>
            <div className="listing-item">
                <div className="listing-image">
                    <img src={props.img} className="img-fluid" alt="Product-images" />
                </div>
                <div className="listing-item-content">
                    <a href="#" className='bookmark'>
                        <span className='icon-heart'><i className="heart-icon fa-solid fa-heart"></i></span>
                    </a>
                    <a href="#" className='mb-3 category'>{props.category}</a>
                    <h2 className="mb-1">
                        <a href="#">{props.title}</a>
                    </h2>
                    <span className="address">{props.address}</span>
                </div>
            </div>
        </>
    )
}

export default Cards