"use client";

import {
  BookOpen,
  Calendar,
  CheckSquare,
  FileText,
  LogOut,
  Moon,
  PanelBottomOpen,
  Settings,
  Sun,
  User,
  LayoutDashboard,
  FolderOpen,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { DockTrackSelector } from "@/components/dock-track-selector";
import { DockCalendarSelector } from "@/components/dock-calendar-selector";
import { DockTasksSelector } from "@/components/dock-tasks-selector";
import { SettingsDialog } from "@/components/settings-dialog";
import { CreateTrackDialog } from "@/components/create-track-dialog";
import { useDataCache } from "@/contexts/DataCacheContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type View = 'guides' | 'notes' | 'overview';

interface FloatingDockNavProps {
  currentView: View;
  onViewChange: (view: View) => void;
  onThemeToggle: () => void;
  isDark: boolean;
  selectedTrackIds: string[];
  onTrackSelectionChange: (trackIds: string[]) => void;
  trackSelectorOpen: boolean;
  setTrackSelectorOpen: (open: boolean) => void;
  calendarSelectorOpen: boolean;
  setCalendarSelectorOpen: (open: boolean) => void;
  tasksSelectorOpen: boolean;
  setTasksSelectorOpen: (open: boolean) => void;
}

const FloatingDockNav = ({ currentView, onViewChange, onThemeToggle, isDark, selectedTrackIds, onTrackSelectionChange, trackSelectorOpen, setTrackSelectorOpen, calendarSelectorOpen, setCalendarSelectorOpen, tasksSelectorOpen, setTasksSelectorOpen }: FloatingDockNavProps) => {
  const { invalidateAll } = useDataCache();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [createTrackDialogOpen, setCreateTrackDialogOpen] = useState(false);
  const [trackRefreshKey, setTrackRefreshKey] = useState(0);

  const handleLogout = async () => {
    try {
      // Clear all cached data
      invalidateAll();
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/';
    } catch (error) {
    }
  };

  const tabs = [
    {
      title: "Tracks",
      icon: <FolderOpen />,
      onClick: () => setTrackSelectorOpen(!trackSelectorOpen),
      isActive: false,
      isTrackSelector: true,
    },
    {
      title: "Guides",
      icon: <BookOpen />,
      onClick: () => onViewChange('guides'),
      isActive: currentView === 'guides',
    },
    {
      title: "Notes",
      icon: <FileText />,
      onClick: () => onViewChange('notes'),
      isActive: currentView === 'notes',
    },
    {
      title: "Calendar",
      icon: <Calendar />,
      onClick: () => setCalendarSelectorOpen(!calendarSelectorOpen),
      isActive: false,
      isCalendarSelector: true,
    },
    {
      title: "Tasks",
      icon: <CheckSquare />,
      onClick: () => setTasksSelectorOpen(!tasksSelectorOpen),
      isActive: false,
      isTasksSelector: true,
    },
    {
      title: "Overview",
      icon: <LayoutDashboard />,
      onClick: () => onViewChange('overview'),
      isActive: currentView === 'overview',
    },
    {
      title: isDark ? "Light Mode" : "Dark Mode",
      icon: isDark ? <Sun /> : <Moon />,
      onClick: onThemeToggle,
      isActive: false,
    },
    {
      title: "Settings",
      icon: <Settings />,
      onClick: () => setSettingsOpen(true),
      isActive: false,
    },
    {
      title: "Logout",
      icon: <LogOut />,
      onClick: () => setLogoutDialogOpen(true),
      isActive: false,
    },
  ];
  return (
    <section>
      <div className="container flex justify-center">
        <FloatingDock
          desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2"
          mobileClassName="fixed right-6 bottom-6"
          items={tabs}
          trackSelectorOpen={trackSelectorOpen}
          setTrackSelectorOpen={setTrackSelectorOpen}
          calendarSelectorOpen={calendarSelectorOpen}
          setCalendarSelectorOpen={setCalendarSelectorOpen}
          tasksSelectorOpen={tasksSelectorOpen}
          setTasksSelectorOpen={setTasksSelectorOpen}
          selectedTrackIds={selectedTrackIds}
          onTrackSelectionChange={onTrackSelectionChange}
          onOpenCreateDialog={() => {
            setCreateTrackDialogOpen(true);
            setTrackSelectorOpen(false);
          }}
          trackRefreshKey={trackRefreshKey}
        />
      </div>
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
      <CreateTrackDialog
        open={createTrackDialogOpen}
        onOpenChange={setCreateTrackDialogOpen}
        onTrackCreated={(trackId) => {
          setTrackRefreshKey(prev => prev + 1);
          onTrackSelectionChange([trackId]);
          onViewChange('guides');
        }}
      />
      <AlertDialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
            <AlertDialogDescription>
              You'll need to sign in again to access your tracks and data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};
export { FloatingDockNav };

// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/floating-dock.json
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  trackSelectorOpen,
  setTrackSelectorOpen,
  calendarSelectorOpen,
  setCalendarSelectorOpen,
  tasksSelectorOpen,
  setTasksSelectorOpen,
  selectedTrackIds,
  onTrackSelectionChange,
  onOpenCreateDialog,
  trackRefreshKey,
}: {
  items: { title: string; icon: React.ReactNode; onClick: () => void; isActive: boolean; isTrackSelector?: boolean; isCalendarSelector?: boolean; isTasksSelector?: boolean }[];
  desktopClassName?: string;
  mobileClassName?: string;
  trackSelectorOpen: boolean;
  setTrackSelectorOpen: (open: boolean) => void;
  calendarSelectorOpen: boolean;
  setCalendarSelectorOpen: (open: boolean) => void;
  tasksSelectorOpen: boolean;
  setTasksSelectorOpen: (open: boolean) => void;
  selectedTrackIds: string[];
  onTrackSelectionChange: (trackIds: string[]) => void;
  onOpenCreateDialog: () => void;
  trackRefreshKey: number;
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        trackSelectorOpen={trackSelectorOpen}
        setTrackSelectorOpen={setTrackSelectorOpen}
        calendarSelectorOpen={calendarSelectorOpen}
        setCalendarSelectorOpen={setCalendarSelectorOpen}
        tasksSelectorOpen={tasksSelectorOpen}
        setTasksSelectorOpen={setTasksSelectorOpen}
        selectedTrackIds={selectedTrackIds}
        onTrackSelectionChange={onTrackSelectionChange}
        onOpenCreateDialog={onOpenCreateDialog}
        trackRefreshKey={trackRefreshKey}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        trackSelectorOpen={trackSelectorOpen}
        setTrackSelectorOpen={setTrackSelectorOpen}
        calendarSelectorOpen={calendarSelectorOpen}
        setCalendarSelectorOpen={setCalendarSelectorOpen}
        tasksSelectorOpen={tasksSelectorOpen}
        setTasksSelectorOpen={setTasksSelectorOpen}
        selectedTrackIds={selectedTrackIds}
        onTrackSelectionChange={onTrackSelectionChange}
        onOpenCreateDialog={onOpenCreateDialog}
        trackRefreshKey={trackRefreshKey}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  trackSelectorOpen,
  setTrackSelectorOpen,
  calendarSelectorOpen,
  setCalendarSelectorOpen,
  tasksSelectorOpen,
  setTasksSelectorOpen,
  selectedTrackIds,
  onTrackSelectionChange,
  onOpenCreateDialog,
  trackRefreshKey,
}: {
  items: { title: string; icon: React.ReactNode; onClick: () => void; isActive: boolean; isTrackSelector?: boolean; isCalendarSelector?: boolean; isTasksSelector?: boolean }[];
  className?: string;
  trackSelectorOpen: boolean;
  setTrackSelectorOpen: (open: boolean) => void;
  calendarSelectorOpen: boolean;
  setCalendarSelectorOpen: (open: boolean) => void;
  tasksSelectorOpen: boolean;
  setTasksSelectorOpen: (open: boolean) => void;
  selectedTrackIds: string[];
  onTrackSelectionChange: (trackIds: string[]) => void;
  onOpenCreateDialog: () => void;
  trackRefreshKey: number;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="z-99 absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => {
              if (item.isTrackSelector) {
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      transition: {
                        delay: idx * 0.05,
                      },
                    }}
                    transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                  >
                    <Popover open={trackSelectorOpen} onOpenChange={setTrackSelectorOpen}>
                      <PopoverTrigger asChild>
                        <button
                          className={cn(
                            "bg-background border flex h-10 w-10 items-center justify-center rounded-xl",
                            "border-border"
                          )}
                        >
                          <div>{item.icon}</div>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[280px] p-0 z-[100]" align="center" side="top" sideOffset={16}>
                        <DockTrackSelector
                          selectedTrackIds={selectedTrackIds}
                          onSelectionChange={onTrackSelectionChange}
                          isOpen={true}
                          onClose={() => setTrackSelectorOpen(false)}
                          noWrapper={true}
                          onOpenCreateDialog={onOpenCreateDialog}
                          refreshKey={trackRefreshKey}
                        />
                      </PopoverContent>
                    </Popover>
                  </motion.div>
                );
              }

              if (item.isCalendarSelector) {
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      transition: {
                        delay: idx * 0.05,
                      },
                    }}
                    transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                  >
                    <Popover open={calendarSelectorOpen} onOpenChange={setCalendarSelectorOpen}>
                      <PopoverTrigger asChild>
                        <button
                          className={cn(
                            "bg-background border flex h-10 w-10 items-center justify-center rounded-xl",
                            "border-border"
                          )}
                        >
                          <div>{item.icon}</div>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-[100]" align="center" side="top" sideOffset={16}>
                        <DockCalendarSelector
                          isOpen={true}
                          onClose={() => setCalendarSelectorOpen(false)}
                          noWrapper={true}
                          selectedTrackIds={selectedTrackIds}
                        />
                      </PopoverContent>
                    </Popover>
                  </motion.div>
                );
              }

              if (item.isTasksSelector) {
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      transition: {
                        delay: idx * 0.05,
                      },
                    }}
                    transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                  >
                    <Popover open={tasksSelectorOpen} onOpenChange={setTasksSelectorOpen}>
                      <PopoverTrigger asChild>
                        <button
                          className={cn(
                            "bg-background border flex h-10 w-10 items-center justify-center rounded-xl",
                            "border-border"
                          )}
                        >
                          <div>{item.icon}</div>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[280px] p-0 z-[100]" align="center" side="top" sideOffset={16}>
                        <DockTasksSelector
                          isOpen={true}
                          onClose={() => setTasksSelectorOpen(false)}
                          selectedTrackIds={selectedTrackIds}
                        />
                      </PopoverContent>
                    </Popover>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <button
                    onClick={() => {
                      item.onClick();
                      setOpen(false);
                    }}
                    key={item.title}
                    className={cn(
                      "bg-background border flex h-10 w-10 items-center justify-center rounded-xl",
                      item.isActive ? "border-primary bg-primary/10" : "border-border"
                    )}
                  >
                    <div>{item.icon}</div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="bg-background border border-border flex h-10 w-10 items-center justify-center rounded-xl"
      >
        <PanelBottomOpen />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  trackSelectorOpen,
  setTrackSelectorOpen,
  calendarSelectorOpen,
  setCalendarSelectorOpen,
  tasksSelectorOpen,
  setTasksSelectorOpen,
  selectedTrackIds,
  onTrackSelectionChange,
  onOpenCreateDialog,
  trackRefreshKey,
}: {
  items: { title: string; icon: React.ReactNode; onClick: () => void; isActive: boolean; isTrackSelector?: boolean; isCalendarSelector?: boolean; isTasksSelector?: boolean }[];
  className?: string;
  trackSelectorOpen: boolean;
  setTrackSelectorOpen: (open: boolean) => void;
  calendarSelectorOpen: boolean;
  setCalendarSelectorOpen: (open: boolean) => void;
  tasksSelectorOpen: boolean;
  setTasksSelectorOpen: (open: boolean) => void;
  selectedTrackIds: string[];
  onTrackSelectionChange: (trackIds: string[]) => void;
  onOpenCreateDialog: () => void;
  trackRefreshKey: number;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <div className="relative">
      <motion.div
        onMouseMove={(e) => {
          if (!trackSelectorOpen && !calendarSelectorOpen && !tasksSelectorOpen) {
            mouseX.set(e.pageX);
          }
        }}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "bg-background border border-border shadow-lg z-99 mx-auto hidden h-16 items-end items-center justify-center gap-2 rounded-3xl px-5 md:flex",
          className,
        )}
      >
        {items.map((item) => (
          <IconContainer
            mouseX={mouseX}
            key={item.title}
            {...item}
            trackSelectorOpen={trackSelectorOpen}
            setTrackSelectorOpen={setTrackSelectorOpen}
            calendarSelectorOpen={calendarSelectorOpen}
            setCalendarSelectorOpen={setCalendarSelectorOpen}
            tasksSelectorOpen={tasksSelectorOpen}
            setTasksSelectorOpen={setTasksSelectorOpen}
            selectedTrackIds={selectedTrackIds}
            onTrackSelectionChange={onTrackSelectionChange}
            onOpenCreateDialog={onOpenCreateDialog}
            trackRefreshKey={trackRefreshKey}
          />
        ))}
      </motion.div>
    </div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  onClick,
  isActive,
  isTrackSelector,
  isCalendarSelector,
  isTasksSelector,
  trackSelectorOpen,
  setTrackSelectorOpen,
  calendarSelectorOpen,
  setCalendarSelectorOpen,
  tasksSelectorOpen,
  setTasksSelectorOpen,
  selectedTrackIds,
  onTrackSelectionChange,
  onOpenCreateDialog,
  trackRefreshKey,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
  isTrackSelector?: boolean;
  isCalendarSelector?: boolean;
  isTasksSelector?: boolean;
  trackSelectorOpen?: boolean;
  setTrackSelectorOpen?: (open: boolean) => void;
  calendarSelectorOpen?: boolean;
  setCalendarSelectorOpen?: (open: boolean) => void;
  tasksSelectorOpen?: boolean;
  setTasksSelectorOpen?: (open: boolean) => void;
  selectedTrackIds?: string[];
  onTrackSelectionChange?: (trackIds: string[]) => void;
  onOpenCreateDialog?: () => void;
  trackRefreshKey?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const rounded = useSpring(
    useTransform(distance, [-150, 0, 150], [50, 10, 50]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    },
  );

  const [hovered, setHovered] = useState(false);

  const buttonContent = (
    <motion.div
      ref={ref}
      style={{ width, height, borderRadius: rounded }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex aspect-square items-center justify-center",
        isActive ? "bg-primary/20" : "bg-muted/50"
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="bg-muted absolute -top-8 left-1/2 w-fit whitespace-pre rounded-full px-4 py-0.5 text-xs"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className={cn(
          "flex items-center justify-center",
          isActive ? "text-primary" : "text-foreground"
        )}
      >
        {icon}
      </motion.div>
    </motion.div>
  );

  if (isTrackSelector && trackSelectorOpen !== undefined && setTrackSelectorOpen && selectedTrackIds && onTrackSelectionChange) {
    return (
      <Popover open={trackSelectorOpen} onOpenChange={setTrackSelectorOpen}>
        <PopoverTrigger asChild>
          <button>
            {buttonContent}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0 z-[100]" align="start" side="top" sideOffset={16}>
          <DockTrackSelector
            selectedTrackIds={selectedTrackIds}
            onSelectionChange={onTrackSelectionChange}
            isOpen={true}
            onClose={() => setTrackSelectorOpen(false)}
            noWrapper={true}
            onOpenCreateDialog={onOpenCreateDialog}
            refreshKey={trackRefreshKey}
          />
        </PopoverContent>
      </Popover>
    );
  }

  if (isCalendarSelector && calendarSelectorOpen !== undefined && setCalendarSelectorOpen) {
    return (
      <Popover open={calendarSelectorOpen} onOpenChange={setCalendarSelectorOpen}>
        <PopoverTrigger asChild>
          <button>
            {buttonContent}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 z-[100]" align="start" side="top" sideOffset={16}>
          <DockCalendarSelector
            isOpen={true}
            onClose={() => setCalendarSelectorOpen(false)}
            noWrapper={true}
            selectedTrackIds={selectedTrackIds}
          />
        </PopoverContent>
      </Popover>
    );
  }

  if (isTasksSelector && tasksSelectorOpen !== undefined && setTasksSelectorOpen) {
    return (
      <Popover open={tasksSelectorOpen} onOpenChange={setTasksSelectorOpen}>
        <PopoverTrigger asChild>
          <button>
            {buttonContent}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0 z-[100]" align="start" side="top" sideOffset={16}>
          <DockTasksSelector
            isOpen={true}
            onClose={() => setTasksSelectorOpen(false)}
            selectedTrackIds={selectedTrackIds}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <button onClick={onClick}>
      {buttonContent}
    </button>
  );
}
