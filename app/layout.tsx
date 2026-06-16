import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Inisialisasi Font Premium Geist untuk Tampilan Tekstual Minimalis & Futuristik
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Metadata Resmi Disesuaikan Berdasarkan Kop Rundown KMI Nurul Huda
export const metadata = {
  title: "Dakwah Digital // KMI Nurul Huda Purbalingga",
  description: "Sistem Presentasi Pembekalan Calon Alumni KMI Nurul Huda Purbalingga - Tahun Ajaran 2025/2026",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#070a13] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
        
        {/* Ornamen Laser Cyber di Sisi Atas Layar Frame Presentasi */}
        <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent z-50 opacity-40" />
        
        {/* Main Frame Konten Aplikasi Presentasi */}
        <div className="flex-1 flex flex-col relative z-10">
          {children}
        </div>

        {/* Footer Sinkron dengan Tahun Ajaran Pengabdian Calon Alumni */}
        <footer className="w-full text-center py-4 text-[10px] font-mono tracking-widest text-slate-500 border-t border-slate-900/40 bg-[#070a13]/90 backdrop-blur-sm z-20">
          SYSTEM STATUS: <span className="text-emerald-500 data-pulse animate-pulse">ONLINE</span> // TA 2025/2026 // © KMI NURUL HUDA PURBALINGGA
        </footer>

      </body>
    </html>
  );
}