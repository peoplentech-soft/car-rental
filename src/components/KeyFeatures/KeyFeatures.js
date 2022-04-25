import React from 'react';
import './KeyFeatures.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faClock, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'

const KeyFeatures = () => {
    return (
        <div className="Key__Features">
            <div className="key-features-container container-brand">
                <h2>Key Features</h2>

                <div class="row features-container">
                    <div class="col-sm-4 feature-item">
                        <div class="card">
                            <div class="card-body shadow">
                                <FontAwesomeIcon icon={faClock} className="feature-icon"/>
                                <h5 class="card-title">Fast & Easy Booking</h5>
                                <div className="feature-title-border">
                                    <hr />
                                </div>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis error dicta magnam obcaecati asperiores molestiae ab deleniti eaque saepe!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 feature-item">
                        <div class="card">
                            <div class="card-body shadow">
                                <FontAwesomeIcon icon={faCar} className="feature-icon"/>
                                <h5 class="card-title">Many Pickup Locations</h5>
                                <div className="feature-title-border">
                                    <hr />
                                </div>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis error dicta magnam obcaecati asperiores molestiae ab deleniti eaque saepe!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 feature-item">
                        <div class="card">
                            <div class="card-body shadow">
                                <FontAwesomeIcon icon={faMoneyCheckDollar} className="feature-icon"/>
                                <h5 class="card-title">No Booking Charges</h5>
                                <div className="feature-title-border">
                                    <hr />
                                </div>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis error dicta magnam obcaecati asperiores molestiae ab deleniti eaque saepe!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;