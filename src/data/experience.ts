import type { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    position: 'Freelance IT Consultant',
    organization: 'KATS School',
    location: 'Kigali, Rwanda',
    startDate: 'Apr 2026',
    endDate: 'Present',
    description:
      'Assessed a 40-computer lab to identify hardware and software bottlenecks and proposed an upgrade and maintenance plan.',
    achievements: [
      'Identified hardware and software bottlenecks across a 40-computer lab',
      'Proposed a solution including new hardware/software purchases',
      'Set up a monthly maintenance visit schedule under a signed contract',
    ],
    technologies: ['IT Troubleshooting', 'Hardware Maintenance', 'Software Maintenance'],
  },
  {
    position: 'Software Developer Intern',
    organization: 'DataSystems',
    location: 'Kigali, Rwanda',
    startDate: 'May 2025',
    endDate: 'Jul 2025',
    description:
      'Worked on multiple projects including E-Shuri, a learning platform, using Spring Boot and Next.js.',
    achievements: [
      'Contributed to E-Shuri, a learning platform built with Java (Spring Boot) and Next.js (Tailwind CSS)',
    ],
    technologies: ['Java', 'Spring Boot', 'Next.js', 'Tailwind CSS'],
  },
  {
    position: 'Software Developer Intern',
    organization: 'Radiant Insurance Company',
    location: 'Kigali, Rwanda',
    startDate: 'Sep 2024',
    endDate: 'Nov 2024',
    description:
      'Collaborated with Radiant developers to test an externally developed insurance application (E-nsure).',
    achievements: [
      'Performed performance testing and bug fixing on the E-nsure application using software testing tools',
    ],
    technologies: ['Software Testing', 'Bug Fixing', 'QA'],
  },
  {
    position: 'Independent Developer',
    organization: 'Personal & Collaborative Projects (GitHub)',
    location: 'Remote',
    startDate: 'Jul 2023',
    endDate: 'Present',
    description:
      'Built and maintained personal and collaborative software projects, including a library management system and a peer-to-peer marketplace.',
    achievements: [
      'Built a Library Management System for AUCA using Spring Boot, React and PostgreSQL',
      'Collaborated on ReMarket, a platform for buying and selling second-hand products',
    ],
    technologies: ['Spring Boot', 'React', 'PostgreSQL'],
  },
];