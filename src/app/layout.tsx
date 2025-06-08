import { Nunito } from "next/font/google";
import "./globals.css";

const geistNunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistNunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
