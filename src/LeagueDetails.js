import React, { useState, useEffect } from 'react';
import Loading from "./Loading";

function LeagueDetails() {
    const [leagues, setLeagues] = useState([]);
    const [teamsByLeague, setTeamsByLeague] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLeagues = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const leagueResponse = await fetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php');
                if (!leagueResponse.ok) {
                    throw new Error('Failed to fetch leagues');
                }
                const leagueData = await leagueResponse.json();
                if (leagueData.leagues) {
                    setLeagues(leagueData.leagues);
                } else {
                    setLeagues([]);
                    setError('No leagues found.');
                }

                // Fetch teams for each league using a for loop
                const teamsByLeague = {};
                for (let i = 0; i < leagueData.leagues.length; i++) {
                    const league = leagueData.leagues[i];
                    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookup_all_teams.php?id=${league.idLeague}`);
                    const data = await response.json();
                    teamsByLeague[league.strLeague] = data.teams || [];
                }

                setTeamsByLeague(teamsByLeague);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchLeagues();
    }, []);

    return (
        <div>
            <h1>All Teams by League</h1>

            {isLoading && <Loading />}

            {Object.keys(teamsByLeague).length > 0 ? (
                teamsByLeague.map((league, index) => (
                    <div key={index}>
                        <h2>{league}</h2>
                        <ul>
                            {teamsByLeague[league].map((team) => (
                                <li key={team.idTeam}>
                                    <h3>{team.strTeam}</h3>
                                    <p>{team.strDescriptionEN}</p>
                                    <img src={team.strTeamBadge} alt={`${team.strTeam} badge`} style={{ width: '50px' }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>No teams available.</p>
            )}
        </div>
    );
}

export default LeagueDetails;