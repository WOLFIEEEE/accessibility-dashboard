import styles from '../styles/CurrentStatus.module.css';

export default function PreviousProjects({ title, data, isCurrent }) {
  return (
    <div className={styles.currentStatus}>
      <h2>{title}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Project Owner</th>
            <th>Total Issues</th>
            <th>Critical</th>
            <th>High</th>
            <th>Medium</th>
            <th>Low</th>
            <th>Accessibility Score</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.projectOwner}</td>
              <td>{row.totalIssuesData}</td>
              <td>{row.critical}</td>
              <td>{row.high}</td>
              <td>{row.medium}</td>
              <td>{row.low}</td>
              <td>{row.accessibilityScore}</td>
              <td>{row.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
