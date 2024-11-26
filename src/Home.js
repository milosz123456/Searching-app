import React from 'react';

function Home() {
    return (
        <div>
            <h1>Welcome to Sports Search!</h1>
            <p>
                Sports Search is your go-to platform for discovering everything related to sports. 
                Whether you're a die-hard fan or just curious, we provide you with an easy way to 
                search for players, teams, and leagues from various sports around the world.
            </p>
            <p>
                Our website features:
            </p>
            <ul>
                <li>🔍 Comprehensive Player Search: Find detailed profiles of your favorite athletes.</li>
                <li>🏆 Team Search: Explore teams from different sports and their statistics.</li>
                <li>🌍 League Search: Discover leagues and tournaments happening globally.</li>
            </ul>
            <p>
                Get started by using the navigation links above to explore our features!
            </p>

            <h2>Using the Application</h2>
            <h3>Navigation</h3>
            <p>Use the Navbar at the top of the page to navigate between different sections:</p>
            <ul>
                <li><strong>Home:</strong> Overview of the Sports Search application.</li>
                <li><strong>Player Search:</strong> Search for players.</li>
                <li><strong>Team Search:</strong> Search for teams.</li>
                <li><strong>League Search:</strong> Search for leagues.</li>
            </ul>

            <h3>Searching for Players</h3>
            <ol>
                <li>Click on the Player Search link in the navbar.</li>
                <li>Enter the full name of the player you want to search for in the input field.</li>
                <li>Click the Search button.</li>
                <li>The application will display a list of players matching your search criteria. Click on a player to view their detailed profile.</li>
            </ol>

            <h3>Searching for Teams</h3>
            <ol>
                <li>Click on the Team Search link in the navbar.</li>
                <li>Enter the full name of the team you want to search for in the input field.</li>
                <li>Click the Search button.</li>
                <li>The application will display a list of teams matching your search criteria.</li>
            </ol>

            <h3>Searching for Leagues</h3>
            <ol>
                <li>Click on the League Search link in the navbar.</li>
                <li>Enter the full name of the league you want to search for (e.g., "English Premier League") in the input field.</li>
                <li>Click the Search button.</li>
                <li>The application will display a list of teams associated with the league you searched for.</li>
            </ol>

            <h3>Viewing League Details</h3>
            <p>After searching for a league, click on the league name to view detailed information about all teams in that league.</p>

            <h3>Viewing Player Details</h3>
            <p>After searching for a player, click on the player's name to view detailed information about the player.</p>
        </div>
    );
}

export default Home;