// src/components/ActivitiesGrid.jsx
import React from 'react';
import ActivityCard from './activitycard';
import styles from './ActivitiesGrid.module.css';

// Images need to be imported or use the appropriate URLs
import image from '/image1.jpg'

const ActivitiesGrid = () => {
  const activities = [
    { image: image, title: 'Bowling' },
    { image: image, title: 'Horse Riding' },
    { image: image, title: 'Archery' },
    { image: image, title: 'Football' },
  ];

  return (
    <div className={styles.gridContainer}>
      {activities.map((activity, index) => (
        <ActivityCard key={index} image={activity.image} title={activity.title} />
      ))}
    </div>
  );
};

export default ActivitiesGrid;
