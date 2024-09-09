"use client";
// src/app/page.js
import Sidebar from '../components/Sidebar'; // Adjusted path
import Header from '../components/Header';
import StatusTable from '../components/StatusTable';
import PieChart from '../components/PieChart';
import styles from '../styles/HomePage.module.css';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/my.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Fetching data failed:', error);
      }
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
          <StatusTable title="Current Status" data={data.currentProjects} isCurrent={true} />
          <StatusTable title="Previous Status" data={data.previousProjects} isCurrent={false} />
        </div>
        <div className={styles.footer}>
          <PieChart title="Total Issues" data={data.totalIssuesData} />
          <PieChart title="Total Projects" data={data.totalProjectsData} />
          <PieChart title="Teams" data={data.teamsData} />
        </div>
      </div>
    </div>
  );
}
