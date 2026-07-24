"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";

// Get a free access key at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY_HERE";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-12 text-center h-full min-h-[300px]">
        <CheckCircle className="h-10 w-10 text-green-500" />
        <div>
          <p className="text-base font-semibold text-zinc-100">Message sent!</p>
          <p className="mt-1 text-sm text-zinc-500">I&apos;ll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  const inputClass = "w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors hover:border-zinc-700 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Rahul Sharma"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="rahul@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-zinc-400">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Flutter App Development / Internship Opportunity"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-zinc-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project or opportunity..."
          className={cn(inputClass, "resize-none")}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
          <AlertCircle className="h-4 w-4 text-red-400" />
          <p className="text-xs text-red-400">Something went wrong. Please try emailing me directly.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-semibold text-white shadow-[0_0_20px_-5px_rgba(2,86,155,0.5)] transition-all hover:bg-accent/90 hover:shadow-[0_0_28px_-5px_rgba(2,86,155,0.7)] hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {status === "loading" ? (
          <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
        ) : (
          <><Send className="h-4 w-4" /> Send Message</>
        )}
      </button>
    </form>
  );
}
