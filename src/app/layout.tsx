import TopBar from "@/components/top-bar";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Art Portfolio",
  description: "by Sonia Marques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
      </head>
      <body>
        {/* TopBar component for global navigation */}
        <TopBar />

        {/* Main content of the page */}
        <div className="pt-10"> {/* Add padding-top to avoid overlap with fixed TopBar */}
          {children}
        </div>
      </body>
    </html>
  );
}
