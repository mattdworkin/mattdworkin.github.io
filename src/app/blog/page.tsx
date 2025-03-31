import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Blog - Matthew Dworkin",
  description: "Thoughts, insights, and learning from Matthew Dworkin on software development and technology.",
};

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

// This would be replaced with actual data fetching
const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2023-06-15",
    excerpt: "Learn how to set up a Next.js project from scratch and explore its key features for building modern web applications.",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript for React Development",
    date: "2023-05-20",
    excerpt: "Discover how TypeScript can improve your React development workflow with strong typing and better tooling.",
    tags: ["TypeScript", "React", "JavaScript"],
  },
  {
    slug: "responsive-design-techniques",
    title: "Modern Responsive Design Techniques",
    date: "2023-04-10",
    excerpt: "Explore the latest approaches to creating responsive layouts that work seamlessly across all devices.",
    tags: ["CSS", "Responsive Design", "UI/UX"],
  },
  {
    slug: "state-management-in-react",
    title: "State Management in React Applications",
    date: "2023-03-05",
    excerpt: "An in-depth look at different state management solutions in React and when to use each one.",
    tags: ["React", "State Management", "Redux", "Context API"],
  },
  {
    slug: "deploying-nextjs-to-vercel",
    title: "Deploying Next.js Applications to Vercel",
    date: "2023-02-18",
    excerpt: "A step-by-step guide to deploying your Next.js application to Vercel for optimal performance and developer experience.",
    tags: ["Next.js", "Vercel", "Deployment"],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Thoughts, insights, and learning from my journey in software development.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition">
            All Posts
          </span>
          {Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="p-6">
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={`${post.slug}-${tag}`}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <nav className="inline-flex">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            Previous
          </button>
          <button className="px-4 py-2 border-t border-b border-r border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20">
            1
          </button>
          <button className="px-4 py-2 border-t border-b border-r border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            2
          </button>
          <button className="px-4 py-2 border-t border-b border-r border-gray-300 dark:border-gray-600 rounded-r-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
} 