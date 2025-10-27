'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogTitle
} from '@/components/ui/dialog';
import {
  User,
  Lock,
  Database,
  Bell,
  Palette,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

type SettingsSection = 'profile' | 'privacy' | 'data' | 'notifications' | 'appearance';

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const sidebarItems = [
  { id: 'profile' as const, label: 'My Account' },
  { id: 'appearance' as const, label: 'Appearance' },
  { id: 'notifications' as const, label: 'Notifications' },
  { id: 'privacy' as const, label: 'Security' },
  { id: 'data' as const, label: 'Data' },
];

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  const [activeSection, setActiveSection] = useState<SettingsSection>('profile');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open) {
      loadUserData();
    }

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
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="!max-w-[95vw] !w-[1200px] h-[90vh] p-0 gap-0 overflow-hidden border-0"
        showCloseButton={false}
      >
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-56 border-r border-border/40 flex flex-col bg-background">
            {/* Header */}
            <div className="px-6 py-5 border-b border-border/40 flex items-center justify-between">
              <DialogTitle className="text-sm font-semibold">Settings</DialogTitle>
              <button
                onClick={() => onOpenChange(false)}
                className="rounded-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-0.5">
              {sidebarItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "w-full flex items-center px-3 py-1.5 rounded-md transition-colors text-left text-sm",
                      isActive
                        ? "bg-muted text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col overflow-hidden bg-background">
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-2xl mx-auto px-16 py-12">
                <AnimatePresence mode="wait">
                  {activeSection === 'profile' && (
                    <motion.div
                      key="profile"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-10"
                    >
                      <div>
                        <h2 className="text-xl font-semibold mb-1">My Account</h2>
                        <p className="text-sm text-muted-foreground">
                          Manage your account information
                        </p>
                      </div>

                      <div className="space-y-6">
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
                              <Button size="sm" className="h-8 px-4 text-xs">Save Changes</Button>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {activeSection === 'appearance' && (
                    <motion.div
                      key="appearance"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-10"
                    >
                      <div>
                        <h2 className="text-xl font-semibold mb-1">Appearance</h2>
                        <p className="text-sm text-muted-foreground">
                          Customize the interface
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">Theme</p>
                          <div className="grid grid-cols-3 gap-3">
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
                      className="space-y-10"
                    >
                      <div>
                        <h2 className="text-xl font-semibold mb-1">Notifications</h2>
                        <p className="text-sm text-muted-foreground">
                          Manage your notification preferences
                        </p>
                      </div>

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

                  {activeSection === 'privacy' && (
                    <motion.div
                      key="privacy"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-10"
                    >
                      <div>
                        <h2 className="text-xl font-semibold mb-1">Security</h2>
                        <p className="text-sm text-muted-foreground">
                          Keep your account secure
                        </p>
                      </div>

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
                              <Button size="sm" className="h-8 px-4 text-xs">Update</Button>
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

                  {activeSection === 'data' && (
                    <motion.div
                      key="data"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-10"
                    >
                      <div>
                        <h2 className="text-xl font-semibold mb-1">Data</h2>
                        <p className="text-sm text-muted-foreground">
                          Export or delete your data
                        </p>
                      </div>

                      <div className="space-y-8">
                        <div className="pb-6 border-b border-border/40">
                          <p className="text-sm text-foreground mb-1">Export data</p>
                          <p className="text-xs text-muted-foreground mb-4">
                            Download all your content and data
                          </p>
                          <Button variant="outline" size="sm" className="h-8 px-4 text-xs">Export</Button>
                        </div>

                        <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5">
                          <p className="text-sm text-destructive mb-1 font-medium">Delete account</p>
                          <p className="text-xs text-muted-foreground mb-4">
                            This will permanently delete your account and all data
                          </p>
                          <Button variant="destructive" size="sm" className="h-8 px-4 text-xs">Delete</Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
