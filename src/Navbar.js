import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f9fa' }}>
                <h1>Sports Search</h1>
                <div>
                <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                    <Link to="/player-search" style={{ marginRight: '10px' }}>Player Search</Link>
                    <Link to="/team-search" style={{ marginRight: '10px' }}>Team Search</Link>
                    <Link to="/league-search">League Search</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;