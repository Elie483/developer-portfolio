import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'Hotel Management System',
    description:
      'A full-stack hotel management application for managing rooms, guests, reservations, check-ins, check-outs and payments.',
    problem:
      'Hotel staff often managed guest, room, and payment data across separate, disconnected tools — making it easy to lose track of bookings and hard to get a clear, up-to-date view of operations.',
    solution:
      'I built a centralized system where rooms, guests, reservations, check-ins/check-outs, and payments all live in one place, accessible through a single, secure interface.',
    architecture:
      'A React + TypeScript frontend communicates with a Spring Boot REST API, backed by a PostgreSQL database with Flyway migrations, using JWT for authentication.',
    challenges:
      'The hardest part was the booking logic — making sure two guests could never be booked into the same room for overlapping dates, which required careful handling of date ranges and validation on both the frontend and backend.',
    whatLearned:
      'Building this end-to-end taught me how to structure a real, production-style full-stack application — not just a tutorial project — including how the frontend, backend, and database all need to work together consistently under real-world edge cases.',
    technologies: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'JWT', 'Flyway'],
    keyFeatures: [
      'Room and guest management',
      'Reservation booking and tracking',
      'Check-in / check-out workflow',
      'Payment handling',
      'Secure authentication with JWT',
    ],
    githubUrl: 'https://github.com/Elie483/hotel-management-system',
    // liveUrl omitted — no live demo yet
    // image omitted — add a screenshot later, see instructions
  },
];