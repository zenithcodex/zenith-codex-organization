# Zenith Codex Organization

![Zenith Codex Banner](/public/og-image.jpg)

> *Building infrastructure for the next paradigm. A collective of engineers architecting the future.*

Welcome to the **Zenith Codex Organization** repository. This project is a futuristic, cyberpunk-themed portfolio and organization hub built with modern web technologies. It showcases our projects, team, and system logs (blog) with a high-performance, immersive user experience.

## 🚀 Features

### Immersive Cyberpunk UI
- Custom design system with Tailwind CSS (`zenith-*` colors)
- Responsive animations using `Framer Motion`
- CRT Scanlines, Noise, and Glow effects
- Interactive Navigation Rail and Mobile Menu
- **Light/Dark Theme Support** with smooth transitions

### Dynamic Content
- **Project Showcase**: Dynamic routing for project details
- **System Logs (Blog)**: MDX-powered blog system with search & pagination
- **Team Section**: Grid layout with hover effects and status indicators
- **News Archive**: Dedicated `/news` page with filtering

### Functional Components
- **Contact Form**: Validated form using `react-hook-form` and `zod`
- **Interactive Terminal**: Command-line interface in footer
- **Search Modal**: Global search with keyboard shortcuts (Ctrl+K)
- **Back to Top**: Smooth scroll navigation
- **Scroll Progress**: Visual reading progress indicator
- **Keyboard Shortcuts**: Navigation shortcuts support

### Technical Excellence
- **High Performance**: Optimized images (`next/image`), bundle analysis
- **SEO Ready**: Comprehensive Metadata, Sitemap, and Robots configuration
- **Type-Safe**: Full TypeScript support with shared interfaces
- **Accessibility**: Skip to content, ARIA labels, keyboard navigation
- **Clean Architecture**: Data separated from UI components

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + Tailwind Animate + Typography |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Components | [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives) |
| Forms | React Hook Form + Zod |
| Content | MDX (next-mdx-remote, gray-matter) |
| Theme | next-themes |
| Linting | ESLint + Prettier + Husky |

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zenithcodex/organization.git
cd zenith-codex-organization

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

Copy `.env.example` to `.env.local` and configure as needed:

```bash
cp .env.example .env.local
```

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Check for linting errors |
| `npm run format` | Format code with Prettier |
| `npm run analyze` | Build and visualize bundle size |

## 📂 Project Structure

```
src/
├── app/                # Next.js App Router pages & layouts
│   ├── api/            # API routes (contact form)
│   ├── news/           # News archive & details (MDX)
│   ├── layout.tsx      # Root layout with SEO & Providers
│   └── page.tsx        # Homepage
├── components/
│   ├── providers/      # Context providers (Theme)
│   ├── ui/             # Shadcn UI reusable components
│   └── zenith/         # Custom project components
├── config/             # Configuration files (Navigation)
├── constants/          # App constants
├── content/            # MDX content files (News/Blog)
├── data/               # Static data (Team, Projects)
├── hooks/              # Custom React hooks
├── lib/                # Utilities (MDX parser, animations)
└── types/              # TypeScript interfaces
public/
├── avatar/             # Team member avatars
├── logo.png            # Site logo
└── og-image.jpg        # Open Graph image
```

## 🎨 Theming

The site supports both light and dark themes. Toggle using the theme button in the navigation rail or mobile menu.

### Custom Colors (zenith-*)
- `zenith-base`: Background color
- `zenith-surface`: Surface/card color
- `zenith-text`: Primary text color
- `zenith-cyan`: Accent color
- `zenith-green`: Success/online status
- `zenith-muted`: Muted text

## 🤝 Contributing

The collective is always looking for elite engineers. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Architected by Zenith Codex & trahoangdev.*
