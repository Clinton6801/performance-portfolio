// src/lib/data.ts

import { Project } from './types'; 

// ✅ FIX: Use a standard ES Module import. 
// This allows Next.js/Webpack to resolve the file correctly 
// and handle it as a static asset during the build process.
import projectsData from './data/project.json';

// NOTE: You may also need to ensure that '@/data/projects.json' 
// is resolved to the correct path, assuming your structure is:
// src/
// ├── app/
// ├── lib/
// └── data/
//     └── projects.json


/**
 * Simulates fetching all optimized projects data.
 * This function runs only on the server, which is the core performance benefit.
 */
export async function getProjects(): Promise<Project[]> {
  // Simulate network latency (to see the loading state in a real scenario)
  // await new Promise(resolve => setTimeout(resolve, 500)); 
  
  return projectsData as Project[];
}

/**
 * Simulates fetching a single project by its ID (slug).
 */
export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find(project => project.id === id);
}