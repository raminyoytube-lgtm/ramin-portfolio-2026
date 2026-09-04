export interface PersonalInfo {
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  email: string;
  phone: string;
  location: string;
  locationEn: string;
  yearsExperience: number;
  projectsCount: number;
  clientsCount: number;
}

export interface Skill {
  id: string;
  name: string;
  nameEn: string;
  category: 'design' | 'development' | 'tools';
  categoryEn: string;
  level: number;
  icon?: string;
}

export interface Experience {
  id: string;
  year: number;
  title: string;
  titleEn: string;
  company: string;
  companyEn: string;
  description: string;
  descriptionEn: string;
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: string;
  categoryEn: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  detailed?: ProjectDetail;
}

export interface ProjectDetail {
  overview: string;
  overviewEn: string;
  challenge: string;
  challengeEn: string;
  solution: string;
  solutionEn: string;
  result: string;
  resultEn: string;
  gallery?: string[];
}

export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  positionEn: string;
  company: string;
  companyEn: string;
  text: string;
  textEn: string;
  image?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}
