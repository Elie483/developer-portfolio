export type Service = {
  title: string;
  description: string;
  icon: 'Globe' | 'Server' | 'Webhook' | 'Database' | 'Wrench' | 'Network';
};

export const services: Service[] = [
  {
    title: 'Web Application Development',
    description:
      'Building responsive, full-stack web applications using modern frameworks like React and Spring Boot.',
    icon: 'Globe',
  },
  {
    title: 'Backend Development',
    description:
      'Designing and building reliable server-side systems and business logic with Java and Spring Boot.',
    icon: 'Server',
  },
  {
    title: 'REST API Development',
    description:
      'Creating clean, well-structured REST APIs for web and mobile applications to consume.',
    icon: 'Webhook',
  },
  {
    title: 'Database Design',
    description:
      'Designing relational database schemas and writing efficient queries using PostgreSQL and MySQL.',
    icon: 'Database',
  },
  {
    title: 'Technical / IT Consulting',
    description:
      'Assessing hardware/software setups, troubleshooting issues, and recommending practical improvements.',
    icon: 'Wrench',
  },
  {
    title: 'Switching & Routing',
    description:
      'Configuring and troubleshooting network infrastructure, including switches and routers.',
    icon: 'Network',
  },
];