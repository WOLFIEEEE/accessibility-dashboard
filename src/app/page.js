import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatusTable from '../components/StatusTable';
import PieChart from '../components/PieChart';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  const currentProjects = [
    { name: 'Project 1', startDate: '2 May 2024', status: '20%' },
    { name: 'Project 2', startDate: '2 Aug 2024', status: '40%' },
    { name: 'Project 3', startDate: '2 Mar 2024', status: '50%' },
  ];

  const previousProjects = [
    { name: 'Project 1', startDate: '2 Apr 2021', status: '1065' },
    { name: 'Project 2', startDate: '5 May 2023', status: '106' },
    { name: 'Project 3', startDate: '2 May 2020', status: '247' },
    { name: 'Project 4', startDate: '1 Apr 2022', status: '500' },
    { name: 'Project 5', startDate: '9 Nov 2023', status: '475' },
  ];

  const totalIssuesData = {
    labels: ['Low', 'Medium', 'High', 'Critical'],
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
        borderWidth: 1,
      },
    ],
  };

  const totalProjectsData = {
    labels: ['Current', 'Completed'],
    datasets: [
      {
        data: [172, 190],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const teamsData = {
    labels: ['Capital Market', 'Banking', 'Others'],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
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
        <div className={styles.footer}>
          <PieChart title="Total Issues" data={totalIssuesData} />
          <PieChart title="Total Projects" data={totalProjectsData} />
          <PieChart title="Teams" data={teamsData} />
        </div>
      </div>
    </div>
  );
}
