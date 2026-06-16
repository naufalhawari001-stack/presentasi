'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Transition from '@/components/Transition';
import { ArrowLeft, Monitor, ShieldAlert, Users, X } from 'lucide-react';

export default function DigitalShift() {
  // State untuk melacak kartu mana yang sedang dibuka penuh (null artinya tidak ada)
  const [activeCard, setActiveCard] = useState(null);

  const points = [
    {
      id: 'mimbar-layar',
      title: 'Dari Mimbar ke Layar',
      desc: 'Dulu dakwah terbatas di ruang masjid. Hari ini, batas itu runtuh. Smartphone adalah mimbar baru para santri untuk menjangkau jutaan umat manusia.',
      icon: <Monitor className="w-6 h-6 text-cyan-400" />,
      theme: 'from-cyan-500/20 to-transparent',
      borderColor: 'hover:border-cyan-500/50'
    },
    {
      id: 'krisis-digital',
      title: 'Krisis Ruang Digital',
      desc: 'Jika santri yang mengerti ilmu agama memilih diam, maka ruang digital akan dipenuhi oleh konten hoaks, ujaran kebencian, dan pemahaman yang keliru.',
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
      theme: 'from-rose-500/20 to-transparent',
      borderColor: 'hover:border-rose-500/50'
    },
    {
      id: 'pahala-jariyah',
      title: 'Ladang Pahala Jariyah',
      desc: 'Satu konten edukasi islami yang dibagikan dan diamalkan oleh orang lain akan menjadi aliran pahala tanpa putus, bahkan saat kita sudah wafat.',
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      theme: 'from-emerald-500/20 to-transparent',
      borderColor: 'hover:border-emerald-500/50'
    }
  ];

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-start py-12 px-6 md:px-12 overflow-y-auto bg-[#050811] text-slate-200">
      <Transition>
        <div className="max-w-4xl w-full mt-4">
          
          {/* Tombol Kembali */}
          <Link href="/">
            <button className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-500 hover:text-cyan-400 transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Main Control
            </button>
          </Link>

          {/* Header Halaman */}
          <div className="border-l-4 border-cyan-500 pl-4 mb-12">
            <span className="text-xs font-mono tracking-widest text-cyan-500 block uppercase">MODULE // 01</span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase mt-1">
              DIGITAL SHIFT: URGENSI MEDSOS
            </h1>
          </div>

          {/* Grid Konten Utama */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {points.map((point, index) => (
              <motion.div
                key={point.id}
                layoutId={`card-container-${point.id}`}
                onClick={() => setActiveCard(point)}
                className={`p-6 bg-slate-950/40 border border-slate-800/80 rounded-2xl backdrop-blur-md cursor-pointer transition-colors shadow-lg flex flex-col justify-between items-start min-h-[220px] ${point.borderColor}`}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-full">
                  <motion.div 
                    layoutId={`icon-box-${point.id}`}
                    className="p-3 bg-slate-900 border border-slate-800 rounded-xl w-fit mb-4"
                  >
                    {point.icon}
                  </motion.div>
                  <motion.h3 
                    layoutId={`title-${point.id}`}
                    className="text-xl font-bold text-white mb-2 tracking-wide font-sans"
                  >
                    {point.title}
                  </motion.h3>
                  <motion.p 
                    layoutId={`desc-${point.id}`}
                    className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans line-clamp-3"
                  >
                    {point.desc}
                  </motion.p>
                </div>
                
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 mt-4 group-hover:text-cyan-400 transition-colors">
                  KLIK UNTUK DETAIL →
                </span>
              </motion.div>
            ))}
          </div>

          {/* Animasi Overlay Kartu Membesar Full Screen */}
          <AnimatePresence>
            {activeCard && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 select-none">
                
                {/* Latar Belakang Gelap (Overlay Backdrop) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveCard(null)}
                  className="absolute inset-0 bg-[#050811]/90 backdrop-blur-xl"
                />

                {/* Kotak Kartu yang Membesar */}
                <motion.div
                  layoutId={`card-container-${activeCard.id}`}
                  className={`relative w-full max-w-2xl bg-gradient-to-b ${activeCard.theme} bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden`}
                >
                  {/* Tombol Close (Silang) */}
                  <button
                    onClick={() => setActiveCard(null)}
                    className="absolute top-6 right-6 p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-full transition-colors z-20 group"
                  >
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <div className="relative z-10 flex flex-col h-full justify-center items-start">
                    <motion.div 
                      layoutId={`icon-box-${activeCard.id}`}
                      className="p-4 bg-slate-900 border border-slate-800 rounded-2xl w-fit mb-6 shadow-inner"
                    >
                      {activeCard.icon}
                    </motion.div>
                    
                    <motion.h3 
                      layoutId={`title-${activeCard.id}`}
                      className="text-2xl md:text-4xl font-black text-white mb-4 tracking-wide font-sans uppercase"
                    >
                      {activeCard.title}
                    </motion.h3>
                    
                    <motion.p 
                      layoutId={`desc-${activeCard.id}`}
                      className="text-sm md:text-lg text-slate-300 leading-relaxed font-sans font-medium"
                    >
                      {activeCard.desc}
                    </motion.p>
                    
                    <div className="mt-8 pt-6 border-t border-slate-800/60 w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-500">
                      <span>KMI CORE SYSTEM // MOD_01</span>
                      <span className="text-cyan-500 font-bold">READY</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            )}
          </AnimatePresence>

          {/* Footer Slide / Quote */}
          <div className="mt-12 p-4 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-center">
            <p className="text-sm italic text-cyan-400">
              "Jadikan jempolmu sebagai wasilah hidayah bagi orang lain."
            </p>
          </div>

        </div>
      </Transition>
    </main>
  );
}