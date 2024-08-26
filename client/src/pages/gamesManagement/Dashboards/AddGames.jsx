import React from 'react';

const AddGames = () => {
    return (
        <div className="add-games">
            <form>
                <div className="form-group">
                    <label>Category:</label>
                    <select>
                        <option value="">Select category</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Puzzle">Puzzle</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
                
                <div className="form-group">
                    <label>Upload Photo:</label>
                    <input type="file" className="upload-photo" />
                </div>

                <div className="form-group">
                    <label>Game Name:</label>
                    <input type="text" placeholder="Game Name" />
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" placeholder="Description" />
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input type="number" placeholder="Price" />
                </div>

                <button type="submit" className="add-button">Add</button>
            </form>
        </div>
    );
};

export default AddGames;
