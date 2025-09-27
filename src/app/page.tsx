// src/app/page.tsx

import Link from 'next/link';

// Home component is a Server Component by default, perfect for static content
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      
      <div className="text-center max-w-5xl space-y-8">
        
        {/* Creative Focus: Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
          Code That Compares. Speed That Sells.
        </h1>

        {/* Sub-Headline */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
          A performance-optimized portfolio built on **Next.js Server Components**. 
          See the difference a millisecond makes.
        </p>
        
        {/* Analytical Anchor: Key Metrics */}
        <div className="flex justify-center space-x-8 pt-10">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-indigo-500/50">
            <p className="text-4xl font-black text-indigo-600 dark:text-blue-400">98/100</p>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">Mobile Lighthouse Score</p>
          </div>
          
          <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-indigo-500/50">
            <p className="text-4xl font-black text-indigo-600 dark:text-blue-400">0.9s</p>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">Largest Contentful Paint (LCP)</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="pt-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore Optimized Projects →
          </Link>
        </div>
        
      </div>
    </main>
  );
}