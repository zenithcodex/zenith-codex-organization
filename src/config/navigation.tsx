import { Github, Terminal, Cpu, Layers, FileText, Users } from "lucide-react";
import { NavItem } from "@/types";

export const navItems: NavItem[] = [
    { icon: Terminal, label: "Home", href: "/" },
    { icon: FileText, label: "Manifesto", href: "#manifesto" },
    { icon: Layers, label: "Projects", href: "#projects" },
    { icon: Cpu, label: "Stack", href: "#stack" },
    { icon: Users, label: "Team", href: "#team" },
    { icon: Github, label: "Source", href: "https://github.com/zenithcodex/zenith-codex-organization" },
];
