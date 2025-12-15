# Zenith Codex Organization

![Zenith Codex Banner](/public/og-image.jpg)

> *Building infrastructure for the next paradigm. A collective of engineers architecting the future.*

Welcome to the **Zenith Codex Organization** repository. This project is a futuristic, cyberpunk-themed portfolio and organization hub built with modern web technologies. It showcases our projects, team, and system logs (blog) with a high-performance, immersive user experience.

## 🚀 Features

*   **Immersive Cyberpunk UI**:
    *   Custom design system with Tailwind CSS (`zenith-*` colors).
    *   Responsive animations using `Framer Motion`.
    *   CRT Scanlines, Noise, and Glow effects.
    *   Interactive Navigation Rail and Mobile Menu.
*   **Dynamic Content**:
    *   **Project Showcase**: Dynamic routing for project details (`/projects/[slug]`).
    *   **System Logs (Blog)**: MDX-powered blog system with creating/parsing logic in `src/lib/mdx`.
    *   **Team Section**: Grid layout with hover effects and status indicators.
*   **Functional Components**:
    *   **Contact Form**: Validated form using `react-hook-form` and `zod`, displayed in a ShadCN Dialog.
    *   **Archive**: dedicated `/news` page for full history viewing.
*   **Technical Excellence**:
    *   High Performance: Optimized images (`next/image`), bundle analysis included.
    *   SEO Ready: Comprehensive Metadata, Sitemap (`sitemap.ts`), and Robots (`robots.ts`) configuration.
    *   Type-Safe: Full TypeScript support with shared interfaces in `src/types`.
    *   Clean Architecture: Data separated from UI components (`src/data`).

## 🛠 Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate) + [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
*   **Forms**: React Hook Form + Zod
*   **Content**: MDX (next-mdx-remote, gray-matter)
*   **Linting**: ESLint + Prettier

## 📦 Getting Started

### Prerequisites

*   Node.js 18.17 or later
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/zenith-codex/organization.git
    cd zenith-codex-organization
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

*   `npm run dev`: Start the development server.
*   `npm run build`: Build the application for production.
*   `npm run start`: Start the production server.
*   `npm run lint`: Check for linting errors.
*   `npm run format`: Format code with Prettier.
*   `npm run analyze`: Build and visualize the bundle size.

## 📂 Project Structure

```bash
src/
├── app/                # Next.js App Router pages & layouts
│   ├── news/           # News archive & details (MDX)
│   ├── projects/       # Dynamic project pages
│   ├── layout.tsx      # Root layout with SEO & Providers
│   └── page.tsx        # Homepage
├── components/
│   ├── ui/             # Shadcn UI reusable components
│   └── zenith/         # Custom project components (Hero, Grid, etc.)
├── content/            # Markdown/MDX content files (News/Blog)
├── config/             # Configuration files (Navigation, etc.)
├── data/               # Static data (Team, Projects)
├── lib/                # Utilities (MDX parser, helpers)
└── types/              # TypeScript interfaces
```

## 🤝 Contributing
The collective is always looking for elite engineers.
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Architected by Zenith Codex & trahoangdev.*
