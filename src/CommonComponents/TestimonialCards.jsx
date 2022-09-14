import React from 'react'
import "./TestimonialCards.css";


const TestimonialCards = (props) => {
    return (
        <>
            <div className="card bg-grey p-4">
                <img src={props.img} className="testimonial-img card-img-top" alt="testimonial-image" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text"><span className='commaText'>"</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita necessitatibus non quas assumenda, eligendi accusantium pariatur cumque beatae et amet.<span className='commaText'>"</span></p>
                </div>
            </div>
        </>
    )
}

export default TestimonialCards