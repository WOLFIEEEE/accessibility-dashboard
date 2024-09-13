import styles from '../styles/CurrentStatus.module.css';

export default function CurrentStatus({ title, data, isCurrent }) {
  return (
    <div className={styles.currentStatus}>
      <h2>{title}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project name</th>
            <th>Project Owner</th>
            <th>Expected Start Date</th>
            <th>Expected Hours</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.projectOwner}</td>
              <td>{row.expectedStartDate}</td>
              <td>{row.expectedHours}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


