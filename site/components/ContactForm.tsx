"use client";

import { useState } from "react";
import { brand } from "@/lib/nav";

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Ontology Engineering");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New inquiry · ${interest} · ${company || name || "anonymous"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Interest: ${interest}`,
        "",
        message,
      ].join("\n"),
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full bg-transparent border-b hairline py-3 text-[1rem] outline-none focus:border-[color:var(--color-accent)] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Ada Lovelace"
          />
        </label>
        <label className="block">
          <span className="eyebrow">Company</span>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
            placeholder="Analytical Engines, Inc."
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="ada@analytical.engines"
        />
      </label>

      <label className="block">
        <span className="eyebrow">Interested in</span>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option>Ontology Engineering</option>
          <option>Knowledge Graph Architecture</option>
          <option>Taxonomy & Labeling Audits</option>
          <option>Eval Data & Golden Sets</option>
          <option>Embedding-Space Cartography</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label className="block">
        <span className="eyebrow">A paragraph or two</span>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="What are you working on, and where does the structure underneath it feel wobbly?"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <span className="mono">
          Opens your mail client · no form backend
        </span>
        <button type="submit" className="btn-primary">
          Send brief
        </button>
      </div>
    </form>
  );
}
