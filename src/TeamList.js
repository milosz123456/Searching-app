import React from 'react';
import TeamCard from './TeamCard';

function TeamList({ teams }) {
    return (
        <div className="team-list">
            {teams.map((team) => (
                <TeamCard key={team.idTeam} team={team} />
            ))}
        </div>
    );
}

export default TeamList;