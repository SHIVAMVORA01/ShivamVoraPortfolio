// Hero Section Types
export interface Hero {
    intro: string;
    tagline: string;
    content: string;
  }
  
  // About Section Types
  export interface About {
    intro1: string;
    intro2: string;
    experience: string;
    recognition: string;
    achievement1: string;
    achievement2: string;
    achievement3: string;
  }
  
  export interface InspiringQuote {
    intro: string;
    text: string;
    author: string;
  }
  
  export interface Contact {
    intro1: string;
    intro2: string;
  }
  
  export interface SectionTitle {
    portfolio: string;
    about: string;
    experience: string;
    skills: string;
  }
  
  // Experience Types
  export interface ExperienceFile {
    src: string;
    type: string;
  }
  
  export interface Experience {
    id: number;
    title: string;
    period: string;
    description: string[];
    files: ExperienceFile[];
  }
  
  // Project Types
  export interface ResearchInsight {
    title: string;
    content: string;
    subPoints?: string[];
    image?: string;
  }
  
  export interface DesignProcessStep {
    title: string;
    content?: string;
    subPoints?: string[];
    image?: string;
  }
  
  export interface KeyFeature {
    title: string;
    content: string;
    subPoints?: string[];
    image?: string;
  }
  
  export interface ProjectFile {
    src: string;
    type: string;
  }
  
  export interface ProjectDetails {
    overview: string;
    timeline: string;
    tools: string;
    contributions: string[];
    problemStatement: string;
    solutionOverview: string;
    researchInsights: ResearchInsight[];
    objectives: string[];
    designProcess: DesignProcessStep[];
    keyFeatures: KeyFeature[];
    retrospective: string;
    files?: ProjectFile[];
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    details: ProjectDetails;
  }
  
  // Skills Types
  export interface SkillGroup {
    category: string;
    items: string[];
  }
  
  // Combined Portfolio Data Types
  export interface PortfolioData {
    hero: Hero;
    about: About;
    inspiringQuote: InspiringQuote;
    contact: Contact;
    sectionTitle: SectionTitle;
    experiences: Experience[];
    projects: Project[];
    skills: SkillGroup[];
  }