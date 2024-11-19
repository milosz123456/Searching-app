import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import PlayerSearch from './PlayerSearch';
import TeamSearch from './TeamSearch';
import LeagueSearch from './LeagueSearch';
import LeagueDetails from './LeagueDetails';
import PlayerDetails from './PlayerDetails';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/player-search" element={<PlayerSearch />} />
                    <Route path="/team-search" element={<TeamSearch />} />
                    <Route path="/league-search" element={<LeagueSearch />} />
                    <Route path="/league-details/:leagueId" element={<LeagueDetails />} />
                    <Route path="/player-details/:playerId" element={<PlayerDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;