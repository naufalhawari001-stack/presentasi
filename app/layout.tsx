import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sekolah Tabligh - PWM JATENG",
  description: "Metodologi Pendampingan Mualaf",
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