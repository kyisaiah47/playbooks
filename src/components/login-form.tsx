"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use Supabase Auth to sign in
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password,
      });

      if (signInError) {
        toast.error(signInError.message);
        return;
      }

      // Migrate localStorage data to database
      const workspaceData: any[] = [];
      const reflectionData: any[] = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          if (key.startsWith('workspace_')) {
            const stored = localStorage.getItem(key);
            if (stored) {
              try {
                const data = JSON.parse(stored);
                const parts = key.split('_');
                if (parts.length >= 3) {
                  workspaceData.push({
                    guideId: parts[1],
                    questionId: parts[2],
                    response: data.response,
                  });
                }
              } catch (e) {
                console.error('Error parsing workspace data:', e);
              }
            }
          } else if (key.startsWith('reflection-')) {
            const stored = localStorage.getItem(key);
            if (stored) {
              try {
                const data = JSON.parse(stored);
                reflectionData.push({
                  date: data.date,
                  question: data.question,
                  content: data.content,
                  mood: data.mood,
                  tags: data.tags,
                });
              } catch (e) {
                console.error('Error parsing reflection data:', e);
              }
            }
          }
        }
      }

      // Send migration request if there's data
      if (workspaceData.length > 0 || reflectionData.length > 0) {
        try {
          await fetch('/api/migrate-localStorage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              workspace: workspaceData,
              reflections: reflectionData,
            }),
          });
        } catch (e) {
          console.error('Error migrating data:', e);
          // Continue anyway - don't block login
        }
      }

      // Clear localStorage after migration
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('workspace_') || key.startsWith('reflection-') || key === 'templata-onboarding-seen')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key));

      // Use window.location to ensure proper redirect after auth
      window.location.href = "/app";
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Sign in to continue your journey
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="h-11"
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="/forgot-password"
              className="ml-auto text-xs text-muted-foreground underline-offset-4 hover:underline hover:text-foreground transition-colors"
            >
              Forgot password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="h-11"
          />
        </Field>
        <Field>
          <Button type="submit" disabled={loading} className="h-11 font-medium">
            {loading ? "Signing in..." : "Sign in"}
          </Button>
          <FieldDescription className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="font-medium underline underline-offset-4 hover:text-foreground transition-colors">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
