'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, HelpCircle, ShieldAlert, UserCheck, BookOpen, Milestone, Compass, GraduationCap } from 'lucide-react';

const slides = [
  "image/aya1.jpg",
  "image/aya2.jpg",
  "image/aya3.jpg"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const menus = [
    { name: '01. CYBER DIGITAL NET', desc: 'Penjaringan dan syiar proaktif melalui ekosistem YouTube, TikTok, Instagram, dan Facebook.', icon: <Video className="w-6 h-6" />, path: '/digital-shift', color: 'from-cyan-100 via-cyan-50 to-white border-cyan-300 text-cyan-700' },
    { name: '02. KONSULTASI INTERAKTIF', desc: 'Manajemen ruang tanya-jawab publik dan pelayanan respons cepat seputar dasar-dasar keislaman.', icon: <HelpCircle className="w-6 h-6" />, path: '/konsultasi-tanya-jawab', color: 'from-blue-100 via-blue-50 to-white border-blue-300 text-blue-700' },
    { name: '03. APOLOGETIKA & DIALOG', desc: 'Metodologi menghadapi debat dari misionaris dan pendeta, hingga berbalik menjadi pintu hidayah.', icon: <ShieldAlert className="w-6 h-6" />, path: '/apologetika-dialog', color: 'from-purple-100 via-purple-50 to-white border-purple-300 text-purple-700' },
    { name: '04. IKRAR & LEGALITAS', desc: 'Prosesi penuntunan dua kalimat syahadat yang sah secara syar\'i sekaligus pengurusan dokumen hukum.', icon: <UserCheck className="w-6 h-6" />, path: '/ikrar-legalitas', color: 'from-emerald-100 via-emerald-50 to-white border-emerald-300 text-emerald-700' },
    { name: '05. PEMBINAAN ASAS MUALAF', desc: 'Bimbingan intensif pasca-masuk Islam: Pengajaran thaharah, shalat, serta pemurnian akidah.', icon: <BookOpen className="w-6 h-6" />, path: '/pembinaan-mualaf', color: 'from-teal-100 via-teal-50 to-white border-teal-300 text-teal-700' },
    { name: '06. INTEGRASI & ISTIQAMAH', desc: 'Pendampingan sosio-kultur, penguatan mental dari tekanan luar, hingga kemandirian ekonomi mualaf.', icon: <Milestone className="w-6 h-6" />, path: '/istiqomah', color: 'from-rose-100 via-rose-50 to-white border-rose-300 text-rose-700' }
  ];

  return (
    <main className="relative min-h-screen w-full bg-[#040712] text-white p-6 md:p-12">
      {/* IDENTITAS */}
      <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            <Compass className="w-4 h-4 text-cyan-500" /> Sekolah Tabligh Muhammadiyah // PWM Jateng
        </div>
      </div>

      {/* SLIDESHOW (Fixed: aspect-video memastikan proporsi 16:9 seperti thumbnail YT) */}
      <div className="w-full max-w-6xl mx-auto mb-10">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-black">
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentIndex}
              src={slides[currentIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              // Menggunakan object-cover dengan posisi center agar gambar mengisi penuh tanpa distorsi
              className="w-full h-full object-cover object-center"
              alt="Slideshow"
            />
          </AnimatePresence>
          {/* Indikator slide */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <div key={i} className={`h-1.5 w-8 rounded-full transition-all ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* HEADER UTAMA */}
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-white">
            FROM SHAHADA TO <span className="text-emerald-400">ISTIQAMAH</span>
        </h1>
        <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">Metodologi Pendampingan Mualaf Berbasis Multimedia</p>
      </div>

      {/* GRID KARTU */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {menus.map((menu, i) => (
          <Link href={menu.path} key={i}>
            <motion.div whileHover={{ y: -10 }} className={`p-8 bg-gradient-to-br ${menu.color} border rounded-2xl h-full shadow-lg`}>
              <div className="mb-6">{menu.icon}</div>
              <h3 className="text-xl font-black mb-3 text-slate-900">{menu.name}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{menu.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}