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
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use Supabase Auth to sign up
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: email.toLowerCase(),
        password,
        options: {
          data: {
            name: name,
          }
        }
      });

      if (signUpError) {
        toast.error(signUpError.message);
        return;
      }

      if (!authData.user) {
        toast.error("Failed to create account");
        return;
      }

      // Create user profile
      const { error: profileError } = await supabase
        .from('users')
        .insert({
          id: authData.user.id,
          user_id: authData.user.id,
          email: email.toLowerCase(),
          name: name,
        });

      if (profileError) {
        console.error('Error creating profile:', profileError);
        // Continue anyway - profile can be created later
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
          // Continue anyway - don't block signup
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

      // Redirect to app after successful signup
      router.push("/app");
      router.refresh();
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
          <h1 className="text-2xl font-bold tracking-tight">Start your journey</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Create your account to begin planning
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="Alex Morgan"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="h-11"
          />
        </Field>
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
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="Create a strong password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            className="h-11"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Must be at least 6 characters
          </p>
        </Field>
        <Field>
          <Button type="submit" disabled={loading} className="h-11 font-medium">
            {loading ? "Creating account..." : "Create account"}
          </Button>
          <FieldDescription className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="font-medium underline underline-offset-4 hover:text-foreground transition-colors">
              Sign in
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
