// src/app/about/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';

// Conceptual Focus: Metadata for SEO
export const metadata: Metadata = {
  title: 'About the Developer | Performance-First',
  description: 'Our philosophy: building high-performing web applications for better conversion and user experience.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6 md:p-12 max-w-4xl space-y-12">
      
      {/* Creative & Conceptual Focus: The Philosophy */}
      <section className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-600 dark:text-blue-400 mb-4">
          The Performance Philosophy
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          In web development, speed isn't a feature—it's the foundation of business success.
        </p>
      </section>

      {/* Analytical Focus: Why Speed Matters */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b pb-2 dark:border-gray-700">Why Performance is Non-Negotiable</h2>
        <p className="text-lg leading-relaxed dark:text-gray-300">
          Every millisecond added to a page load time translates directly to lost users, lower conversion rates, and poor SEO rankings. Our work isn't just about writing functional code; it's about engineering solutions that achieve peak **Core Web Vitals** scores.
        </p>
        
        <ul className="list-disc list-inside ml-4 space-y-2 text-md dark:text-gray-400">
          <li>📈 **Business Impact:** Faster pages lead to higher conversions and lower bounce rates.</li>
          <li>🔎 **SEO Advantage:** Google prioritizes fast, smooth user experiences in search rankings.</li>
          <li>🧘 **User Experience:** A quick site builds trust and improves accessibility for all users.</li>
        </ul>
      </section>

      {/* Technical Focus: Our Approach (Leveraging Next.js) */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b pb-2 dark:border-gray-700">Our Technical Edge</h2>
        <p className="text-lg leading-relaxed dark:text-gray-300">
          This portfolio—and all projects showcased—are built using **Next.js** with a focus on modern rendering strategies:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border-l-4 border-blue-500 bg-gray-100 dark:bg-gray-800 rounded">
            <h3 className="font-semibold text-lg mb-1">Server Components (RSC)</h3>
            <p className="text-sm dark:text-gray-400">Zero-bundle data fetching to eliminate client-side JavaScript overhead on the critical path.</p>
          </div>
          <div className="p-4 border-l-4 border-green-500 bg-gray-100 dark:bg-gray-800 rounded">
            <h3 className="font-semibold text-lg mb-1">Static Generation & ISR</h3>
            <p className="text-sm dark:text-gray-400">Pre-rendering content at build time or using Incremental Static Regeneration for near-instant load times.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="pt-8 text-center">
        <p className="text-lg mb-4 dark:text-gray-300">Ready to see the results? Check out our documented performance projects.</p>
        <Link 
          href="/projects" 
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-lg"
        >
          View Case Studies →
        </Link>
      </div>
      
    </div>
  );
}