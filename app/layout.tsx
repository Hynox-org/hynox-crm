import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const primaryFont = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

// Change the title and description to your own.
export const metadata: Metadata = {
  title: "Hynox CRM - Simple. Smart. Global.",
  description:
    "The only CRM that helps you close deals, send invoices, and get paid worldwide — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      data-editor-id="app/layout.tsx:27:5"
      lang="en"
      className={primaryFont.className}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body data-editor-id="app/layout.tsx:31:7" className="antialiased">
        <main data-editor-id="app/layout.tsx:32:9" className="h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
