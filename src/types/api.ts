// API Response Types

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// News Types
export interface NewsPost {
  slug: string;
  content: string;
  frontmatter: NewsFrontmatter;
}

export interface NewsFrontmatter {
  title: string;
  date: string;
  description?: string;
  version?: string;
  category?: string;
  tags?: string[];
}

// Project Types (extended)
export interface ProjectStats {
  stars: string;
  forks: string;
  language: string;
}

export interface ProjectDetail {
  title: string;
  slug: string;
  description: string;
  stats: ProjectStats;
  tags: string[];
  content?: string;
  features?: string[];
  techStack?: string[];
}
