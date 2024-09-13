// pages/HomePage.js
"use client";

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import StatusTable from '../../components/StatusTable';
import PieChart from '../../components/PieChart';
import styles from '../../styles/HomePage.module.css';

export default function HomePage() {
  const currentProjects = [
    { name: 'Project 1', startDate: '2 May 2024', status: '20%' },
    { name: 'Project 2', startDate: '2 Aug 2024', status: '40%' },
    { name: 'Project 3', startDate: '2 Mar 2024', status: '50%' },
  ];

  const previousProjects = [
    { name: 'Project 1', startDate: '2 Apr 2021', status: '1065' },
    { name: 'Project 2', startDate: '5 May 2023', status: '106' },
    { name: 'Project 3', startDate: '2 May 2020', status: '247' }
  ];

  const totalIssuesData = {
    labels: ['', '', '', ''],
    datasets: [
      {
        label: '# of Issues',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const totalProjectsData = {
    labels: ['', ''],
    datasets: [
      {
        data: [172, 190],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 0,
      },
    ],
  };

  const teamsData = {
    labels: ['', '', ''],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <div className={styles.main}>
          <StatusTable title="Current Status" data={currentProjects} isCurrent={true} />
          <StatusTable title="Previous Status" data={previousProjects} isCurrent={false} />
        </div>
        {/* <hr className={styles.separator} /> */}
        <div className={styles.footer}>
          <PieChart title="Total Issues" data={totalIssuesData} />
          <PieChart title="Total Projects" data={totalProjectsData} />
          <PieChart title="Teams" data={teamsData} />
        </div>
      </div>
    </div>
  );
}
