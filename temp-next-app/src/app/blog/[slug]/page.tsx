"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// This would be replaced with real data fetching
const getBlogPostBySlug = (slug: string) => {
  // Mock data
  const posts = {
    "getting-started-with-nextjs": {
      title: "Getting Started with Next.js",
      date: "2023-06-15",
      tags: ["Next.js", "React", "Web Development"],
      content: `
        # Getting Started with Next.js

        Next.js is a powerful React framework that makes building web applications simple and efficient. In this post, we'll explore how to set up a Next.js project from scratch and dive into some of its key features.

        ## What is Next.js?

        Next.js is a React framework that provides a structure and features for your React applications, including:

        - Server-side rendering and static site generation
        - Automatic code splitting
        - Simple page-based routing
        - API routes
        - Built-in CSS and Sass support

        ## Setting Up Your First Next.js Project

        Let's start by creating a new Next.js application. You'll need Node.js installed on your machine.

        \`\`\`bash
        npx create-next-app@latest my-next-app
        cd my-next-app
        npm run dev
        \`\`\`

        This will create a new Next.js project and start the development server. Navigate to http://localhost:3000 to see your application.

        ## Creating Pages

        In Next.js, pages are React components exported from files in the pages directory. Each page is associated with a route based on its filename.

        For example, to create a page that renders at the /about route, create a file at pages/about.js:

        \`\`\`jsx
        export default function About() {
          return (
            <div>
              <h1>About Us</h1>
              <p>This is the about page of our Next.js application.</p>
            </div>
          );
        }
        \`\`\`

        ## Dynamic Routes

        Next.js supports dynamic routes through files with square brackets. For example, a file named [id].js in the pages directory will match routes like /1, /2, etc.

        \`\`\`jsx
        import { useRouter } from 'next/router';

        export default function Post() {
          const router = useRouter();
          const { id } = router.query;

          return (
            <div>
              <h1>Post {id}</h1>
              <p>This is the content of post {id}.</p>
            </div>
          );
        }
        \`\`\`

        ## Conclusion

        Next.js provides a powerful set of features that make building React applications easier and more efficient. This introduction just scratches the surface of what's possible with Next.js. In future posts, we'll explore more advanced features like API routes, static site generation, and deployment options.
      `,
    },
    "mastering-typescript": {
      title: "Mastering TypeScript for React Development",
      date: "2023-05-20",
      tags: ["TypeScript", "React", "JavaScript"],
      content: `
        # Mastering TypeScript for React Development

        TypeScript has become an essential tool for modern React development. In this post, we'll explore how TypeScript can improve your React workflow and make your applications more robust.

        ## Why Use TypeScript with React?

        TypeScript adds static typing to JavaScript, which provides several benefits:

        - Catch errors at compile-time rather than runtime
        - Better IDE support with code completion and navigation
        - Self-documenting code
        - Safer refactoring

        ## Getting Started with TypeScript in React

        If you're starting a new project, you can create a React app with TypeScript support using:

        \`\`\`bash
        npx create-react-app my-app --template typescript
        \`\`\`

        If you're adding TypeScript to an existing project, you can add the necessary dependencies:

        \`\`\`bash
        npm install --save typescript @types/node @types/react @types/react-dom
        \`\`\`

        ## Typing Component Props

        One of the most common use cases for TypeScript in React is typing component props:

        \`\`\`tsx
        interface ButtonProps {
          text: string;
          onClick: () => void;
          color?: 'primary' | 'secondary';
          size?: 'small' | 'medium' | 'large';
        }

        const Button: React.FC<ButtonProps> = ({ 
          text, 
          onClick, 
          color = 'primary', 
          size = 'medium' 
        }) => {
          return (
            <button 
              className={\`btn btn-\${color} btn-\${size}\`}
              onClick={onClick}
            >
              {text}
            </button>
          );
        };
        \`\`\`

        ## Typing Hooks

        TypeScript works well with React hooks:

        \`\`\`tsx
        interface User {
          id: number;
          name: string;
          email: string;
        }

        const UserProfile: React.FC = () => {
          const [user, setUser] = useState<User | null>(null);
          const [loading, setLoading] = useState<boolean>(true);

          useEffect(() => {
            const fetchUser = async () => {
              try {
                const response = await fetch('/api/user');
                const userData: User = await response.json();
                setUser(userData);
              } catch (error) {
                console.error('Error fetching user:', error);
              } finally {
                setLoading(false);
              }
            };

            fetchUser();
          }, []);

          if (loading) return <div>Loading...</div>;
          if (!user) return <div>No user found</div>;

          return (
            <div>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          );
        };
        \`\`\`

        ## Conclusion

        TypeScript is a powerful tool for React development that can help you catch errors early and write more maintainable code. While there's a learning curve, the benefits of using TypeScript with React far outweigh the initial setup time.
      `,
    },
    // Add more blog posts as needed
  };

  return posts[slug as keyof typeof posts];
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Convert markdown-like content to HTML (in a real app, use a proper markdown library)
  const createMarkup = () => {
    return { __html: convertMarkdownToHTML(post.content) };
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <article>
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>
        </div>

        <header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-4">
            <time dateTime={post.date} className="mr-6">
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <span className="mr-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              5 min read
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div 
          className="prose dark:prose-invert lg:prose-lg prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 max-w-none pb-8 mb-8 border-b border-gray-200 dark:border-gray-700"
          dangerouslySetInnerHTML={createMarkup()}
        ></div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Share this post
            </h3>
            <div className="flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${post.title}&url=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
              >
                <span className="sr-only">Share on Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition"
              >
                <span className="sr-only">Share on LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center px-5 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}

// Simple function to convert markdown to HTML (placeholder for a real markdown parser)
function convertMarkdownToHTML(markdown: string): string {
  // In a real application, use a proper markdown parser
  let html = markdown
    // Convert headings
    .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
    .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
    // Convert paragraphs
    .replace(/^(?!<h[1-6]|<ul|<ol|<li|<blockquote)(.+)$/gm, '<p>$1</p>')
    // Convert code blocks
    .replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>')
    // Convert inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Convert bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Convert italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Convert links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Convert lists
    .replace(/^\- (.*?)$/gm, '<li>$1</li>')
    .replace(/<li>(.*?)<\/li>/gs, '<ul><li>$1</li></ul>')
    // Clean up
    .replace(/<\/ul>\s*<ul>/g, '');

  return html;
} 