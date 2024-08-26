import React from 'react';

const FeedbackDetails = () => {
    // Example data, replace this with your actual data source
    const feedbacks = [
        { id: 'F001', gameName: 'Game 1', user: 'John Doe', feedback: 'Great game!', date: '2024-08-24' },
        { id: 'F002', gameName: 'Game 2', user: 'Jane Smith', feedback: 'Needs improvement.', date: '2024-08-25' },
        { id: 'F003', gameName: 'Game 3', user: 'Alice Brown', feedback: 'Loved the graphics!', date: '2024-08-26' },
    ];

    return (
        <div className="feedback-details">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Game Name</th>
                        <th>User</th>
                        <th>Feedback</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((feedback) => (
                        <tr key={feedback.id}>
                            <td>{feedback.id}</td>
                            <td>{feedback.gameName}</td>
                            <td>{feedback.user}</td>
                            <td>{feedback.feedback}</td>
                            <td>{feedback.date}</td>
                            <td><button className="delete-button">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeedbackDetails;
