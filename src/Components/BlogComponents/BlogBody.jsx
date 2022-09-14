import React from 'react'
import p1 from '../../../src/product-image/p1.webp'
import p2 from '../../../src/product-image/p2.webp'
import p3 from '../../../src/product-image/p3.webp'
import p4 from '../../../src/product-image/p4.webp'
import p5 from '../../../src/product-image/p5.webp'
import "./BlogBody.css";
import BlogCards from "../../CommonComponents/BlogCards";


const BlogBody = () => {
    return (
        <>
            <section className="site-section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-sm-12">
                            <div className="row">

                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <BlogCards img={p1} title="Many People Selling Online" creator="Mark Spiker" date="Jan 18, 2019" category="News" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <BlogCards img={p2} title="Many People Selling Online" creator="Mark Spiker" date="Jan 18, 2019" category="News" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <BlogCards img={p3} title="Many People Selling Online" creator="Mark Spiker" date="Jan 18, 2019" category="News" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <BlogCards img={p4} title="Many People Selling Online" creator="Mark Spiker" date="Jan 18, 2019" category="News" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <BlogCards img={p5} title="Many People Selling Online" creator="Mark Spiker" date="Jan 18, 2019" category="News" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <BlogCards img={p3} title="Many People Selling Online" creator="Mark Spiker" date="Jan 18, 2019" category="News" />
                                </div>
                                


                                <div className="col-12 mt-5 text-center">
                                    <div className="custom-pagination">
                                        <span>1</span>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <span className='more-page'>. . .</span>
                                        <a href="#">10</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 mt-lg-0 mt-md-3 mt-5 ms-auto">

                            <div className="mb-5">
                                <h3 className='text-black mb-3'>Search</h3>
                                <form action="#">
                                    <div className="mb-3">
                                        <input type="text" className="ads-input form-control" id="formGroupExampleInput" placeholder="Search keyword and hit enter..." />
                                    </div>
                                </form>
                            </div>

                            <div className="mb-5">
                                <h3 className='text-black mb-3'>Recent Comments</h3>
                                <ul className="list-unstyled">
                                    <li className='mb-2 li-cyan'><a href="#">Lorem ipsum dolor sit amet</a></li>
                                    <li className='mb-2 li-cyan'><a href="#">Quaerat rerum voluptatibus veritatis</a></li>
                                    <li className='mb-2 li-cyan'><a href="#">Maiores sapiente veritatis reprehenderit</a></li>
                                    <li className='mb-2 li-cyan'><a href="#">Natus eligendi nobis</a></li>
                                </ul>
                            </div>

                            <div className="mb-5">
                                <h3 className='text-black mb-3'>Popular Posts</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-2 li-cyan">
                                        <a href="#">Joefrey</a>
                                        <em> in </em>
                                        <a href="#">Lorem ipsum dolor sit amet</a>
                                    </li>
                                    <li className="mb-2 li-cyan">
                                        <a href="#">Joefrey</a>
                                        <em> in </em>
                                        <a href="#">Lorem ipsum dolor sit amet</a>
                                    </li>
                                    <li className="mb-2 li-cyan">
                                        <a href="#">Joefrey</a>
                                        <em> in </em>
                                        <a href="#">Lorem ipsum dolor sit amet</a>
                                    </li>
                                    <li className="mb-2 li-cyan">
                                        <a href="#">Joefrey </a>
                                        <em> in </em>
                                        <a href="#">Lorem ipsum dolor sit amet</a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogBody