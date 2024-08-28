import React from 'react';

const AvailableTimes = () => {
    // Example data, replace this with your actual data source
    const times = [
        { id: 'G001', game: 'Game 1', bookingTime: '10:00 AM', availableTime: '2 hours', date: '2024-08-25' },
        { id: 'G002', game: 'Game 2', bookingTime: '12:00 PM', availableTime: '3 hours', date: '2024-08-25' },
        { id: 'G003', game: 'Game 3', bookingTime: '02:00 PM', availableTime: '1 hour', date: '2024-08-25' },
    ];

    return (
        <div style={styles.pageContainer}>
            <div style={styles.sidebar}>
                <ul style={styles.sidebarMenu}>
                    <li style={styles.sidebarMenuItem}>Add Games</li>
                    <li style={styles.sidebarMenuItemActive}>Games Details</li>
                    <li style={styles.sidebarMenuItem}>Available Times</li>
                    <li style={styles.sidebarMenuItem}>Feedback Details</li>
                    <li style={styles.sidebarMenuItem}>Rating Details</li>
                </ul>
            </div>
            <div style={styles.content}>
                <div style={styles.header}>
                    <h2>Available Times</h2>
                </div>
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.tableHeader}>ID</th>
                                <th style={styles.tableHeader}>Game Name</th>
                                <th style={styles.tableHeader}>Booking Time</th>
                                <th style={styles.tableHeader}>Available Time</th>
                                <th style={styles.tableHeader}>Date</th>
                                <th style={styles.tableHeader}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {times.map(time => (
                                <tr key={time.id} style={styles.tableRow}>
                                    <td style={styles.tableCell}>{time.id}</td>
                                    <td style={styles.tableCell}>{time.game}</td>
                                    <td style={styles.tableCell}>{time.bookingTime}</td>
                                    <td style={styles.tableCell}>{time.availableTime}</td>
                                    <td style={styles.tableCell}>{time.date}</td>
                                    <td style={styles.tableCell}>
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#161E38',
        color: '#fff',
    },
    sidebar: {
        width: '250px',
        backgroundColor: '#1B2138',
        padding: '20px',
    },
    sidebarMenu: {
        listStyleType: 'none',
        padding: 0,
    },
    sidebarMenuItem: {
        padding: '10px 20px',
        color: '#fff',
        cursor: 'pointer',
    },
    sidebarMenuItemActive: {
        padding: '10px 20px',
        color: '#FFD700',
        cursor: 'pointer',
        backgroundColor: '#1E2749',
        borderRadius: '5px',
    },
    content: {
        flex: 1,
        padding: '20px',
    },
    header: {
        marginBottom: '20px',
    },
    tableContainer: {
        backgroundColor: '#1E2749',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    tableHeader: {
        padding: '10px',
        backgroundColor: '#2C3354',
        color: '#FFD700',
        textAlign: 'left',
    },
    tableRow: {
        backgroundColor: '#243055',
    },
    tableCell: {
        padding: '10px',
        borderBottom: '1px solid #2C3354',
    },
    deleteButton: {
        backgroundColor: '#FF4C4C',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default AvailableTimes;
