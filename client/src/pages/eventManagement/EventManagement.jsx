import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/event/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/event/delete/${id}`)
      .then(() => {
        setEvents(events.filter(event => event._id !== id));
      })
      .catch(error => console.error('Error deleting event:', error));
  };

  const handleEdit = (id) => {
    // Navigate to the edit page
    navigate(`/event/edit/${id}`);
  };

  return (
    <div>
      <h1>Event Management</h1>
      <button onClick={()=>navigate('/event/add')}>Add Event</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Start Date</th>
            <th>End Time</th>
            <th>Category</th>
            <th>Capacity</th>
            <th>Location</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event._id}>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{new Date(event.start_date).toLocaleDateString()}</td>
              <td>{new Date(event.end_time).toLocaleDateString()}</td>
              <td>{event.category}</td>
              <td>{event.capacity}</td>
              <td>{event.location}</td>
              <td>${event.price}</td>
              <td>
                <button onClick={() => handleEdit(event._id)}>Edit</button>
                <button onClick={() => handleDelete(event._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Inline CSS */}
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }

        table, th, td {
          border: 1px solid #ddd;
        }

        th, td {
          padding: 8px;
          text-align: left;
        }

        th {
          background-color: #f2f2f2;
        }

        button {
          margin: 0 5px;
        }
      `}</style>
    </div>
  );
};

export default EventManagement;
