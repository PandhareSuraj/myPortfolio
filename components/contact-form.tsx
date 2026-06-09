"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Your name"
          className="h-12 rounded-lg border border-border bg-background/70 px-4 outline-none transition focus:border-primary"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email address"
          className="h-12 rounded-lg border border-border bg-background/70 px-4 outline-none transition focus:border-primary"
        />
      </div>
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Tell me about your project, internship, or opportunity..."
        className="resize-none rounded-lg border border-border bg-background/70 p-4 outline-none transition focus:border-primary"
      />
      <Button type="submit" variant="primary" size="lg">
        Send email <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
