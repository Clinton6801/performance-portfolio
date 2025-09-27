// src/app/projects/[slug]/page.tsx

import { getProjectById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image'; // For optimization!

// Define the component's expected props
interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Server Component function, using 'async' to fetch data
export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectById(params.slug);

  // Handle the case where the project slug is invalid
  if (!project) {
    notFound(); 
  }

  // Destructure for cleaner access
  const { title, full_content, tech_stack, image_url, analytical_data } = project;

  return (
    <div className="container mx-auto p-6 md:p-12 max-w-6xl">
      <header className="mb-12 border-b pb-6 dark:border-gray-700">
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-600 dark:text-blue-400 mb-4">{title}</h1>
        <p className="text-xl text-gray-500">{project.short_description}</p>
      </header>

      {/* 1. The Creative Story (with Next/Image optimization) */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Project Story</h2>
        
        {/* Placeholder for the optimized project image */}
        {/* NOTE: You would need to create a dummy image in the /public/images directory */}
        <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden shadow-xl">
          <Image 
            src={image_url} 
            alt={`Screenshot of ${title}`} 
            fill 
            style={{ objectFit: 'cover' }} 
            priority // Critical optimization for the LCP element
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <p className="text-lg leading-relaxed dark:text-gray-300">
          {full_content}
        </p>
      </section>

      {/* 2. The Analytical Data (Metrics & Optimization) */}
      <section className="mb-16 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-inner">
        <h2 className="text-3xl font-bold mb-6 text-green-700 dark:text-green-400">Analytical Performance Data</h2>
        
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
            <p className="text-2xl font-extrabold text-red-500">{analytical_data.LCP}</p>
            <p className="text-sm text-gray-500">LCP (Largest Contentful Paint)</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
            <p className="text-2xl font-extrabold text-green-500">{analytical_data.mobile_score}</p>
            <p className="text-sm text-gray-500">Mobile Lighthouse Score</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
            <p className="text-2xl font-extrabold text-blue-500">{analytical_data.CLS}</p>
            <p className="text-sm text-gray-500">CLS (Cumulative Layout Shift)</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
            <p className="text-2xl font-extrabold text-yellow-500">{analytical_data.FID}</p>
            <p className="text-sm text-gray-500">FID (First Input Delay)</p>
          </div>
        </div>

        <p className="mt-8 text-md font-semibold dark:text-gray-300">
          Optimization Strategy: <span className="text-indigo-600 dark:text-blue-400">{analytical_data.optimization_strategy}</span>
        </p>
      </section>

      {/* 3. The Technical Breakdown (Architecture) */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
        <div className="text-lg dark:text-gray-300">
          <p className="mb-4">
            This project leveraged **React Server Components** for zero-bundle data fetching, ensuring the critical rendering path was as lean as possible.
          </p>
          <p className="font-semibold mb-3">Key Technologies:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            {tech_stack.map(tech => (
              <li key={tech} className="text-gray-700 dark:text-gray-400">
                {tech}
              </li>
            ))}
          </ul>

          <p className="mt-6 font-semibold">Conceptual Data Flow:</p>
          {/* Simple Text Flowchart */}
          <div className="mt-4 p-4 bg-white dark:bg-gray-900 border-l-4 border-indigo-500 rounded-r-lg font-mono text-sm">
            USER REQUEST $\to$ NEXT.JS SERVER $\to$ {analytical_data.optimization_strategy} Data Fetch $\to$ Render HTML $\to$ Browser
          </div>
        </div>
      </section>
    </div>
  );
}

// Optional: Use generateStaticParams for fully static pre-rendering (SSG)
// export async function generateStaticParams() {
//   const projects = await getProjects();
//   return projects.map((project) => ({
//     slug: project.id,
//   }));
// }

// Optional: Metadata generation for SEO (Technical/Analytical focus)
export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await getProjectById(params.slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Performance Portfolio`,
    description: project.short_description,
  };
}