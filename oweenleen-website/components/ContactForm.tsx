'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, email, subject, message }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatusMessage('Your message has been sent successfully!');
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setStatusMessage(data.message || 'Something went wrong.');
    }
  };

  return (
    <div className="lg:col-span-3 bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow"
                />
            </div>
            <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow"
            />
            <textarea
                placeholder="Tell us about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 min-h-36 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow"
            ></textarea>
            <button
                type="submit"
                className="w-full flex items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold tracking-[0.015em] hover:bg-primary/90 transition-colors"
            >
                Send Message
            </button>
            {statusMessage && <p className="text-center text-gray-600 dark:text-gray-400 mt-4">{statusMessage}</p>}
        </form>
    </div>
  );
};

export default ContactForm;
