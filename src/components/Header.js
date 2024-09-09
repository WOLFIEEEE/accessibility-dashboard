import styles from '../styles/HomePage.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Accessibility Dashboard</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        className={styles.searchBar} 
      />
    </div>
  );
}

