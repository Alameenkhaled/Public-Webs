"use client";

import { useState } from "react";

export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("Thank you for registering your interest!");
      setEmail("");
    } else {
      setStatus("Failed to submit. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-solid border border-[#f0f2f4] dark:border-white/20 bg-transparent h-12 placeholder:text-[#616f89] px-4 text-base font-normal leading-normal"
        placeholder="Enter your email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
        type="submit"
      >
        <span className="truncate">Register Interest</span>
      </button>
      {status && <p className="text-center mt-4">{status}</p>}
    </form>
  );
}
