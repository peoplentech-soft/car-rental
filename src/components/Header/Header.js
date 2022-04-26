import React from 'react';
import Booking from '../Booking/Booking';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="row header-container container-brand">
                <div className="col-md-6 header-content">
                    <h1>Easy and Fastest way to rental, buy & sell car on our platform</h1>
                    <p>We will help you to sell or buy your dream car hera easily and quickly that is reliable.</p>


                    {/* Input Car Details start*/}
                    {/* <div className="car-details d-flex align-items-center">
                        <div className="pick-up me-3">
                            <input type="date" id="pickUp" /> <br />
                            <label htmlFor="pickUp"> Pick-up date</label>
                        </div>

                        <div className="drop-off">
                            <input type="date" id="dropOff" /> <br />
                            <label htmlFor="dropOff">Drop-off date</label>
                        </div>
                    </div>


                    <div className="find-button mt-3">
                        <button className="btn button-brand">Find It Now</button>
                    </div> */}
                    {/* Car details ends */}
                </div>
                <div className="col-md-6 header-banner"></div>
            </div>



            {/* Booking Component */}
            <Booking />






        </div>
    );
};

export default Header;