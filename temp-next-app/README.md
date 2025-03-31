# Matthew Dworkin's Personal Website

This is the source code for Matthew Dworkin's personal website, built with Next.js and Tailwind CSS.

## Features

- 📄 Home, About, Projects, Resume, Blog, and Contact pages
- 📱 Mobile-responsive layout
- ⚡ Fast static site generation
- ✍️ Markdown-powered blog
- 📬 Contact form with Formspree integration
- 💼 Interactive resume viewer and download

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/matthewtdworkin-site.git
cd matthewtdworkin-site
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

## Blog Content

Blog posts are written in Markdown and stored in the `src/content/blog` directory. Each post should include frontmatter with title, date, excerpt, and tags.

Example:

```md
---
title: "Getting Started with Next.js"
date: "2023-06-15"
excerpt: "Learn how to set up a Next.js project from scratch."
tags: ["Next.js", "React", "Web Development"]
---

# Content goes here
```

## Deployment

The site is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

This will:
1. Build the static site
2. Create a `.nojekyll` file to disable Jekyll processing
3. Commit the build to your repository
4. Push the `out` directory to the `gh-pages` branch

## Contact Form

The contact form is integrated with Formspree. To use your own form:

1. Create an account on [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Replace the form ID in `src/app/contact/page.tsx`

## Customization

To customize the site for your own use:

1. Update personal information in each page component
2. Replace project information in `src/app/projects/page.tsx`
3. Update your resume in `src/app/resume/page.tsx`
4. Add your own blog posts to `src/content/blog/`
5. Replace social media links and contact information

## License

This project is licensed under the MIT License - see the LICENSE file for details.
