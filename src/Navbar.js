import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Sports Search</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/player-search" class="nav-link">Player Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/team-search" class="nav-link">Team Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/league-search" class="nav-link">League Search</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;