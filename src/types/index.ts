export interface Theme {
  isDark: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}