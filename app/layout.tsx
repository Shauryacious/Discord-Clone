import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const font = Poppins({ 
  weight: '500',
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visioniyam",
  description: "Helps paralyzed people to use computer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          font.className,
          "bg-white dark:bg-[#313338]"
        )}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="visioniyam-theme"
            // disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
