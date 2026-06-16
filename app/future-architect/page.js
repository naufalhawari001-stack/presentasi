'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Transition from '@/components/Transition';
import { ArrowLeft, Compass, Send, ShieldAlert, X } from 'lucide-react';

export default function FutureArchitect() {
  const [activeVision, setActiveVision] = useState(null);

  const visions = [
    {
      id: 'ruang-publik',
      title: 'Mendominasi Ruang Publik',
      desc: 'Masyarakat sangat haus akan ilmu agama yang valid. Jangan biarkan panggung digital diisi oleh mereka yang tidak memiliki sanad keilmuan yang jelas.',
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
      theme: 'from-rose-500/20 to-transparent'
    },
    {
      id: 'navigasi-wilayah',
      title: 'Navigasi Dakwah Wilayah',
      desc: 'Petakan potensi media lokal. Mulailah menghidupkan majelis taklim, mushola, atau remaja masjid setempat dengan sentuhan publikasi digital yang rapi, bersih, dan modern.',
      icon: <Compass className="w-6 h-6 text-rose-400" />,
      theme: 'from-orange-500/20 to-transparent'
    },
    {
      id: 'khidmah-abadi',
      title: 'Khidmah Abadi',
      desc: 'Setelah lulus dari pondok, ideologi dan nilai pondok harus tetap terjaga.',
      icon: <Send className="w-6 h-6 text-rose-400" />,
      theme: 'from-red-500/20 to-transparent'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
            <button className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-rose-500 hover:text-rose-400 transition-colors mb-4 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Main Control
            </button>
          </Link>

          {/* Header Modul Pembekalan */}
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-xs font-mono tracking-widest text-rose-500 block uppercase">
              FINAL MODULE // Khidmah Calon Alumni TA 2025/2026
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase mt-1">
              THE NEXT JOURNEY
            </h1>
          </div>

          {/* Grid Konten Utama */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/40 border border-slate-800/60 p-6 md:p-8 rounded-3xl backdrop-blur-md">
            
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 uppercase">
                Amanat Perjuangan Alumni KMI Nurul Huda
              </h2>
              {/* PERBAIKAN TEKS: Mengganti kalimat yang berlebihan (taktis, benteng moral, medan tempur pemikiran) dengan redaksi yang lebih tenang dan profesional */}
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
                Pelatihan ini merupakan tahap pembekalan akhir bagi kalian sebelum berkhidmah secara nyata di tengah masyarakat.
              </p>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
                Pemanfaatan media digital merupakan sarana penting dalam syiar dakwah saat ini.
              </p>
              
              {/* Box Info Aksi Nyata */}
              <div className="p-4 bg-rose-950/15 border-l-2 border-rose-500/40 rounded-r-xl mt-2">
                <span className="text-[10px] font-mono text-rose-400 font-bold block mb-1 tracking-wider">RENCANA TINDAK LANJUT:</span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Gunakan seluruh keahlian digital yang didapat hari ini untuk menyebarkan dakwah.
                </p>
              </div>
            </div>

            {/* Ilustrasi Misi Global */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800/80 p-2 w-full">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80" 
                alt="Global Network Mission" 
                className="w-full h-[250px] object-cover opacity-40 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-md text-[9px] text-rose-400 font-mono tracking-widest uppercase block">
                  MISSION STATUS: DEPLOYING TO SOCIETY
                </span>
              </div>
            </div>

          </div>

          {/* 3 Kartu Komitmen Khidmah */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            {visions.map((vision) => (
              <motion.div 
                key={vision.id}
                layoutId={`vision-card-${vision.id}`}
                onClick={() => setActiveVision(vision)}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="p-8 bg-slate-950/50 border border-slate-800/80 rounded-2xl cursor-pointer hover:border-rose-500/50 hover:shadow-[0_0_25px_rgba(244,63,94,0.1)] transition-colors flex flex-col items-start justify-between min-h-[250px]"
              >
                <div className="w-full">
                  <motion.div 
                    layoutId={`icon-box-${vision.id}`}
                    className="text-rose-400 mb-5 flex items-center justify-center"
                  >
                    {vision.icon}
                  </motion.div>
                  <motion.h4 
                    layoutId={`title-${vision.id}`}
                    className="text-base font-bold text-white mb-2 uppercase tracking-wider font-sans"
                  >
                    {vision.title}
                  </motion.h4>
                  <motion.p 
                    layoutId={`desc-${vision.id}`}
                    className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3"
                  >
                    {vision.desc}
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
            {activeVision && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 select-none">
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveVision(null)}
                  className="absolute inset-0 bg-[#050811]/90 backdrop-blur-xl"
                />

                <motion.div
                  layoutId={`vision-card-${activeVision.id}`}
                  className={`relative w-full max-w-2xl bg-gradient-to-b ${activeVision.theme} bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden`}
                >
                  <button
                    onClick={() => setActiveVision(null)}
                    className="absolute top-6 right-6 p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-full transition-colors z-20 group"
                  >
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <div className="relative z-10 flex flex-col h-full justify-center items-start">
                    <motion.div 
                      layoutId={`icon-box-${activeVision.id}`}
                      className="text-rose-400 scale-150 mb-6 ml-1"
                    >
                      {activeVision.icon}
                    </motion.div>
                    
                    <motion.h3 
                      layoutId={`title-${activeVision.id}`}
                      className="text-xl md:text-3xl font-black text-white mb-4 tracking-wide font-sans uppercase"
                    >
                      {activeVision.title}
                    </motion.h3>
                    
                    <motion.p 
                      layoutId={`desc-${activeVision.id}`}
                      className="text-sm md:text-lg text-slate-300 leading-relaxed font-sans font-medium"
                    >
                      {activeVision.desc}
                    </motion.p>
                    
                    <div className="mt-8 pt-6 border-t border-slate-800/60 w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-500">
                      <span>KMI CORE SYSTEM // FINAL_JOURNEY_04</span>
                      <span className="text-rose-500 font-bold">READY</span>
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