import { LucideIcon } from "lucide-react";

export interface Project {
    title: string;
    slug: string;
    description: string;
    stats: {
        stars: string;
        forks: string;
        language: string;
    };
    tags: string[];
}

export type TeamMemberStatus = 'online' | 'coding' | 'offline';

export interface TeamMember {
    name: string;
    role: string;
    status: TeamMemberStatus;
    image: string;
}

export interface NavItem {
    icon: LucideIcon;
    label: string;
    href: string;
}

export interface NewsItem {
    date: string;
    version: string;
    title: string;
    category: string;
}

export interface NewsPost {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        version?: string;
        category?: string;
        description?: string;
        [key: string]: any;
    };
    content: string;
}

