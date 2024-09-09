// src/app/dashboard1/page.js
"use client";

import Sidebar from '../../components/Sidebar';  // Adjusted path
import Header from '../../components/Header';    // Adjusted path
import styles from '../../styles/HomePage.module.css';  // Adjusted path
import ScheduledProjects from '../../components/ScheduledProjects'; 

import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/my.json'); 
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <div className={styles.main}>
          <ScheduledProjects title="Scheduled Projects" data={data.scheduledProjects} isCurrent={true} />
        </div>
      </div>
    </div>
  );
}