import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { CustomThemeProvider } from "@/components/theme-provider-custom"
import { WeddingProvider } from "@/contexts/wedding-context"
import { HomeBuyingProvider } from "@/contexts/home-buying-context"
import { BabyPlanningProvider } from "@/contexts/baby-planning-context"
import { MealPlanningProvider } from "@/contexts/meal-planning-context"
import { UIProvider } from "@/components/providers/ui-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Templata",
  description: "Organize your life with curated templates and guided setups",
  icons: {
    icon: "/favicon-white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomThemeProvider>
            <UIProvider>
              <MealPlanningProvider>
                <BabyPlanningProvider>
                  <HomeBuyingProvider>
                    <WeddingProvider>
                      {children}
                    </WeddingProvider>
                  </HomeBuyingProvider>
                </BabyPlanningProvider>
              </MealPlanningProvider>
            </UIProvider>
          </CustomThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
