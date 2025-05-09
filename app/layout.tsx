import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const bai = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Enes SARIHAN",
  description: "A portfolio site who created by Enes SARIHAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bai.className}  antialiased`}>{children}</body>
    </html>
  );
}
