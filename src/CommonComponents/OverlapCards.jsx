import React from 'react'

const OverlapCards = (props) => {
    return (
        <>
            <div className="overlap-col col-sm-5 col-md-4 col-lg-2 justify-content-between align-items-center text-center py-4 rounded">
                <a href="#" className="popular-category">
                    <span className="icon"><img className='flaticon img-fluid' src={props.img} alt="house-flaticon" /></span>
                    <span className="caption mb-3">{props.title}</span>
                    <span className="number">{props.counts}</span>
                </a>
            </div>
        </>
    )
}

export default OverlapCards