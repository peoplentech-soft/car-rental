import React from 'react';
import './Blog.css';
import blog1 from '../../img/blog/blog-1.jpg';
import blog2 from '../../img/blog/blog-2.png';
import blog3 from '../../img/blog/blog-3.jpg';

const Blog = () => {
    return (
        <div className="Blog">
            <div className="blogContainer container-brand">
                <div className="blogTitle">
                    <h2>Renting Tips</h2>
                    <p>READ OUR LATEST BLOG NEWS</p>
                    <div className="blogHr">
                        <hr />
                    </div>

                    <div className="blogCardContainer">
                        <div className="blogCard shadow">
                            <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-md-5 blogImage">
                                    <img src={blog1} alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-7 blogPost">
                                    <h4>What To Do if Your Rental Car Has Met With An Accident?</h4>
                                    <div className="blogHr">
                                        <hr />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat unde consectetur ratione totam minima nobis in dolorum libero repellat aliquam repudiandae praesentium ipsam, accusamus alias tempora. Vitae ut voluptatem vel.</p>
                                </div>
                            </div>
                        </div>
                        <div className="blogCard shadow">
                            <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-md-5 blogImage">
                                    <img src={blog2} alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-7 blogPost">
                                    <h4>What You Need to Know Adaptive Cruise Control?</h4>
                                    <div className="blogHr">
                                        <hr />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat unde consectetur ratione totam minima nobis in dolorum libero repellat aliquam repudiandae praesentium ipsam, accusamus alias tempora. Vitae ut voluptatem vel.</p>
                                </div>
                            </div>
                        </div>
                        <div className="blogCard shadow">
                            <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-md-5 blogImage">
                                    <img src={blog3} alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-7 blogPost">
                                    <h4>Car Rental Mistakes That Can Cost You Big</h4>
                                    <div className="blogHr">
                                        <hr />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat unde consectetur ratione totam minima nobis in dolorum libero repellat aliquam repudiandae praesentium ipsam, accusamus alias tempora. Vitae ut voluptatem vel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;