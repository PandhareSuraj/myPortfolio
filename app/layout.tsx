import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suraj-pandhare.dev"),
  title: {
    default: "Suraj Pandhare | Full Stack & Android Developer",
    template: "%s | Suraj Pandhare"
  },
  description:
    "Premium developer portfolio for Suraj Pandhare, an MCS student, full stack developer, and Android developer building scalable applications.",
  keywords: [
    "Suraj Pandhare",
    "Full Stack Developer",
    "Android Developer",
    "Kotlin Developer",
    "React Developer",
    "MCS Student",
    "Portfolio"
  ],
  authors: [{ name: "Suraj Pandhare" }],
  openGraph: {
    title: "Suraj Pandhare | Full Stack & Android Developer",
    description: "Portfolio, projects, services, GitHub work, and contact details.",
    url: "https://suraj-pandhare.dev",
    siteName: "Suraj Pandhare Portfolio",
    images: [{ url: "/images/myphoto1.jpg", width: 1200, height: 630, alt: "Suraj Pandhare" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Pandhare | Developer Portfolio",
    description: "Full stack and Android developer portfolio.",
    images: ["/images/myphoto1.jpg"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
