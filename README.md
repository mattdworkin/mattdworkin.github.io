# Matthew Dworkin - Portfolio Website

Production-quality personal website built with Next.js 14, TypeScript, and TailwindCSS.

**Live Site**: https://matthewtdworkin.com/

## Features

- **Modern Stack**: Next.js 14 App Router, TypeScript, TailwindCSS
- **Fully Responsive**: Mobile-first design
- **Project Showcase**: Detailed case studies with architecture diagrams
- **Fast Performance**: Static site generation for optimal speed
- **Accessible**: Keyboard navigation and semantic HTML
- **SEO Optimized**: Sitemap, robots.txt, and OpenGraph metadata
- **Fun 404**: Spinning donut animation (tribute to donut.c)

## Tech Stack

| Category           | Tool/Platform         | Purpose                                                                 |
|--------------------|-----------------------|-------------------------------------------------------------------------|
| **Framework**       | Next.js 14            | React framework with App Router and static export                        |
| **Language**        | TypeScript            | Type-safe JavaScript for better developer experience                     |
| **Styling**         | TailwindCSS           | Utility-first CSS framework for rapid UI development                     |
| **Components**      | shadcn/ui             | Accessible, customizable UI component library                            |
| **Icons**           | Lucide React          | Beautiful, consistent icon library                                       |
| **Hosting**         | GitHub Pages          | Free static hosting directly from this repository                        |
| **Domain**          | Namecheap             | Custom domain `matthewtdworkin.com`                                      |
| **SSL/HTTPS**       | GitHub Auto-Cert      | Automatic HTTPS certificate                                              |
| **Version Control** | Git + GitHub          | Source control and deployment                                            |

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Build for production
npm run build

# The static site will be in the /out directory
```

### Deploy to GitHub Pages

This site uses static export (`output: 'export'`) for GitHub Pages deployment.

```bash
# Build the site
npm run build

# Commit the /out directory (or configure GitHub Actions to build automatically)
git add out
git commit -m "Deploy site"
git push
```

## Project Structure

```
├── src/
│   ├── app/                 # Next.js 14 App Router pages
│   │   ├── page.tsx         # Homepage
│   │   ├── projects/        # Projects showcase + case studies
│   │   ├── experience/      # Work experience timeline
│   │   ├── contact/         # Contact page
│   │   └── not-found.tsx    # 404 page with donut animation
│   ├── components/          # Reusable React components
│   │   ├── ui/              # Base UI components (Button, Badge, Card)
│   │   ├── Navigation.tsx   # Site navigation
│   │   ├── Footer.tsx       # Site footer
│   │   └── Donut.tsx        # Spinning donut animation
│   ├── data/                # Project and experience data
│   │   └── projects.ts      # Centralized project data
│   └── lib/                 # Utility functions
├── public/                  # Static assets
│   ├── robots.txt           # SEO crawler rules
│   ├── sitemap.xml          # Sitemap for search engines
│   └── resume.pdf           # Resume PDF (TODO: add yours)
└── mdx-components.tsx       # MDX component styling
```

## TODO: Required Actions Before Deployment

### 1. Add Your Resume PDF
- [ ] Place your resume PDF at `public/resume.pdf`

### 2. Add Project Screenshots
- [ ] Add screenshots to `public/projects/`
- [ ] Update case study pages to reference images

### 3. Add Company Logos
- [ ] Add logos to `public/logos/`
- [ ] Update `src/data/projects.ts` with paths

### 4. Update Domain References
- [ ] Update `public/sitemap.xml` with your actual domain
- [ ] Update `public/robots.txt` with your domain

## Key Pages

- **Homepage** (`/`): Hero, featured projects, experience, and contact
- **Projects** (`/projects`): Filterable project showcase
- **Case Studies**: CertifyFPGA, API Simulator, Poolerz
- **Experience** (`/experience`): Work timeline
- **Contact** (`/contact`): Email and social links
- **404**: Spinning donut animation

## Customization

### Adding a New Project

Edit `src/data/projects.ts` and create a case study page at `src/app/projects/[slug]/page.tsx`.

### Changing Colors

Edit `tailwind.config.ts` to customize the color palette.

## Performance

- **Target**: Lighthouse 90+ across all metrics
- **Static Export**: No server required
- **Automatic Code Splitting**: Via Next.js

## License

Personal portfolio website. Code structure available for inspiration!

## Credits

- **Donut Animation**: Tribute to Andy Sloane's donut.c
- **Built with**: Next.js, TypeScript, TailwindCSS

---

**Version History**

- **v1.0.0** (2026-02-13): Full Next.js rewrite with projects and case studies
- **v0.0.0** (2024): Initial static HTML site
