import styles from '../styles/HomePage.module.css';

export default function StatusTable({ title, data, isCurrent }) {
  return (
    <div className={isCurrent ? styles.currentStatus : styles.previousStatus}>
      <h2>{title}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project name</th>
            <th>Start date</th>
            <th>{isCurrent ? '% Completed' : 'Total Issues'}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.startDate}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className={styles.tableFooter}>
              <button className={styles.button}>See all</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
