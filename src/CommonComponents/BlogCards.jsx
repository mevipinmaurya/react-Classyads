import React from 'react'

const BlogCards = (props) => {
    return (
        <>

            <div className="card border-0">
                <img src={props.img} className="card-img-top" alt="blog-Image" />
                <div className="card-body mt-3">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="meta mb-3">By {props.creator}<span className="mx-1">•</span> {props.date} <span className="mx-1">•</span> <a href="#">{props.category}</a></div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                </div>
            </div>
        </>
    )
}

export default BlogCards