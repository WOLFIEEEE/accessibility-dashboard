// src/app/page.js
import Image from 'next/image';
import styles from '../../styles/HomePage.module.css';  // Adjusted path

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to the Accessibility Dashboard</h1>
        <p>This is your home page.</p>
      </header>
      <main className={styles.main}>
        <p>Here is where you can add your main content.</p>
        <Image
          src="/path/to/your/image.jpg" // Replace with your image path
          alt="A descriptive alt text"
          width={500}
          height={300}
        />
      </main>
      <footer className={styles.footer}>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
}
