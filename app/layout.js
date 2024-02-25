import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Justin Byrd",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
