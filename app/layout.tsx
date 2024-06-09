import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const inter = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Undangan Wisuda SMPN 2 NGAJUM",
  description: "Graduation Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
