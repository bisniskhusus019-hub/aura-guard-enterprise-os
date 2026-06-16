"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase";

type Mode = "login" | "signup";

export function AuthForm({ mode }: { mode: Mode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    try {
      const supabase = createSupabaseBrowserClient();
      const response =
        mode === "login"
          ? await supabase.auth.signInWithPassword({ email, password })
          : await supabase.auth.signUp({ email, password });

      if (response.error) {
        setMessage(response.error.message);
        return;
      }

      setMessage(mode === "login" ? "Login successful. Open the dashboard." : "Signup submitted. Check email confirmation settings in Supabase.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Auth is not configured yet.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid" style={{ marginTop: 22 }}>
      <input name="email" placeholder="Work email" required style={{ padding: 14, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", color: "var(--text)" }} />
      <input name="password" placeholder="Password" type="password" required minLength={8} style={{ padding: 14, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", color: "var(--text)" }} />
      <button className="btn btn-primary" type="submit" disabled={isLoading}>{isLoading ? "Processing..." : mode === "login" ? "Login" : "Create Account"}</button>
      {message ? <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{message}</p> : null}
    </form>
  );
}
