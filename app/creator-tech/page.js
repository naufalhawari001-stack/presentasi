'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Transition from '@/components/Transition';
import { ArrowLeft, BrainCircuit, Video, Paintbrush, X } from 'lucide-react';

export default function CreatorTech() {
  const [activeTool, setActiveTool] = useState(null);

  const tools = [
    {
      id: 'ai-intel',
      title: 'Kecerdasan Buatan (AI)',
      subtitle: 'Gemini & ChatGPT',
      desc: 'Membantu santri mencari referensi, menemukan dalil, dan membuat draf naskah ceramah dalam hitungan detik.',
      icon: <BrainCircuit className="w-6 h-6 text-emerald-400" />,
      theme: 'from-emerald-500/20 to-transparent'
    },
    {
      id: 'visual-modern',
      title: 'Visual Islami Modern',
      subtitle: 'Canva & Midjourney',
      desc: 'Membuat desain kutipan hadis dan pengumuman kajian yang estetik, bersih, dan memanjakan mata generasi gen-Z.',
      icon: <Paintbrush className="w-6 h-6 text-emerald-400" />,
      theme: 'from-cyan-500/20 to-transparent'
    },
    {
      id: 'multimedia-dakwah',
      title: 'Dakwah Multimedia',
      subtitle: 'CapCut & OBS Studio',
      desc: 'Senjata utama untuk mengedit video pendek (Reels/TikTok) atau menyiarkan langsung pengajian khazanah pesantren.',
      icon: <Video className="w-6 h-6 text-emerald-400" />,
      theme: 'from-teal-500/20 to-transparent'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 16 }
    }
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-start py-12 px-6 md:px-12 overflow-y-auto bg-[#050811] text-slate-200">
      <Transition>
        <div className="max-w-5xl w-full mt-4">
          
          {/* Tombol Kembali */}
          <Link href="/">
            <button className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-500 hover:text-emerald-400 transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Main Control
            </button>
          </Link>

          {/* Header Halaman */}
          <div className="border-l-4 border-emerald-500 pl-4 mb-12">
            <span className="text-xs font-mono tracking-widest text-emerald-500 block uppercase">MODULE // 02</span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase mt-1">
              DA'I CREATOR TECH
            </h1>
          </div>

          {/* Layout Grid Utama */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Ilustrasi Kiri */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40 backdrop-blur-md p-2">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" 
                alt="Digital Technology Concept" 
                className="w-full h-[350px] object-cover rounded-xl opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 bg-emerald-950/80 border border-emerald-500/30 rounded-full text-[10px] text-emerald-400 font-mono tracking-widest uppercase">
                  AI Integration
                </span>
                <p className="text-sm text-slate-300 mt-3 font-medium leading-relaxed">
                  Teknologi adalah khadim (pelayan) ilmu agama jika berada di tangan yang tepat.
                </p>
              </div>
            </div>

            {/* List Baris List Tools Kanan */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 flex flex-col gap-4 w-full"
            >
              {tools.map((tool) => (
                <motion.div 
                  key={tool.id}
                  layoutId={`tool-card-${tool.id}`}
                  onClick={() => setActiveTool(tool)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className="relative grid grid-cols-12 items-center p-6 bg-slate-950/50 border border-slate-800/80 rounded-2xl cursor-pointer transition-colors hover:border-emerald-500/50 overflow-hidden"
                >
                  {/* Kolom Ikon Melayang Tanpa Box Kaku */}
                  <motion.div 
                    layoutId={`icon-box-${tool.id}`}
                    className="col-span-2 flex items-center justify-center pl-2 text-center"
                  >
                    {tool.icon}
                  </motion.div>
                  
                  {/* Kolom Informasi Teks */}
                  <div className="col-span-10 flex flex-col justify-center text-left pl-4 pr-2">
                    <motion.span 
                      layoutId={`subtitle-${tool.id}`}
                      className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider"
                    >
                      {tool.subtitle}
                    </motion.span>
                    <motion.h3 
                      layoutId={`title-${tool.id}`}
                      className="text-lg font-bold text-white tracking-wide mt-0.5"
                    >
                      {tool.title}
                    </motion.h3>
                    <motion.p 
                      layoutId={`desc-${tool.id}`}
                      className="text-xs md:text-sm text-slate-400 leading-relaxed mt-1 line-clamp-2"
                    >
                      {tool.desc}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* AnimatePresence Overlay untuk Efek Membesar Se-layar */}
          <AnimatePresence>
            {activeTool && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 select-none">
                
                {/* Backdrop Blur Gelap */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveTool(null)}
                  className="absolute inset-0 bg-[#050811]/90 backdrop-blur-xl"
                />

                {/* Box Kartu Raksasa */}
                <motion.div
                  layoutId={`tool-card-${activeTool.id}`}
                  className={`relative w-full max-w-2xl bg-gradient-to-b ${activeTool.theme} bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden`}
                >
                  {/* Tombol Silang Batal */}
                  <button
                    onClick={() => setActiveTool(null)}
                    className="absolute top-6 right-6 p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-full transition-colors z-20 group"
                  >
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <div className="relative z-10 flex flex-col h-full justify-center items-start">
                    <motion.div 
                      layoutId={`icon-box-${activeTool.id}`}
                      className="text-emerald-400 scale-150 mb-6 ml-2"
                    >
                      {activeTool.icon}
                    </motion.div>
                    
                    <motion.span 
                      layoutId={`subtitle-${activeTool.id}`}
                      className="text-xs md:text-sm font-mono text-emerald-400 font-bold uppercase tracking-widest"
                    >
                      {activeTool.subtitle}
                    </motion.span>
                    
                    <motion.h3 
                      layoutId={`title-${activeTool.id}`}
                      className="text-2xl md:text-4xl font-black text-white mt-1 mb-4 tracking-wide font-sans uppercase"
                    >
                      {activeTool.title}
                    </motion.h3>
                    
                    <motion.p 
                      layoutId={`desc-${activeTool.id}`}
                      className="text-sm md:text-lg text-slate-300 leading-relaxed font-sans font-medium"
                    >
                      {activeTool.desc}
                    </motion.p>
                    
                    <div className="mt-8 pt-6 border-t border-slate-800/60 w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-500">
                      <span>KMI CORE SYSTEM // TECH_MOD_02</span>
                      <span className="text-emerald-500 font-bold">ACTIVE</span>
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