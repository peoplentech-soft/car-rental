import React from 'react';
import './KeyFeatures.css';

const KeyFeatures = () => {
    return (
        <div className="key-features">
            <div className="key-features-container container-brand">
                <h2>Key Features</h2>

                <div class="row features-container">
                    <div class="col-sm-4">
                        <div class="card feature-item">
                            <div class="card-body shadow">

                                <h5 class="card-title">Fast & Easy Booking</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis error dicta magnam obcaecati asperiores molestiae ab deleniti eaque saepe!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card feature-item">
                            <div class="card-body shadow">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card feature-item">
                            <div class="card-body shadow">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;