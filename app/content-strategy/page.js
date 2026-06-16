'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Transition from '@/components/Transition';
import { ArrowLeft, Heart, MessageSquareX, Sparkles, BookOpen, X } from 'lucide-react';

export default function ContentStrategy() {
  // State untuk melacak adab mana yang sedang dibuka penuh
  const [activeAdab, setActiveAdab] = useState(null);

  const adabs = [
    {
      id: 'niat-ikhlas',
      title: 'Niat & Keikhlasan',
      desc: 'Bukan berburu "Viral", melainkan menyebarkan "Hidayah". Menjaga kesucian hati agar setiap baris konten tetap bernilai ibadah di hadapan Allah SWT.',
      icon: <Heart className="w-6 h-6 text-purple-400" />,
      theme: 'from-purple-500/20 to-transparent'
    },
    {
      id: 'tabayyun-data',
      title: 'Tabayyun & Validasi Data',
      desc: 'Dunia digital penuh badai hoaks. Calon alumni wajib memvalidasi keaslian sanad hadits, kutipan ulama, dan hukum fiqih sebelum menekan tombol "Publish".',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      theme: 'from-fuchsia-500/20 to-transparent'
    },
    {
      id: 'zero-jidal',
      title: 'Zero Syahwat Jidal (Debat)',
      desc: 'Menghindari perdebatan kusir di kolom komentar. Sampaikan kebenaran dengan hikmah (bil-hikmah) dan cara yang baik, bukan dengan caci maki.',
      icon: <MessageSquareX className="w-6 h-6 text-purple-400" />,
      theme: 'from-indigo-500/20 to-transparent'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 16 } 
    },
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-start py-12 px-6 md:px-12 overflow-y-auto bg-[#050811] text-slate-200">
      <Transition>
        <div className="max-w-5xl w-full mt-4 flex flex-col gap-y-10">
          
          {/* Navigasi Kembali */}
          <Link href="/">
            <button className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-purple-500 hover:text-purple-400 transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Main Control
            </button>
          </Link>

          {/* Header Modul */}
          <div className="border-l-4 border-purple-500 pl-4">
            <span className="text-xs font-mono tracking-widest text-purple-500 block uppercase">MODULE // 03</span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase mt-1">
              FIQIH & ADAB MEDIA SOSIAL
            </h1>
          </div>

          {/* Banner Otoritas Dalil Utama & Korelasi Digital */}
          <div className="w-full rounded-2xl overflow-hidden relative border border-slate-800/80 bg-slate-950/40 backdrop-blur-md p-8 md:p-10 flex flex-col md:flex-row items-start gap-8">
            <div className="p-4 bg-purple-950/30 border border-purple-900/40 rounded-xl text-purple-400 flex-shrink-0 mt-1">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-3 flex-1 text-left w-full">
              <span className="text-xs font-mono tracking-widest text-purple-400 font-bold uppercase block text-center md:text-left">
                DALIL PERJUANGAN // QS. IBRAHIM: 4
              </span>
              
              <div dir="rtl" className="w-full text-right my-2">
                <p 
                  style={{ fontFamily: "'Traditional Arabic', 'Simplified Arabic', 'Amiri', serif" }} 
                  className="text-4xl md:text-5xl text-white tracking-wide font-bold leading-[1.8] text-right drop-shadow-[0_0_20px_rgba(255,255,255,0.05)] pb-2"
                >
                  وَمَا أَرْسَلْنَا مِنْ رَسُولٍ إِلَّا بِلِسَانِ قَوْمِهِ لِيُبَيِّنَ لَهُمْ ۖ
                </p>
              </div>
              
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed italic border-b border-slate-800/80 pb-4 mb-2">
                "Kami tidak mengutus seorang rasul pun, melainkan dengan lisan (bahasa) kaumnya, supaya ia dapat memberi penjelasan dengan terang kepada mereka."
              </p>

              <div className="mt-2 p-4 bg-purple-950/15 border-l-2 border-purple-500/40 rounded-r-xl">
                <span className="text-[10px] font-mono text-purple-400 font-bold block mb-1 tracking-wider">KORELASI DIGITAL KONTEMPORER:</span>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
                  "Lisan" hari ini bukan lagi sekadar bahasa verbal Arab atau Indonesia, melainkan ekosistem visual, algoritma, FYP, dan infografis media digital. Dakwah kalian harus mampu berbicara dalam format-format tersebut agar pesan kebaikan tersampaikan dengan terang kepada masyarakat luas.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Pilar Adab Grid System */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            {adabs.map((adab) => (
              <motion.div 
                key={adab.id}
                layoutId={`adab-card-${adab.id}`}
                onClick={() => setActiveAdab(adab)}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="p-8 bg-slate-950/50 border border-slate-800/80 rounded-2xl cursor-pointer hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] transition-colors flex flex-col items-start justify-between min-h-[240px]"
              >
                <div className="w-full">
                  <motion.div 
                    layoutId={`icon-box-${adab.id}`}
                    className="flex items-center justify-center mb-5 text-purple-400"
                  >
                    {adab.icon}
                  </motion.div>
                  <motion.h3 
                    layoutId={`title-${adab.id}`}
                    className="text-lg font-bold text-white mb-3 tracking-wide font-sans"
                  >
                    {adab.title}
                  </motion.h3>
                  <motion.p 
                    layoutId={`desc-${adab.id}`}
                    className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans line-clamp-3"
                  >
                    {adab.desc}
                  </motion.p>
                </div>
                
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 mt-5">
                  KLIK DETAIL →
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Overlay Card Membesar (Full Screen Modal) */}
          <AnimatePresence>
            {activeAdab && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 select-none">
                
                {/* Backdrop Blur Gelap */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveAdab(null)}
                  className="absolute inset-0 bg-[#050811]/90 backdrop-blur-xl"
                />

                {/* Box Kartu Raksasa */}
                <motion.div
                  layoutId={`adab-card-${activeAdab.id}`}
                  className={`relative w-full max-w-2xl bg-gradient-to-b ${activeAdab.theme} bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden`}
                >
                  {/* Tombol Silang Batal */}
                  <button
                    onClick={() => setActiveAdab(null)}
                    className="absolute top-6 right-6 p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-full transition-colors z-20 group"
                  >
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <div className="relative z-10 flex flex-col h-full justify-center items-start">
                    <motion.div 
                      layoutId={`icon-box-${activeAdab.id}`}
                      className="text-purple-400 scale-150 mb-6 ml-1"
                    >
                      {activeAdab.icon}
                    </motion.div>
                    
                    <motion.h3 
                      layoutId={`title-${activeAdab.id}`}
                      className="text-2xl md:text-4xl font-black text-white mb-4 tracking-wide font-sans uppercase"
                    >
                      {activeAdab.title}
                    </motion.h3>
                    
                    <motion.p 
                      layoutId={`desc-${activeAdab.id}`}
                      className="text-sm md:text-lg text-slate-300 leading-relaxed font-sans font-medium"
                    >
                      {activeAdab.desc}
                    </motion.p>
                    
                    <div className="mt-8 pt-6 border-t border-slate-800/60 w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-500">
                      <span>KMI CORE SYSTEM // ADAB_MOD_03</span>
                      <span className="text-purple-500 font-bold">READY</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            )}
          </AnimatePresence>

        </div>
      </Transition>
    </main>
  );
}