"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col">
          <p className="text-base font-medium leading-normal pb-2 text-gray-800 dark:text-gray-200">
            Full Name
          </p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow"
            name="name"
            placeholder="Enter your full name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          <p className="text-base font-medium leading-normal pb-2 text-gray-800 dark:text-gray-200">
            Work Email
          </p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow"
            name="email"
            placeholder="you@company.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <label className="flex flex-col">
        <p className="text-base font-medium leading-normal pb-2 text-gray-800 dark:text-gray-200">
          Subject
        </p>
        <input
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow"
          name="subject"
          placeholder="How can we help?"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </label>
      <label className="flex flex-col">
        <p className="text-base font-medium leading-normal pb-2 text-gray-800 dark:text-gray-200">
          Your Message
        </p>
        <textarea
          className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 min-h-36 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow"
          placeholder="Tell us about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </label>
      <button
        className="w-full flex items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold tracking-[0.015em] hover:bg-primary/90 transition-colors"
        type="submit"
      >
        Send Message
      </button>
      {status && <p className="text-center mt-4">{status}</p>}
    </form>
  );
}
