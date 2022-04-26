import React from 'react';
import './Booking.css';

const Booking = () => {
    return (
        <div>
            <div id="booking" class="section">
                <div class="section-center">
                    <div class="container-brand">
                        <div class="">
                            <div class="booking-form shadow">
                                <form>
                                    <div class="row no-margin">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <span class="form-label">Pick Point</span>
                                                <input class="form-control" type="text" placeholder="Country, ZIP, city..."/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row no-margin">
                                                <div class="col-md-5">
                                                    <div class="form-group">
                                                        <span class="form-label">Check In</span>
                                                        <input class="form-control" type="date" required/>
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="form-group">
                                                        <span class="form-label">Check out</span>
                                                        <input class="form-control" type="date" required/>
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <span class="form-label">Person</span>
                                                        <select class="form-control">
                                                            <option>2</option>
                                                            <option>4</option>
                                                            <option>6</option>
                                                            <option>10</option>
                                                        </select>
                                                        <span class="select-arrow"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-btn">
                                                <button class="submit-btn">Check availability</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;