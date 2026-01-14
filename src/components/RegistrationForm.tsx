"use client";

import { useState } from "react";

interface RegistrationFormProps {
  theme?: "dark" | "light" | "warm";
  accentColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

export default function RegistrationForm({
  theme = "dark",
  accentColor = "#d4a574",
  buttonBgColor = "#d4a574",
  buttonTextColor = "#0f172a",
}: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    parent_name: "",
    email: "",
    phone: "",
    student_name: "",
    student_age: "",
    instrument_interest: "",
    comments: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          student_age: parseInt(formData.student_age),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      setStatus("success");
      setFormData({
        parent_name: "",
        email: "",
        phone: "",
        student_name: "",
        student_age: "",
        instrument_interest: "",
        comments: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const inputBaseClasses =
    theme === "light"
      ? "w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
      : theme === "warm"
      ? "w-full px-4 py-3 rounded-lg border border-[#7c2d36]/30 bg-white/90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
      : "w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all";

  const labelClasses =
    theme === "light"
      ? "block text-sm font-medium text-gray-700 mb-1"
      : theme === "warm"
      ? "block text-sm font-medium text-[#7c2d36] mb-1"
      : "block text-sm font-medium text-white/80 mb-1";

  if (status === "success") {
    return (
      <div className="text-center py-12 px-6">
        <div
          className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ backgroundColor: accentColor }}
        >
          <svg
            className="w-8 h-8"
            style={{ color: buttonTextColor }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3
          className={`text-2xl font-bold mb-3 ${
            theme === "light" ? "text-gray-900" : theme === "warm" ? "text-[#7c2d36]" : "text-white"
          }`}
        >
          Registration Complete!
        </h3>
        <p className={theme === "light" ? "text-gray-600" : theme === "warm" ? "text-[#7c2d36]/70" : "text-white/70"}>
          We&apos;ve sent a confirmation email with all the event details. We look forward to seeing you on January 31st!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="parent_name" className={labelClasses}>
            Parent Name *
          </label>
          <input
            type="text"
            id="parent_name"
            name="parent_name"
            required
            value={formData.parent_name}
            onChange={handleChange}
            className={inputBaseClasses}
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputBaseClasses}
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputBaseClasses}
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="student_name" className={labelClasses}>
            Student Name *
          </label>
          <input
            type="text"
            id="student_name"
            name="student_name"
            required
            value={formData.student_name}
            onChange={handleChange}
            className={inputBaseClasses}
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
            placeholder="Student's first name"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="student_age" className={labelClasses}>
            Student Age *
          </label>
          <input
            type="number"
            id="student_age"
            name="student_age"
            required
            min="3"
            max="18"
            value={formData.student_age}
            onChange={handleChange}
            className={inputBaseClasses}
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
            placeholder="Age"
          />
        </div>
        <div>
          <label htmlFor="instrument_interest" className={labelClasses}>
            Instrument Interest *
          </label>
          <select
            id="instrument_interest"
            name="instrument_interest"
            required
            value={formData.instrument_interest}
            onChange={handleChange}
            className={inputBaseClasses}
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
          >
            <option value="">Select an instrument</option>
            <option value="Violin">Violin</option>
            <option value="Viola">Viola</option>
            <option value="Cello">Cello</option>
            <option value="Not Sure">Not Sure Yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="comments" className={labelClasses}>
          Questions or Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={3}
          value={formData.comments}
          onChange={handleChange}
          className={inputBaseClasses}
          style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
          placeholder="Anything you'd like us to know..."
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Registering...
          </span>
        ) : (
          "Register for Open House"
        )}
      </button>

      <p
        className={`text-center text-sm ${
          theme === "light" ? "text-gray-500" : theme === "warm" ? "text-[#7c2d36]/60" : "text-white/50"
        }`}
      >
        Free admission. Rental and purchase info available at event.
      </p>
    </form>
  );
}
