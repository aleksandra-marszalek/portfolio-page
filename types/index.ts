export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
  repoUrlFe?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  published: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
