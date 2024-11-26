import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
function PlayerSearch() {
    const [playerName, setPlayerName] = useState('');
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(playerName)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch players');
            }
            const data = await response.json();
            if (data.player) {
                setPlayers(data.player);
            } else {
                setPlayers([]);
                setError('No players found.');
            }
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
        }
    };

    const handlePlayerClick = (playerId) => {
        navigate(`/player-details/${playerId}`); // Navigate to PlayerDetails with playerId
    };

    return (
        <div>
            <h1>Search Players</h1>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Enter player name" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                <button type="submit">Search</button>
            </form>

            {isLoading && <Loading/>}
            
            <ul>
                {players.length > 0 ? (
                    players.map((player) => (
                        <li key={player.idPlayer} onClick={() => handlePlayerClick(player.idPlayer)} style={{ cursor: 'pointer' }}>
                            <img src={player.strThumb} alt={player.strPlayer} />
                            <h2>{player.strPlayer}</h2>
                        </li>
                    ))
                ) : (
                    <p>No players available.</p>
                )}
            </ul>
        </div>
    );
}

export default PlayerSearch;