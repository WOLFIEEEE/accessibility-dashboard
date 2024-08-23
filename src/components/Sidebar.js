import styles from '../styles/HomePage.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Accessibility Dashboard</h2>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarItem}>Dashboard</li>
        <li className={styles.sidebarItem}>Current Projects</li>
        <li className={styles.sidebarItem}>Previous Projects</li>
        <li className={styles.sidebarItem}>Scheduled Projects</li>
        <li className={styles.sidebarItem}>Submit a request</li>
      </ul>
    </div>
  );
}
