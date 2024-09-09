import { useState } from 'react';
import styles from '../styles/CurrentStatus.module.css';

export default function CurrentStatus({ title, data, isCurrent }) {
  const [expanded, setExpanded] = useState(false);

  // Sort data by startDate before displaying it
  const sortedData = [...data].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  // Function to toggle the table between expanded and collapsed
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // If expanded, show all data; if not, show only the first 5 rows
  const rowsToDisplay = expanded ? sortedData : sortedData.slice(0, 5);

  return (
    <div className={isCurrent ? styles.currentStatus : styles.previousStatus}>
      <h2>{title}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project name</th>
            <th>Start date</th>
            <th>{isCurrent ? '% Completed' : 'Total Issues'}</th>
            <th>End Date</th>
            <th>Total Hours</th>
            <th>Project Owner</th>
            <th>Team Members</th>
          </tr>
        </thead>
        <tbody>
          {rowsToDisplay.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.startDate}</td>
              <td>{row.status}</td>
              <td>{row.endDate}</td>
              <td>{row.totalhours}</td>
              <td>{row.projectOwner}</td>
              <td>{row.teamMembers.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Button to toggle table visibility */}
      <button onClick={toggleExpanded} className={styles.toggleButton}>
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}
