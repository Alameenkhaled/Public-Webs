'use client';

import { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Thank you for registering your interest!');
      setName('');
      setEmail('');
    } else {
      setMessage(data.message || 'Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow"
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow"
      />
      <button
        type="submit"
        className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-all hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5"
      >
        <span className="truncate">Register Your Interest</span>
      </button>
      {message && <p className="text-white mt-4">{message}</p>}
    </form>
  );
};

export default RegistrationForm;
