This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Sneh
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

##Project Descriptiom

# Accessibility Dashboard

This repository contains the source code for the **Accessibility Dashboard**, a project designed to track and manage accessibility issues across various projects within an organization. The dashboard provides a comprehensive view of the current status, previous status, and scheduled projects, along with detailed breakdowns of issues by severity and origin.

## Project Overview

The **Accessibility Dashboard** aims to provide a centralized platform for tracking accessibility-related issues across multiple projects. The dashboard categorizes issues by severity (Low, Medium, High, Critical) and origin (Developer, Designer, etc.). It also includes project management features such as tracking project progress, start and end dates, hours spent, and team assignments.

## Features

- **Project Management:** Track the progress of multiple projects with start/end dates, hours logged, and team members assigned to individual Project.
- **Issue Tracking:** Categorize and manage accessibility issues by severity and origin.
- **Dashboard View:** A comprehensive overview of current, completed, and scheduled projects.
- **Search Functionality:** Easily search through projects and issues.
- **Team Management:** View teams and their assigned tasks within the dashboard.
- **Accessibility COE Team Integration:** Submit requests and manage accessibility compliance through a centralized interface.

[View the Accessibility Dashboard PDF](https://github.com/WOLFIEEEE/Dashboard-Design/blob/main/AccessibilityDashboard.pdf)

## Overview
The Accessibility Dashboard is a comprehensive tool for tracking accessibility-related projects, their progress, issues, and team assignments. It is organized into four primary pages:

### 1. Main Accessibility Dashboard (Page 1)
- **Purpose:** Provides an overarching view of all accessibility projects.
- **Sections:**
  - **Project Overview:** Names of active, previous, and scheduled projects, along with their current and previous statuses.
  - **Project Metrics:** Percentage of completion and total issues identified for each project.
  - **Issues Breakdown:** Distribution of issues by severity (Low, Medium, High, Critical).
  - **Teams & Bug Origin:** Lists teams involved and categorizes the origin of bugs (e.g., Developer, Designer).
  - **Actions:** Includes a search bar for navigation and a request submission option.

### 2. Current Projects (Page 2)
- **Purpose:** Focuses on projects that are currently in progress.
- **Sections:**
  - **Project Details:** Active projects with team/owner names, allocated hours, start and end dates, and current team members.
  - **Ongoing Work:** Highlights the current activities for easy monitoring.
  - **Additional Information:** References to previous and scheduled projects.

### 3. Previous Projects (Page 3)
- **Purpose:** Dedicated to projects that have been completed or are inactive.
- **Sections:**
  - **Project Overview:** Lists past projects with their final accessibility scores.
  - **Accessibility Score:** Compliance score indicating adherence to accessibility standards.
  - **Team Involvement:** Details on teams or individuals responsible for these projects.

### 4. Scheduled Projects (Page 4)
- **Purpose:** Provides an overview of projects planned for the future.
- **Sections:**
  - **Project Details:** Upcoming projects with expected hours, start dates, and current status (e.g., Added to the Queue, Estimation in Progress, Confirmation Pending).
  - **Queue Status:** Displays readiness and scheduling details.
