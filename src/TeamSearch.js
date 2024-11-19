import React, { useState } from 'react';
import Loading from './Loading';
function TeamSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const handleSearch = async () => {
        setIsLoading(true);   
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${searchTerm}`);
            const data = await response.json();
            if (data.teams) {
                setTeams(data.teams);
                setError('');
            } else {
                setTeams([]);
                setError('No teams found.');
            }
            setIsLoading(false);
        } catch (err) {
            setError('Error fetching data. Please try again.');
        }
    };

    return (
        <div>

            
            <h2>Search for Teams</h2>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter team name" />
            <button onClick={handleSearch}>Search</button>
            <div>
                {teams.length > 0 ? (
                    teams.map(team => (
                        <div key={team.idTeam} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                            <h3>{team.strTeam}</h3>
                            <img src={team.strBadge} />
                            <p><strong>League:</strong> {team.strLeague}</p>
                            <p><strong>Stadium:</strong> {team.strStadium}</p>
                            <p><strong>Description:</strong> {team.strDescriptionEN || 'No description available.'}</p>
                            <p><strong>Founded:</strong> {team.intFormedYear}</p>
                            <p><strong>Country:</strong> {team.strCountry}</p>
                        </div>
                    ))
                ) : (
                    <p>No teams found.</p>
                )}
            </div>
        </div>
    );
}

export default TeamSearch;