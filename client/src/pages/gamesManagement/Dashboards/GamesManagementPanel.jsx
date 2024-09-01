import React, { useState } from 'react';
import AddGames from './AddGames';
import GameDetails from '../Gamedetails';
import AvailableTimes from './AvailableTimes';
import ChangeAvailableTimes from './ChangeAvailableTimes';
import FeedbackDetails from './FeedbackDetails';

const GamesManagementPanel = () => {
    const [activePage, setActivePage] = useState('AddGames');

    const renderActivePage = () => {
        switch (activePage) {
            case 'GamesDetails':
                return <GameDetails />;
            case 'AvailableTimes':
                return <AvailableTimes />;
            case 'ChangeAvailableTimes':
                return <ChangeAvailableTimes />;
            case 'FeedbackDetails':
                return <FeedbackDetails />;
            default:
                return <AddGames />;
        }
    };

    return (
        <div className="games-management-panel">
            <div className="sidebar">
                <button onClick={() => setActivePage('AddGames')}>Add Games</button>
                <button onClick={() => setActivePage('GamesDetails')}>Games Details</button>
                <button onClick={() => setActivePage('AvailableTimes')}>Available Times</button>
                <button onClick={() => setActivePage('ChangeAvailableTimes')}>Change Available Times</button>
                <button onClick={() => setActivePage('FeedbackDetails')}>Feedback Details</button>
            </div>
            <div className="content">
                {renderActivePage()}
            </div>
        </div>
    );
};

export default GamesManagementPanel;
