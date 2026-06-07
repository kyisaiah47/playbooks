import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Playbooks - Templata",
  description: "Your AI-generated playbooks. Build step-by-step plans for any goal.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
