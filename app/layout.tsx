import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dakwah Digital - KMI Nurul Huda",
  description: "Pembekalan Calon Alumni KMI Nurul Huda Purbalingga",
};

// PERBAIKAN: Menambahkan interface untuk tipe data props TypeScript
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id" className="dark">
      <body className="antialiased bg-[#070a13] text-slate-200">
        {children}
      </body>
    </html>
  );
}