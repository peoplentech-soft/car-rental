import { faAngleLeft, faAngleRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Testimonial.css';
import profile1 from '../../img/testimonial/profile-1.jpg';
import profile2 from '../../img/testimonial/profile-2.jpg';
import profile3 from '../../img/testimonial/profile-3.jpg';

const Testimonial = () => {
    return (
        <div className="Testimonial">
            <div className="Testimonial-container container-brand">

                <div className="testimonial-title">
                    <p>What people say about us</p>
                    <h2>Customer Review</h2>
                    <div className="hr"><hr /></div>
                </div>

                <div className="testimonial-slider">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active testimonial-item" data-bs-interval="10000">
                                <FontAwesomeIcon icon={faQuoteRight} className="testimoial-icon" />
                                <p>This was the second time we have used PickCar and as before all went well. Email comunications prior to pick up very clear, pick up and drop off timely and efficient. Car was well worth the hire fees and the the best compliment is we will use PickCar next year. Cheers for now.</p>
                                <div className="profile-image">
                                    <img src={profile1} className="testimonial-image " alt="" />
                                    <h5>Javier H. Thomas</h5>
                                </div>
                            </div>

                            <div class="carousel-item testimonial-item" data-bs-interval="2000">
                                <FontAwesomeIcon icon={faQuoteRight} className="testimoial-icon" />
                                <p>A great experience from booking the rental online to receiving email confirmation and step by step instructions on how to receive and return the vehicle - and it all happened exactly like PickCar said it would. The mobile app is particularly helpful. A great rental experience, thank you PickCar.</p>
                                <div className="profile-image">
                                    <img src={profile2} className="testimonial-image " alt="" />
                                    <h5>Charles A. Henderson</h5>
                                </div>
                            </div>
                            <div class="carousel-item testimonial-item">
                                <FontAwesomeIcon icon={faQuoteRight} className="testimoial-icon" />
                                <p>Thank you so much for sharing this. Limo Cabs is one of the leading company for limocabs.in Cabs in Bangalore includes a wide range of vehicle models, carefully selected to meet the exacting needs of large corporate houses & customer on leisure.</p>
                                <div className="profile-image">
                                    <img src={profile3} className="testimonial-image " alt="" />
                                    <h5>Brandon K. Allen</h5>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <FontAwesomeIcon icon={faAngleLeft} className="angleLeft" style={{"color": "red", "font-size": "40px"}}/>
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next next-button" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <FontAwesomeIcon icon={faAngleRight} className="angleRight" style={{"color": "red", "font-size": "40px"}} />
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;