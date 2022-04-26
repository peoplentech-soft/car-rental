import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faCar, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className="WhyChooseUs">
            <div className="whyChooseUsContainer container-brand">
                <div className="whyChooseUsContainerTittle">
                    <h2>Why Choose Us</h2>
                    <p>Explore our first class limousine & car rental services</p>
                    <div className="hr"><hr /></div>
                </div>

                <div className="content-container">
                    <div className="row content-items">
                        <div className="col-md-4 col-12 content-item">
                            <div className="item shadow">
                                <FontAwesomeIcon icon={faCar} className="content-item-icon" />
                                <h4>Varity Car Brands</h4>
                                <div className="content-item-hr"><hr /></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur assumenda odit fugit voluptatum aperiam enim. Quis facilis consequuntur ex?</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 content-item">
                            <div className="item shadow">
                                <FontAwesomeIcon icon={faFaceSmile} className="content-item-icon" />
                                <h4>Best Rate Guarantee</h4>
                                <div className="content-item-hr"><hr /></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur assumenda odit fugit voluptatum aperiam enim. Quis facilis consequuntur ex?</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 content-item">
                            <div className="item shadow">
                                <FontAwesomeIcon icon={faPhoneFlip} className="content-item-icon" />
                                <h4>Customer Support</h4>
                                <div className="content-item-hr"><hr /></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur assumenda odit fugit voluptatum aperiam enim. Quis facilis consequuntur ex?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;