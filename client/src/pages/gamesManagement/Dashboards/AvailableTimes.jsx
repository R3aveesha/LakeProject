import React from 'react';

const AvailableTimes = () => {
    // Example data, replace this with your actual data source
    const times = [
        { id: 'G001', game: 'Game 1', bookingTime: '10:00 AM', availableTime: '2 hours', date: '2024-08-25' },
        { id: 'G002', game: 'Game 2', bookingTime: '12:00 PM', availableTime: '3 hours', date: '2024-08-25' },
        { id: 'G003', game: 'Game 3', bookingTime: '02:00 PM', availableTime: '1 hour', date: '2024-08-25' },
    ];

    return (
        <div className="available-times">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Game Name</th>
                        <th>Booking Time</th>
                        <th>Available Time</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {times.map(time => (
                        <tr key={time.id}>
                            <td>{time.id}</td>
                            <td>{time.game}</td>
                            <td>{time.bookingTime}</td>
                            <td>{time.availableTime}</td>
                            <td>{time.date}</td>
                            <td><button className="delete-button">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AvailableTimes;
