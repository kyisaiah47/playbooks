'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDemo } from '@/contexts/demo-context';
import { toast } from 'sonner';

type SettingsSection = 'profile' | 'privacy' | 'data' | 'notifications' | 'appearance' | 'workspace';

export default function SettingsPage() {
  const { demoMode } = useDemo();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState<SettingsSection>('profile');
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

  // Sync section from URL
  useEffect(() => {
    const section = searchParams.get('section') as SettingsSection;
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams]);

  return (
    <motion.div
      className="h-full flex flex-col bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <AnimatePresence mode="wait">
          {activeSection === 'profile' && (
            <motion.div
              key="profile-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <h1 className="text-lg font-semibold">My Account</h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Manage your account information
              </p>
            </motion.div>
          )}
          {activeSection === 'appearance' && (
            <motion.div
              key="appearance-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <h1 className="text-lg font-semibold">Appearance</h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Customize the interface
              </p>
            </motion.div>
          )}
          {activeSection === 'notifications' && (
            <motion.div
              key="notifications-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <h1 className="text-lg font-semibold">Notifications</h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Manage your notification preferences
              </p>
            </motion.div>
          )}
          {activeSection === 'privacy' && (
            <motion.div
              key="privacy-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <h1 className="text-lg font-semibold">Security</h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Keep your account secure
              </p>
            </motion.div>
          )}
          {activeSection === 'data' && (
            <motion.div
              key="data-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <h1 className="text-lg font-semibold">Data</h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Export or delete your data
              </p>
            </motion.div>
          )}
          {activeSection === 'workspace' && (
            <motion.div
              key="workspace-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <h1 className="text-lg font-semibold">Workspace</h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Manage this workspace
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-6">
          <AnimatePresence mode="wait">
            {activeSection === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-6"
              >
                {loading ? (
                  <p className="text-sm text-muted-foreground">Loading...</p>
                ) : (
                  <>
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
                  </>
                )}
              </motion.div>
            )}

            {activeSection === 'appearance' && (
              <motion.div
                key="appearance"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">Theme</p>
                  <div className="grid grid-cols-3 gap-3 max-w-md">
                    <button className="group p-3 border border-border/40 rounded-md hover:border-foreground/40 transition-colors">
                      <div className="w-full h-16 bg-gradient-to-br from-white to-gray-100 rounded mb-2 border border-border/40" />
                      <p className="text-xs text-foreground">Light</p>
                    </button>
                    <button className="group p-3 border-2 border-foreground rounded-md">
                      <div className="w-full h-16 bg-gradient-to-br from-gray-800 to-gray-950 rounded mb-2" />
                      <p className="text-xs text-foreground font-medium">Dark</p>
                    </button>
                    <button className="group p-3 border border-border/40 rounded-md hover:border-foreground/40 transition-colors">
                      <div className="w-full h-16 bg-gradient-to-br from-white via-gray-500 to-gray-900 rounded mb-2" />
                      <p className="text-xs text-foreground">System</p>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'notifications' && (
              <motion.div
                key="notifications"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-0"
              >
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
              </motion.div>
            )}

            {activeSection === 'privacy' && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">Password</p>
                  <div className="space-y-3 max-w-md">
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
                      <Button size="sm" className="h-8 px-4 text-xs">Update</Button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40 max-w-md">
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
              </motion.div>
            )}

            {activeSection === 'data' && (
              <motion.div
                key="data"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-8"
              >
                <div className="pb-6 border-b border-border/40 max-w-md">
                  <p className="text-sm text-foreground mb-1">Export data</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Download all your content and data
                  </p>
                  <Button variant="outline" size="sm" className="h-8 px-4 text-xs">Export</Button>
                </div>

                <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5 max-w-md">
                  <p className="text-sm text-destructive mb-1 font-medium">Delete account</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    This will permanently delete your account and all data
                  </p>
                  <Button variant="destructive" size="sm" className="h-8 px-4 text-xs">Delete</Button>
                </div>
              </motion.div>
            )}

            {activeSection === 'workspace' && (
              <motion.div
                key="workspace"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-6"
              >
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Workspace Name
                  </label>
                  <input
                    type="text"
                    placeholder="Workspace name"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    className="w-full px-3 py-2 border-0 border-b border-border bg-transparent text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Icon (Lucide Icon Name)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Briefcase, Home, Folder"
                    value={workspaceIcon}
                    onChange={(e) => setWorkspaceIcon(e.target.value)}
                    className="w-full px-3 py-2 border-0 border-b border-border bg-transparent text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                  <p className="text-xs text-muted-foreground pt-1">
                    Enter a Lucide icon name like "Briefcase", "Home", or "Folder"
                  </p>
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

                <div className="pt-6 border-t border-border/40">
                  <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5 max-w-md">
                    <p className="text-sm text-destructive mb-1 font-medium">Delete workspace</p>
                    <p className="text-xs text-muted-foreground mb-4">
                      This will permanently delete this workspace and all its content
                    </p>
                    <Button variant="destructive" size="sm" className="h-8 px-4 text-xs">Delete Workspace</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
