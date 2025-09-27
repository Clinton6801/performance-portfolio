// src/actions/contact.ts
'use server'; // 👈 CRITICAL: This directive MUST be at the top of the file.

/**
 * Handles the submission of the contact form.
 * Runs ONLY on the server.
 */
export async function submitContactForm(
  prevState: { message: string; success: boolean },
  formData: FormData,
): Promise<{ message: string; success: boolean }> {
  
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // 1. Basic Validation
  if (!name || !email || !message) {
    return { message: 'All fields are required.', success: false };
  }
  
  // 2. Simulate heavy server processing (1.5 seconds)
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // 3. Log data to console (This is the "success" state)
  console.log('--- Form Submission Received ---');
  console.log({ name, email, message });
  console.log('------------------------------');

  return { 
    message: `Thank you, ${name}! Your message has been received.`, 
    success: true 
  };
}