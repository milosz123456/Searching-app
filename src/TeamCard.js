import React from 'react';

function TeamCard({ team }) {
   
    return (
        <div className="card">
            <h2>{team.strTeam}</h2>
            <img src={teams.strLogo} />
            <p><strong>Founded:</strong> {team.intFormedYear}</p>
            <p><strong>Stadium:</strong> {team.strStadium}</p>
            <p><strong>Capacity:</strong> {team.intStadiumCapacity}</p>
            <p><strong>Website:</strong> <a href={`http://${team.strWebsite}`} target="_blank" rel="noopener noreferrer">{team.strWebsite}</a></p>
        </div>
    );
}

export default TeamCard;