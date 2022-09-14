import React from 'react'

const TeamCards = (props) => {
    return (
        <>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-4 mx-auto">
                <div className="card border-0">
                    <img src={props.img} className="card-img-top" alt="blog-Image" />
                    <div className="card-body mt-3">
                        <h5 className="card-title">{props.name}</h5>
                        <p>{props.designation}</p>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum facilis, sint libero commodi tenetur ducimus accusantium inventore.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCards