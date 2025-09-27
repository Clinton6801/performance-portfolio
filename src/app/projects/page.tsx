// src/app/projects/page.tsx

import { getProjects } from '@/lib/data';
import Link from 'next/link';
import { Project } from '@/lib/types'; 

// This is an 'async' Server Component, which means it fetches data on the server
export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto p-6 md:p-12">
      <h1 className="text-5xl font-extrabold mb-4">Optimized Project Showcase</h1>
      <p className="text-xl text-gray-500 mb-12">
        A deep dive into performance-first design and Next.js architecture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: Project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01]"
          >
            <h2 className="text-3xl font-bold text-indigo-600 dark:text-blue-400 mb-2">{project.title}</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.short_description}</p>
            
            {/* Analytical Data Spotlight */}
            <div className="flex items-center space-x-4 text-sm font-semibold">
              <span className="text-green-600 dark:text-green-400">
                LCP: {project.analytical_data.LCP}
              </span>
              <span className="text-yellow-600 dark:text-yellow-400">
                Score: {project.analytical_data.mobile_score}/100
              </span>
            </div>
            
            {/* Technical Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech_stack.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}