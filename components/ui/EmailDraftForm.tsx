"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export type EmailField = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  fullWidth?: boolean;
  autoComplete?: string;
};

type EmailDraftFormProps = {
  id: string;
  title: string;
  subject: string;
  fields: EmailField[];
  submitLabel: string;
  columns?: boolean;
};

export function EmailDraftForm({ id, title, subject, fields, submitLabel, columns = false }: EmailDraftFormProps) {
  const [opened, setOpened] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = fields.map((field) => `${field.label}: ${String(values.get(field.name) ?? "").trim()}`).join("\n\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form className="email-form" onSubmit={submit} aria-labelledby={`${id}-title`} onChange={() => setOpened(false)}>
      <h3 id={`${id}-title`} className="terminal-label">{title}</h3>
      <div className={`form-fields ${columns ? "two-column" : ""}`}>
        {fields.map((field) => {
          const props = { id: `${id}-${field.name}`, name: field.name, required: field.required, autoComplete: field.autoComplete };
          return (
            <div className={`form-field ${field.fullWidth ? "full-width" : ""}`} key={field.name}>
              <label htmlFor={props.id}>{field.label}{field.required ? " *" : ""}</label>
              {field.type === "textarea" ? <textarea {...props} rows={5} /> :
               field.type === "select" ? <select {...props} defaultValue=""><option value="">Select</option>{field.options?.map((option) => <option key={option}>{option}</option>)}</select> :
               <input {...props} type={field.type ?? "text"} />}
            </div>
          );
        })}
      </div>
      <p className="form-note">Opens an email draft with your details. Send it to complete your request.</p>
      <div className="form-actions"><button type="submit" className="cta-button cta-primary">{submitLabel}<ArrowUpRight size={17} /></button></div>
      {opened && <p className="form-result" role="status">Check your email app to send your request. You can also email <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.</p>}
    </form>
  );
}
