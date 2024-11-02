import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Belden Inc. - R&D Software Developer",
    period: "June 2023 - Present",
    description: [
      "Spearheaded research on the integration of two project management tools into a single unified system, delivering enhanced project tracking efficiency and reducing costs by 80%.",
      "Developed and deployed a SharePoint portal and automated KPI tracking for the PMO, reducing manual reporting by 30% and improving financial visibility and resource management.",
      "Built a Gen AI Copilot tool to solve basic L1 tickets, increasing sales process efficiency by 18%, and won second place in Belden's global hackathon for it.",
      "Serving as Scrum Master for a 12-member team, increasing sprint velocity by 15% while ensuring strong stakeholder alignment and adherence to Agile best practices.",
      "Engineered core frontend components in yFiles, React, and MUI for the Unified Tool UX, accelerating UI scalability and reducing development cycles by 25%.",
    ],
    files: [
      { src: "/files/Hackathon.jpg", type: "image" },
      { src: "/files/Belden.pdf", type: "pdf" },
    ],
  },
  {
    id: 2,
    title: "AICAN - User Experience and Research Intern",
    period: "September 2021 - November 2021",
    description: [
      "Conducted user research, including interviews and surveys, to understand user needs and pain points. Analyzed data to identify design opportunities and improve user interactions with smart controllers, enhancing the overall user experience.",
      "Created intuitive, user-friendly dashboards using data visualization best practices to display real-time data, enabling users to monitor device performance and control operations efficiently. Worked closely with developers to ensure seamless integration and optimal performance of the dashboard features.",
    ],
    files: [{ src: "/files/Aican.pdf", type: "pdf" }],
  },
  {
    id: 3,
    title: "The Breakout Hunt - User Experience Intern",
    period: "June 2021 - August 2021",
    description: [
      "Performed in-depth competitor benchmarking to identify gaps and areas for improvement in user experience. Designed and distributed user surveys to gather feedback on app usability, leading to actionable insights that informed UX design improvements and helped align features with user expectations.",
      "Worked closely with the development team to implement UX design changes based on research findings. Assisted in the iterative design process, including prototyping and testing, to ensure a smooth user flow and visual consistency. Contributed to a successful app launch, enhancing accessibility and satisfaction, with the app now publicly available on Google Playstore.",
    ],
    files: [{ src: "/files/BreakoutHunt.pdf", type: "pdf" }],
  },
  {
    id: 4,
    title: "CDAC - Web Design Developer",
    period: "July 2020 - April 2021",
    description: [
      "Collaborated with the Ministry of Electronics & IT to develop OLABS, a virtual platform that enabled remote STEM education for 10,000+ students during COVID-19.",
      "Designed and launched a virtual chemistry laboratory environment within OLABS that facilitated practical learning for students in remote setups, reaching over 150 schools across India.",
    ],
    files: [{ src: "/files/CDAC.pdf", type: "pdf" }],
  },
];