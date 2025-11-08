"use client";

import { ReactNode } from "react";

// Simple pass-through wrapper (next-auth removed - using Supabase Auth instead)
export function SessionProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
