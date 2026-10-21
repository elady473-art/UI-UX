export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  chips: string[];
  type: 'standard' | 'full';
  visualType: 'prms' | 'figma' | 'adey' | '3dmodels';
  figmaUrl?: string;
  externalUrl?: string;
}

export interface CaseStudy {
  kicker: string;
  title: string;
  intro: string;
  sections: [string, string][];
  note: string;
}

export interface CaseStudyDetails {
  [key: string]: CaseStudy;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface ToolCard {
  id: string;
  name: string;
  mark: string;
  markClass: string;
  number: string;
  description: string;
  tags: string[];
  link: string;
}
