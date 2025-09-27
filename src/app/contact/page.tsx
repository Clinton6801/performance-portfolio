// src/app/contact/page.tsx
'use client'; 

import { useActionState, useTransition } from 'react';
// 👈 CRITICAL: Import the server action from the new dedicated file
import { submitContactForm } from '@/actions/contact'; 

// --- Client Component ---
export default function ContactPage() {
  // Pass the imported Server Action to useActionState
  const [state, formAction] = useActionState(submitContactForm, { 
    message: '', 
    success: false 
  });
  
  const [isPending, startTransition] = useTransition();

  // ... (rest of the component remains the same, using formAction and isPending)
  return (
    <div className="container mx-auto p-6 md:p-12 max-w-2xl">
      {/* ... (Headings and Description) */}
      
      {/* Status Message */}
      {/* ... */}

      {/* Form using Server Action */}
      <form 
        // Action property now correctly uses the imported Server Action handler
        action={(formData) => startTransition(() => formAction(formData))}
        className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        {/* ... (Input fields and Button) */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 transition-colors"
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}