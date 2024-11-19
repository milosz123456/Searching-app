import React, { useState } from 'react';
import TeamSearch from './TeamSearch'; // This will be the team search input component
import PlayerSearch from './PlayerSearch'; // New player search component
import Loading from './Loading';

function Search() {
    const [team, setTeam] = useState(null);
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTeam = async (teamName) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch team');
            }
            const data = await response.json();
            if (data.teams && data.teams.length > 0) {
                setTeam(data.teams[0]);
                setError(null);
            } else {
                setTeam(null);
                setError('No team found with that name.');
            }
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
        } 
    };

    const fetchPlayer = async (playerName) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch player');
            }
            const data = await response.json();
            if (data.player && data.player.length > 0) {
                setPlayer(data.player[0]);
                setError(null);
            } else {
                setPlayer(null);
                setError('No player found with that name.');
            }
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Search for a Team or Player</h1>
            <TeamSearch onSearch={fetchTeam} />
            <PlayerSearch onSearch={fetchPlayer} />
            {isLoading && <Loading />}
            
            
            {/* Display Team Information */}
            {team && (
                <div>
                    <h2>Team: {team.strTeam}</h2>
                    <img src={teams.strLogo} />
                    <p><strong>Founded:</strong> {team.intFormedYear}</p>
                    <p><strong>Stadium:</strong> {team.strStadium}</p>
                    <p><strong>Capacity:</strong> {team.intStadiumCapacity}</p>
                    <p><strong>Website:</strong> <a href={`http://${team.strWebsite}`} target="_blank" rel="noopener noreferrer">{team.strWebsite}</a></p>
                    <p><strong>Description:</strong> {team.strDescriptionEN}</p>
                </div>
            )}

            {/* Display Player Information */}
            {player && (
                <div>
                    <h2>Player: {player.strPlayer}</h2>
                    <p><strong>Position:</strong> {player.strPosition}</p>
                    <p><strong>Nationality:</strong> {player.strNationality}</p>
                    <p><strong>Birth Date:</strong> {player.dateBorn}</p>
                    <p><strong>Description:</strong> {player.strDescriptionEN}</p>
                </div>
            )}
        </div>
    );
}

export default Search;