import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
function PlayerDetails() {
    const { playerId } = useParams();
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPlayerDetails = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${playerId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch player details');
                }
                const data = await response.json();
                if (data.players && data.players.length > 0) {
                    setPlayer(data.players[0]);
                } else {
                    setError('Player not found.');
                }
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPlayerDetails();
    }, [playerId]);

    return (
        <div>
            {isLoading && <Loading/>}
            {player && (
                <div>
                    <h1>{player.strPlayer}</h1>
                    <img src={player.strThumb} alt={player.strPlayer} />
                    <p><strong>Position:</strong> {player.strPosition}</p>
                    <p><strong>Team:</strong> {player.strTeam}</p>
                    <p><strong>Nationality:</strong> {player.strNationality}</p>
                    <p><strong>Description:</strong> {player.strDescriptionEN}</p>
                </div>
            )}
        </div>
    );
}

export default PlayerDetails;