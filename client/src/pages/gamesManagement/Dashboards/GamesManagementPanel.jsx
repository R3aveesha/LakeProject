import React, { useState } from 'react';
import AddGames from './AddGames';
import GamesDetails from './GamesDetails';
import AvailableTimes from './AvailableTimes';
import ChangeAvailableTimes from './ChangeAvailableTimes';
import RatingDetails from './RatingDetails';
import FeedbackDetails from './FeedbackDetails';

const GamesManagementPanel = () => {
    const [activePage, setActivePage] = useState('AddGames');

    const renderActivePage = () => {
        switch (activePage) {
            case 'GamesDetails':
                return <GamesDetails />;
            case 'AvailableTimes':
                return <AvailableTimes />;
            case 'ChangeAvailableTimes':
                return <ChangeAvailableTimes />;
            case 'RatingDetails':
                return <RatingDetails />;
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
                <button onClick={() => setActivePage('RatingDetails')}>Rating Details</button>
                <button onClick={() => setActivePage('FeedbackDetails')}>Feedback Details</button>
            </div>
            <div className="content">
                {renderActivePage()}
            </div>
        </div>
    );
};

export default GamesManagementPanel;
