// src/app/layout.tsx

import type { Metadata } from 'next';
import './globals.css'; // Your global Tailwind CSS file
import Link from 'next/link';

// --- Analytical Focus: Define Metadata for SEO ---
export const metadata: Metadata = {
  title: 'Next.js Performance Portfolio',
  description: 'A performance-optimized web development portfolio built with Next.js Server Components.',
};

// --- Main Layout Component ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 min-h-screen flex flex-col">
        <Header />
        
        {/* Main content area wrapped by the layout */}
        <main className="flex-grow">{children}</main> 
        
        <Footer />
      </body>
    </html>
  );
}

// --- Navigation Component ---
function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm shadow-md dark:bg-gray-800/90 dark:shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Site Title */}
        <Link href="/" className="text-2xl font-black text-indigo-600 dark:text-blue-400 hover:text-indigo-700 transition">
          P-Portfolio
        </Link>
        
        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} 
              className="text-gray-600 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// --- Footer Component ---
function Footer() {
  // A simple footer focused on the core theme
  return (
    <footer className="mt-12 py-6 border-t dark:border-gray-700">
      <div className="container mx-auto text-center text-sm text-gray-500">
        Built with Next.js, dedicated to Core Web Vitals. © {new Date().getFullYear()}
      </div>
    </footer>
  );
}