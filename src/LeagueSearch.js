import React, { useState } from 'react';
import Loading from './Loading';
function LeagueSearch() {
    const [leagueName, setLeagueName] = useState('');
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${encodeURIComponent(leagueName)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch teams');
            }
            const data = await response.json();
            if (data.teams) {
                setTeams(data.teams);
            } else {
                setTeams([]);
                setError('No teams found for this league.');
            }
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
        }

    };

    return (
        <div>
            <h1>Search Teams by League</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter league name"
                    value={leagueName}
                    onChange={(e) => setLeagueName(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {isLoading && <Loading/>}

            <ul>
                {teams.length > 0 ? (
                    teams.map((team) => (
                        <li key={team.idTeam}>
                            <img src={team.strBadge} />
                            <h2>{team.strTeam}</h2>
                            <p>{team.strDescriptionEN}</p>
                        </li>
                    ))
                ) : (
                    <p>No teams available.</p>
                )}
            </ul>
        </div>
    );
}

export default LeagueSearch;