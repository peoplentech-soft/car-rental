import React from 'react';
import './RentalService.css';
import rentalImg from '../../img/rentalService/rental-img.png';

const RentalService = () => {
    return (
        <div className="Rental__Service">
            <div className="rental-service-container container-brand">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-md-6 rental-description">
                        <h2>Best Car Rental Service</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempore dolor iure vel quis amet aliquam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet at perspiciatis deleniti est dolores assumenda asperiores iste mollitia veniam sed, eos excepturi quia rem aspernatur quibusdam odit, nemo odio facilis culpa praesentium. Aliquam nesciunt tenetur consequuntur vero voluptates cupiditate!</p>
                    </div>
                    <div className="col-md-6 rental-image">
                        <img src={rentalImg} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalService;