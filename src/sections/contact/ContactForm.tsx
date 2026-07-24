"use client";

import { useState, useRef, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { PERSONAL } from "@/constants/personal";

/**
 * Contact form — uses FormSubmit for reliable background submission without API keys.
 */

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/atharvajahagirdar1@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });
      const json = await res.json();

      if (json.success === "true" || res.ok) {
        setStatus("success");
        formEl.reset();
      } else {
        setErrorMsg(json.message ?? "Submission failed. Please try emailing me directly.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try emailing me directly.");
      setStatus("error");
    }
  }

  // ── Success state ──
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-green-500/20 bg-green-500/5 p-12 text-center min-h-[340px]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
          <CheckCircle className="h-7 w-7 text-green-400" />
        </div>
        <div>
          <p className="text-base font-semibold text-zinc-100">Message sent!</p>
          <p className="mt-1.5 text-sm text-zinc-500 max-w-xs">
            Thanks for reaching out. I'll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs text-zinc-600 hover:text-zinc-400 underline underline-offset-4 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors hover:border-zinc-700 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {/* Name + Email */}
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
            minLength={2}
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

      {/* Subject */}
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

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-zinc-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={20}
          placeholder="Tell me about your project or opportunity..."
          className={cn(inputClass, "resize-none")}
        />
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
          <div>
            <p className="text-xs font-medium text-red-400">Something went wrong</p>
            <p className="text-xs text-red-400/70 mt-0.5">
              {errorMsg || "Please email me directly at"}{" "}
              {!errorMsg && (
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="underline hover:text-red-300 transition-colors"
                >
                  {PERSONAL.email}
                </a>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-semibold text-white shadow-[0_0_20px_-5px_rgba(2,86,155,0.4)] transition-all hover:bg-accent/90 hover:shadow-[0_0_28px_-5px_rgba(2,86,155,0.6)] hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
