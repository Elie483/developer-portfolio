export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Spring Security', 'REST APIs', 'JPA / Hibernate', 'Maven'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman'],
  },
];