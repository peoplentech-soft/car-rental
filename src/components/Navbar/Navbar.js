import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid nav-container">
                <a class="navbar-brand" href="#/"><strong>PickCar</strong></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#/">Home</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#/">Service</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#/">Testimonial</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#/">Blog</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/">Get App</a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;