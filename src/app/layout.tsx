import "~/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Plan Your Work",
  description: "A simple calendar app to help you plan your work.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
