import React from 'react';

const GamesDetails = () => {
    // Example data, replace this with your actual data source
    const games = [
        { id: 'G001', category: 'Action', name: 'Game 1', description: 'An action-packed adventure', price: '$20' },
        { id: 'G002', category: 'Puzzle', name: 'Game 2', description: 'A mind-bending puzzle', price: '$15' },
        { id: 'G003', category: 'Adventure', name: 'Game 3', description: 'Explore new worlds', price: '$30' },
    ];

    return (
        <div className="games-details">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Game Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map(game => (
                        <tr key={game.id}>
                            <td>{game.id}</td>
                            <td>{game.category}</td>
                            <td>{game.name}</td>
                            <td>{game.description}</td>
                            <td>{game.price}</td>
                            <td><button className="edit-button">Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GamesDetails;
