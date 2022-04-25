import React from 'react';
import './RentalFleets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faClock, faRoad, faTimes } from '@fortawesome/free-solid-svg-icons';
import fordRaptor from '../../img/rentalFleets/ford-raptor.jpg';
import fordMustang from '../../img/rentalFleets/ford-mustang.jpg';
import fordEcoboost from '../../img/rentalFleets/ford-ecoboost.jpg';
import lamborginiAventador from '../../img/rentalFleets/lamborgini-aventador.jpg';
import huracan from '../../img/rentalFleets/huracan.jpg';
import tron from '../../img/rentalFleets/tron.jpg';

const RentalFleets = () => {
    return (
        <div className="Rental__fleets">
            <div className="rental-fleets-container container-brand">
                <div className="rental-fleets-title">
                    <p>Get Your Choosen One</p>
                    <h2>Our Rental Fleets</h2>
                    <div className="hr"><hr /></div>
                </div>
                <div className="car-card-container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card car-card-item">
                                <img src={fordRaptor} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body shadow">
                                    <h5 class="card-title">AG MC Ford Raptor</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores possimus quia voluptas eveniet nemo cumque!</p>

                                    <div className="car-card-icons">
                                        <div className="year">
                                            <FontAwesomeIcon icon={faCar} />
                                            <br />
                                            2010
                                        </div>
                                        <div className="miles">
                                            <FontAwesomeIcon icon={faRoad} />
                                            <br />
                                            5599
                                        </div>
                                        <div className="cc">
                                            <FontAwesomeIcon icon={faClock} />
                                            <br />
                                            200
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card car-card-item">
                                <img src={fordMustang} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body shadow">
                                    <h5 class="card-title">Ford Mustang GT</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores possimus quia voluptas eveniet nemo cumque!</p>

                                    <div className="car-card-icons">
                                        <div className="year">
                                            <FontAwesomeIcon icon={faCar} />
                                            <br />
                                            2010
                                        </div>
                                        <div className="miles">
                                            <FontAwesomeIcon icon={faRoad} />
                                            <br />
                                            5599
                                        </div>
                                        <div className="cc">
                                            <FontAwesomeIcon icon={faClock} />
                                            <br />
                                            200
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card car-card-item">
                                <img src={fordEcoboost} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body shadow">
                                    <h5 class="card-title">Ford Ecoboost</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores possimus quia voluptas eveniet nemo cumque!</p>

                                    <div className="car-card-icons">
                                        <div className="year">
                                            <FontAwesomeIcon icon={faCar} />
                                            <br />
                                            2010
                                        </div>
                                        <div className="miles">
                                            <FontAwesomeIcon icon={faRoad} />
                                            <br />
                                            5599
                                        </div>
                                        <div className="cc">
                                            <FontAwesomeIcon icon={faClock} />
                                            <br />
                                            200
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card car-card-item">
                                <img src={lamborginiAventador} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body shadow">
                                    <h5 class="card-title">Lamborgini Aventador</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores possimus quia voluptas eveniet nemo cumque!</p>

                                    <div className="car-card-icons">
                                        <div className="year">
                                            <FontAwesomeIcon icon={faCar} />
                                            <br />
                                            2010
                                        </div>
                                        <div className="miles">
                                            <FontAwesomeIcon icon={faRoad} />
                                            <br />
                                            5599
                                        </div>
                                        <div className="cc">
                                            <FontAwesomeIcon icon={faClock} />
                                            <br />
                                            200
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card car-card-item">
                                <img src={huracan} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body shadow">
                                    <h5 class="card-title">Lamborgini Huracan</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores possimus quia voluptas eveniet nemo cumque!</p>

                                    <div className="car-card-icons">
                                        <div className="year">
                                            <FontAwesomeIcon icon={faCar} />
                                            <br />
                                            2010
                                        </div>
                                        <div className="miles">
                                            <FontAwesomeIcon icon={faRoad} />
                                            <br />
                                            5599
                                        </div>
                                        <div className="cc">
                                            <FontAwesomeIcon icon={faClock} />
                                            <br />
                                            200
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card car-card-item">
                                <img src={tron} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body shadow">
                                    <h5 class="card-title">Tron Lamborgini</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores possimus quia voluptas eveniet nemo cumque!</p>

                                    <div className="car-card-icons">
                                        <div className="year">
                                            <FontAwesomeIcon icon={faCar} />
                                            <br />
                                            2010
                                        </div>
                                        <div className="miles">
                                            <FontAwesomeIcon icon={faRoad} />
                                            <br />
                                            5599
                                        </div>
                                        <div className="cc">
                                            <FontAwesomeIcon icon={faClock} />
                                            <br />
                                            200
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalFleets;