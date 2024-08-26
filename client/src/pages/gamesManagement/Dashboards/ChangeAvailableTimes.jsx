import React, { useState } from 'react';

const ChangeAvailableTimes = () => {
    const [gameId, setGameId] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [availableDays, setAvailableDays] = useState('');

    const handleSave = () => {
        // Add logic to handle saving the data
        console.log({
            gameId,
            startTime,
            endTime,
            availableDays
        });
    };

    return (
        <div className="change-available-times">
            <form>
                <div className="form-group">
                    <label>Game ID:</label>
                    <select value={gameId} onChange={(e) => setGameId(e.target.value)}>
                        <option value="">Select Game ID</option>
                        <option value="G001">G001</option>
                        <option value="G002">G002</option>
                        <option value="G003">G003</option>
                        {/* Add more Game IDs as needed */}
                    </select>
                </div>

                <div className="form-group">
                    <label>Start Time:</label>
                    <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>End Time:</label>
                    <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Available Days:</label>
                    <select value={availableDays} onChange={(e) => setAvailableDays(e.target.value)}>
                        <option value="">Select Days</option>
                        <option value="Weekdays">Weekdays</option>
                        <option value="Weekends">Weekends</option>
                        <option value="All Days">All Days</option>
                    </select>
                </div>

                <button type="button" className="save-button" onClick={handleSave}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default ChangeAvailableTimes;
