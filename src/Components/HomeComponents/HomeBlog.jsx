import React from 'react'
import blogImg from '../../../src/product-image/b1.webp';
import BlogCards from '../../CommonComponents/BlogCards';
import "./HomeBlog.css";

const Blog = () => {
    return (
        <>
            <section className="bg-light">
                <div className="container my-5">
                    <div className="blog-row row text-center my-5">
                        <div className="blog-border-primary col-md-7 mx-auto mt-5">
                            <h2>Our Blog</h2>
                            <p>See our daily news & updates</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-4 mx-auto">
                            <BlogCards img={blogImg} title="Many People Selling Online" creator="Mark Spiker" date="Jan 18, 2019" category="News" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-4 mx-auto">
                            <BlogCards img={blogImg} title="Many People Selling Online" creator="Mark Spiker" date="Jan 18, 2019" category="News" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-4 mx-auto">
                            <BlogCards img={blogImg} title="Many People Selling Online" creator="Mark Spiker" date="Jan 18, 2019" category="News" />
                        </div>


                        <div className="col-12 text-center mt-4 mb-5">
                            <a href="#" className='btn btn-cyan rounded py-2 px-4'>View All Post</a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog