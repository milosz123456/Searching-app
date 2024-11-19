import React from 'react';

function Home() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to Sports Search!</h1>
            <p>
                Sports Search is your go-to platform for discovering everything related to sports. 
                Whether you're a die-hard fan or just curious, we provide you with an easy way to 
                search for players, teams, and leagues from various sports around the world.
            </p>
            <p>
                Our website features:
            </p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>🔍 Comprehensive Player Search: Find detailed profiles of your favorite athletes.</li>
                <li>🏆 Team Search: Explore teams from different sports and their statistics.</li>
                <li>🌍 League Search: Discover leagues and tournaments happening globally.</li>
            </ul>
            <p>
                Get started by using the navigation links above to explore our features!
            </p>
        </div>
    );
}

export default Home;