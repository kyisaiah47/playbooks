"use client";

import { useState, useEffect } from "react";
import { ErrorLogger } from "@/lib/error-logger";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      loadUserData();
    }
  }, [open]);

  async function loadUserData() {
    try {
      const res = await fetch('/api/auth/me');
      const data = await res.json();

      if (data.user) {
        setName(data.user.name || '');
        setEmail(data.user.email || '');
      }
    } catch (error) {
      ErrorLogger.logError(error, {
        component: 'SettingsDialog',
        action: 'loadUserData'
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleSaveAccount() {
    setSaving(true);
    try {
      const res = await fetch('/api/user/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        onOpenChange(false);
      }
    } catch (error) {
      ErrorLogger.logError(error, {
        component: 'SettingsDialog',
        action: 'handleSaveAccount'
      });
    } finally {
      setSaving(false);
    }
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Manage your account settings and preferences.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="data">Data & Privacy</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="settings-name">Name</Label>
                  <Input
                    id="settings-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="settings-email">Email</Label>
                  <Input
                    id="settings-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSaveAccount} disabled={saving || loading}>
                  {saving ? "Saving..." : "Save changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you&apos;ll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="settings-current">Current password</Label>
                  <Input id="settings-current" type="password" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="settings-new">New password</Label>
                  <Input id="settings-new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="data">
            <Card>
              <CardHeader>
                <CardTitle>Data & Privacy</CardTitle>
                <CardDescription>
                  Manage your data and privacy settings.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label>Export Data</Label>
                  <p className="text-sm text-muted-foreground">
                    Download all your data including guides, notes, tasks, and calendar events.
                  </p>
                  <Button variant="outline" className="w-fit">
                    Export All Data
                  </Button>
                </div>
                <div className="grid gap-3 pt-6 border-t border-destructive/20">
                  <Label className="text-destructive">Danger Zone</Label>
                  <p className="text-sm text-muted-foreground">
                    Once you delete your account, there is no going back. This action cannot be undone.
                  </p>
                  <Button variant="destructive" className="w-fit">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
                <CardDescription>
                  App information and support.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label>Version</Label>
                  <p className="text-sm text-muted-foreground">
                    Templata v1.0.0 (Beta)
                  </p>
                </div>
                <div className="grid gap-3">
                  <Label>Help & Support</Label>
                  <div className="flex flex-col gap-2">
                    <a
                      href="/docs"
                      target="_blank"
                      className="text-sm text-primary hover:underline"
                    >
                      Documentation
                    </a>
                    <a
                      href="mailto:support@templata.org"
                      className="text-sm text-primary hover:underline"
                    >
                      Contact Support
                    </a>
                    <a
                      href="/changelog"
                      target="_blank"
                      className="text-sm text-primary hover:underline"
                    >
                      What's New
                    </a>
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label>Legal</Label>
                  <div className="flex flex-col gap-2">
                    <a
                      href="/terms"
                      target="_blank"
                      className="text-sm text-primary hover:underline"
                    >
                      Terms of Service
                    </a>
                    <a
                      href="/privacy"
                      target="_blank"
                      className="text-sm text-primary hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
