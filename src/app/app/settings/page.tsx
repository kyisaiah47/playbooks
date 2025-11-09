'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, User, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<'profile' | 'privacy' | 'data' | 'notifications' | 'appearance'>('profile');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
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
      } catch {
        // Ignore errors
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <motion.div
        className="border-b bg-background"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/app">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to App
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-foreground">Settings</h1>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex">
        {/* Sidebar Navigation */}
        <motion.div
          className="w-64 border-r bg-background overflow-y-auto"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="p-4 space-y-2">
            <button
              onClick={() => setActiveSection('profile')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
                activeSection === 'profile'
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              <User className="h-4 w-4" />
              <span className="font-medium">Profile</span>
            </button>
            <button
              onClick={() => setActiveSection('privacy')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
                activeSection === 'privacy'
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              <Lock className="h-4 w-4" />
              <span className="font-medium">Privacy & Security</span>
            </button>
            <button
              onClick={() => setActiveSection('data')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
                activeSection === 'data'
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              <Database className="h-4 w-4" />
              <span className="font-medium">Data & Storage</span>
            </button>
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          className="flex-1 overflow-y-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="container mx-auto max-w-3xl px-8 py-8">
            {activeSection === 'profile' && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Profile Settings</h2>
                  <p className="text-sm text-muted-foreground">
                    Manage your profile information and preferences
                  </p>
                </div>

                <Card className="p-6">
                  {loading ? (
                    <p className="text-sm text-muted-foreground">Loading profile...</p>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-foreground block mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground block mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                          disabled
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Email cannot be changed
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground block mb-2">
                          Bio
                        </label>
                        <textarea
                          placeholder="Tell us about yourself..."
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground min-h-[100px]"
                        />
                      </div>
                      <Button>Save Changes</Button>
                    </div>
                  )}
                </Card>
              </motion.div>
            )}

            {activeSection === 'notifications' && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Notification Preferences</h2>
                  <p className="text-sm text-muted-foreground">
                    Choose what updates you want to receive
                  </p>
                </div>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">
                          Receive email updates about your activity
                        </p>
                      </div>
                      <input type="checkbox" className="h-4 w-4" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Daily Reminders</p>
                        <p className="text-sm text-muted-foreground">
                          Daily reminders to complete your tasks
                        </p>
                      </div>
                      <input type="checkbox" className="h-4 w-4" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Template Updates</p>
                        <p className="text-sm text-muted-foreground">
                          Notifications about new templates and articles
                        </p>
                      </div>
                      <input type="checkbox" className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {activeSection === 'privacy' && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Privacy & Security</h2>
                  <p className="text-sm text-muted-foreground">
                    Manage your account security and privacy settings
                  </p>
                </div>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Change Password
                      </label>
                      <input
                        type="password"
                        placeholder="New password"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground mb-2"
                      />
                      <input
                        type="password"
                        placeholder="Confirm password"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                      />
                    </div>
                    <Button>Update Password</Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security
                        </p>
                      </div>
                      <Badge variant="outline">Coming Soon</Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {activeSection === 'appearance' && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Appearance</h2>
                  <p className="text-sm text-muted-foreground">
                    Customize how Templata looks for you
                  </p>
                </div>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-foreground mb-3">Theme</p>
                      <div className="grid grid-cols-3 gap-3">
                        <button className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                          <div className="w-full h-20 bg-gradient-to-br from-white to-gray-100 rounded mb-2" />
                          <p className="text-sm text-foreground">Light</p>
                        </button>
                        <button className="p-4 border border-primary rounded-lg">
                          <div className="w-full h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded mb-2" />
                          <p className="text-sm text-foreground">Dark</p>
                        </button>
                        <button className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                          <div className="w-full h-20 bg-gradient-to-br from-white via-gray-500 to-gray-900 rounded mb-2" />
                          <p className="text-sm text-foreground">System</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {activeSection === 'data' && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Data & Storage</h2>
                  <p className="text-sm text-muted-foreground">
                    Manage your data and export options
                  </p>
                </div>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-foreground mb-2">Export Your Data</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        Download all your responses and data
                      </p>
                      <Button variant="outline">Export Data</Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-destructive mb-2">Delete Account</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        Permanently delete your account and all associated data
                      </p>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
