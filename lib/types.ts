import { StaticImageData } from "next/image";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  birthday: string;
  location: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  avatar: string;
  role: string;
  text: string;
  date: string;
}

export interface ClientItem {
  id: string;
  name: string;
  logo: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
  level: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "tools"
    | "ai"
    | "other"
    | "familiar";
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  thumbnail: StaticImageData;
  client: string;
  date: string;
  technologies: string[];
  description: string;
  live?: string;
  github?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}
