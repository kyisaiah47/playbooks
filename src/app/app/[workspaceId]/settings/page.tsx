'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDemo } from '@/contexts/demo-context';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  const searchParams = useSearchParams();
  const section = (searchParams.get('section') as 'profile' | 'appearance' | 'notifications' | 'privacy' | 'data') || 'profile';
  const { demoMode } = useDemo();
  const { theme, setTheme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceIcon, setWorkspaceIcon] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserData();

    async function loadUserData() {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();

        if (data.user) {
          setName(data.user.name || '');
          setEmail(data.user.email || '');
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return (
    <motion.div
      className="h-full flex flex-col bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Settings className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Settings</h1>
            <p className="text-xs text-muted-foreground">Manage your account and preferences</p>
          </div>
        </div>
      </div>

      {/* Content - Show only selected section */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-8">

          {/* Profile Section */}
          {section === 'profile' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-base font-semibold mb-6">Profile</h2>
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading...</p>
            ) : (
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border-0 border-b border-border bg-transparent text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    className="w-full px-3 py-2 border-0 border-b border-border bg-transparent text-muted-foreground text-sm cursor-not-allowed"
                    disabled
                  />
                  <p className="text-xs text-muted-foreground pt-1">
                    Email cannot be changed
                  </p>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Bio
                  </label>
                  <textarea
                    placeholder="Tell us about yourself..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md bg-transparent text-foreground text-sm min-h-[80px] focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                <div className="pt-2">
                  <Button
                    size="sm"
                    className="h-8 px-4 text-xs"
                    onClick={() => {
                      if (demoMode) {
                        toast.info('Not available in demo mode');
                        return;
                      }
                      // Save logic here
                    }}
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
          )}

          {/* Appearance Section */}
          {section === 'appearance' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-base font-semibold mb-6">Appearance</h2>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">Theme</p>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setTheme('light')}
                  className={`group p-3 rounded-md transition-colors ${
                    theme === 'light'
                      ? 'border-2 border-foreground'
                      : 'border border-border/40 hover:border-foreground/40'
                  }`}
                >
                  <div className="w-full h-16 bg-gradient-to-br from-white to-gray-100 rounded mb-2 border border-border/40" />
                  <p className={`text-xs ${theme === 'light' ? 'text-foreground font-medium' : 'text-foreground'}`}>Light</p>
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`group p-3 rounded-md transition-colors ${
                    theme === 'dark'
                      ? 'border-2 border-foreground'
                      : 'border border-border/40 hover:border-foreground/40'
                  }`}
                >
                  <div className="w-full h-16 bg-gradient-to-br from-gray-800 to-gray-950 rounded mb-2" />
                  <p className={`text-xs ${theme === 'dark' ? 'text-foreground font-medium' : 'text-foreground'}`}>Dark</p>
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`group p-3 rounded-md transition-colors ${
                    theme === 'system'
                      ? 'border-2 border-foreground'
                      : 'border border-border/40 hover:border-foreground/40'
                  }`}
                >
                  <div className="w-full h-16 bg-gradient-to-br from-white via-gray-500 to-gray-900 rounded mb-2" />
                  <p className={`text-xs ${theme === 'system' ? 'text-foreground font-medium' : 'text-foreground'}`}>System</p>
                </button>
              </div>
            </div>
          </motion.div>
          )}

          {/* Notifications Section */}
          {section === 'notifications' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-base font-semibold mb-6">Notifications</h2>
            <div className="space-y-0">
              <div className="flex items-center justify-between py-4 border-b border-border/40">
                <div>
                  <p className="text-sm text-foreground">Email notifications</p>
                  <p className="text-xs text-muted-foreground">
                    Receive updates via email
                  </p>
                </div>
                <input type="checkbox" className="h-4 w-4 accent-foreground" />
              </div>
              <div className="flex items-center justify-between py-4 border-b border-border/40">
                <div>
                  <p className="text-sm text-foreground">Daily reminders</p>
                  <p className="text-xs text-muted-foreground">
                    Get reminded to journal daily
                  </p>
                </div>
                <input type="checkbox" className="h-4 w-4 accent-foreground" />
              </div>
              <div className="flex items-center justify-between py-4 border-b border-border/40">
                <div>
                  <p className="text-sm text-foreground">Guide updates</p>
                  <p className="text-xs text-muted-foreground">
                    New guides and features
                  </p>
                </div>
                <input type="checkbox" className="h-4 w-4 accent-foreground" />
              </div>
            </div>
          </motion.div>
          )}

          {/* Privacy/Security Section */}
          {section === 'privacy' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-base font-semibold mb-6">Privacy & Security</h2>
            <div className="space-y-8">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">Password</p>
                <div className="space-y-3">
                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full px-3 py-2 border-0 border-b border-border bg-transparent text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full px-3 py-2 border-0 border-b border-border bg-transparent text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                  <div className="pt-2">
                    <Button size="sm" className="h-8 px-4 text-xs">Update Password</Button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground mb-1">Two-factor authentication</p>
                    <p className="text-xs text-muted-foreground">
                      Add extra security to your account
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs font-normal">Soon</Badge>
                </div>
              </div>
            </div>
          </motion.div>
          )}

          {/* Data & Danger Zone */}
          {section === 'data' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-base font-semibold mb-6">Data & Account</h2>
            <div className="space-y-6">
              <div className="pb-6 border-b border-border/40">
                <p className="text-sm text-foreground mb-1">Export data</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Download all your content and data
                </p>
                <Button variant="outline" size="sm" className="h-8 px-4 text-xs">Export</Button>
              </div>

              <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5">
                <p className="text-sm text-destructive mb-1 font-medium">Delete workspace</p>
                <p className="text-xs text-muted-foreground mb-4">
                  This will permanently delete this workspace and all its content
                </p>
                <Button variant="destructive" size="sm" className="h-8 px-4 text-xs">Delete Workspace</Button>
              </div>

              <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5">
                <p className="text-sm text-destructive mb-1 font-medium">Delete account</p>
                <p className="text-xs text-muted-foreground mb-4">
                  This will permanently delete your account and all data
                </p>
                <Button variant="destructive" size="sm" className="h-8 px-4 text-xs">Delete Account</Button>
              </div>
            </div>
          </motion.div>
          )}

        </div>
      </div>
    </motion.div>
  );
}
