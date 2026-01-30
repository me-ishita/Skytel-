import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Insights Blog",
  description: "Latest tech articles, insights, and tutorials for developers.",
  openGraph: {
    title: "Tech Insights Blog",
    description: "Latest tech articles, insights, and tutorials for developers.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Insights Blog",
    description: "Latest tech articles, insights, and tutorials for developers.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
