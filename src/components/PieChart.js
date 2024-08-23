"use client";

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from '../styles/HomePage.module.css';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ title, data }) {
  return (
    <div className={styles.chartContainer}>
      <h3>{title}</h3>
      <Pie data={data} />
    </div>
  );
}
