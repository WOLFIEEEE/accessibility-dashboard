import Image from 'next/image';
import styles from '../styles/HomePage.module.css';
import logo from '/public/images/g851.png';
import dashboardIcon from '/public/images/Union.png';
import currentProjectIcon from '/public/images/cproject.png';
import previousProjectIcon from '/public/images/previous.png';
import scheduledProjectIcon from '/public/images/scheduled.png';
import submitARequestIcon from '/public/images/submit.png';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarItem}>
          <a href="/dashboard1" className={styles.sidebarLink}>
            <Image src={dashboardIcon} alt="Dashboard Icon" className={styles.icon} width={24} height={24} />
            Dashboard
          </a>
        </li>
        <li className={styles.sidebarItem}>
          <a href="/dashboard1" className={styles.sidebarLink}>
            <Image src={currentProjectIcon} alt="Current Projects Icon" className={styles.icon} width={24} height={24} />
            Current Projects
          </a>
        </li>
        <li className={styles.sidebarItem}>
          <a href="/dashboard2" className={styles.sidebarLink}>
            <Image src={previousProjectIcon} alt="Previous Projects Icon" className={styles.icon} width={24} height={24} />
            Previous Projects
          </a>
        </li>
        <li className={styles.sidebarItem}>
          <a href="/dashboard3" className={styles.sidebarLink}>
            <Image src={scheduledProjectIcon} alt="Scheduled Projects Icon" className={styles.icon} width={24} height={24} />
            Scheduled Projects
          </a>
        </li>
        <li className={styles.sidebarItem}>
          <a href="" className={styles.sidebarLink}>
            <Image src={submitARequestIcon} alt="Submit A Request Icon" className={styles.icon} width={24} height={24} />
            Submit A Request
          </a>
        </li>
      </ul>
    </div>
  );
}
