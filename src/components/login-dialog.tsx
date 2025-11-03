'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoginError(data.error || "Login failed");
        return;
      }

      router.push("/blocks-demo/app");
      router.refresh();
      onOpenChange(false);
    } catch (err) {
      setLoginError("An error occurred. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError("");
    setSignupLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signupEmail, password: signupPassword, name: signupName }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSignupError(data.error || "Signup failed");
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
                    templateId: parts[1],
                    promptId: parts[2],
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
                  prompt: data.prompt,
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

      router.push("/blocks-demo/app");
      router.refresh();
      onOpenChange(false);
    } catch (err) {
      setSignupError("An error occurred. Please try again.");
    } finally {
      setSignupLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome</DialogTitle>
          <DialogDescription>
            Login or create an account to get started
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleLogin}>
              <FieldGroup>
                {loginError && (
                  <div className="text-sm text-destructive text-center">{loginError}</div>
                )}
                <Field>
                  <FieldLabel htmlFor="login-email">Email</FieldLabel>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="login-password">Password</FieldLabel>
                  <Input
                    id="login-password"
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <FieldDescription>
                    <a href="#" className="underline-offset-4 hover:underline">
                      Forgot password?
                    </a>
                  </FieldDescription>
                </Field>
                <FieldGroup>
                  <Field>
                    <Button type="submit" disabled={loginLoading}>
                      {loginLoading ? "Logging in..." : "Login"}
                    </Button>
                    <Button variant="outline" type="button">
                      Login with Google
                    </Button>
                  </Field>
                </FieldGroup>
              </FieldGroup>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={handleSignup}>
              <FieldGroup>
                {signupError && (
                  <div className="text-sm text-destructive text-center">{signupError}</div>
                )}
                <Field>
                  <FieldLabel htmlFor="signup-name">Full Name</FieldLabel>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="signup-email">Email</FieldLabel>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                  <FieldDescription>
                    We'll use this to contact you. We will not share your email with anyone else.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="signup-password">Password</FieldLabel>
                  <Input
                    id="signup-password"
                    type="password"
                    required
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                  <FieldDescription>
                    Must be at least 8 characters long.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="signup-confirm-password">
                    Confirm Password
                  </FieldLabel>
                  <Input id="signup-confirm-password" type="password" required />
                  <FieldDescription>Please confirm your password.</FieldDescription>
                </Field>
                <FieldGroup>
                  <Field>
                    <Button type="submit" disabled={signupLoading}>
                      {signupLoading ? "Creating account..." : "Create Account"}
                    </Button>
                    <Button variant="outline" type="button">
                      Sign up with Google
                    </Button>
                  </Field>
                </FieldGroup>
              </FieldGroup>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
