'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Wand2, ShieldCheck, Rocket, Terminal, Radio } from 'lucide-react';

export default function Home() {
  const menus = [
    { 
      name: '01. DIGITAL SHIFT', 
      desc: 'Urgensi & kewajiban jihad digital bagi calon alumni di platform media sosial.',
      icon: <Globe className="w-6 h-6 md:w-7 md:h-7" />, 
      path: '/digital-shift', 
      color: 'hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] text-cyan-400 group-hover:text-cyan-300' 
    },
    { 
      name: '02. DA\'I CREATOR TECH', 
      desc: 'Optimalisasi senjata & tools Artificial Intelligence untuk production konten islami.',
      icon: <Wand2 className="w-6 h-6" />, 
      path: '/creator-tech', 
      color: 'hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] text-emerald-400 group-hover:text-emerald-300' 
    },
    { 
      name: '03. CONTENT STRATEGY', 
      desc: 'Fiqih, adab, dan regulasi penting dalam menyebarkan syiar di ruang publik digital.',
      icon: <ShieldCheck className="w-6 h-6" />, 
      path: '/content-strategy', 
      color: 'hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] text-purple-400 group-hover:text-purple-300' 
    },
    { 
      name: '04. THE NEXT JOURNEY', 
      desc: 'Amanat perjuangan & peta navigasi khidmah alumni KMI di tengah masyarakat.',
      icon: <Rocket className="w-6 h-6" />, 
      path: '/future-architect', 
      color: 'hover:border-rose-500 hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] text-rose-400 group-hover:text-rose-300' 
    },
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
    /* PERBAIKAN MUTLAK: Menghilangkan overflow-y-auto yang longgar dan menggantinya dengan max-h-screen serta overflow-hidden 
       agar layout tidak melar ke bawah dan memicu kemunculan garis sisa di bawah teks sistem status */
    <main className="relative flex min-h-screen max-h-screen h-screen w-full flex-col items-center justify-center p-6 md:p-12 overflow-hidden bg-[#050811] box-border">
      
      {/* BACKGROUND CONFIG */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1920&q=80" 
          alt="Futuristic Network Background" 
          className="w-full h-full object-cover opacity-15 mix-blend-screen scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/95 via-[#050811]/60 to-[#050811]/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#050811_85%)]"></div>
      </div>

      {/* TOP DEKORASI */}
      <div className="absolute top-6 left-6 hidden lg:flex items-center gap-3 font-mono text-[10px] text-slate-500 tracking-wider z-10">
        <Terminal className="w-3 h-3 text-cyan-500 animate-pulse" />
        <span>KMI_CORE_SYS // TA-2025/2026</span>
      </div>
      <div className="absolute top-6 right-6 hidden lg:flex items-center gap-2 font-mono text-[10px] text-slate-500 tracking-wider z-10">
        <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
        <span>ORBITASI_KHIDMAH: READY</span>
      </div>

      {/* WRAPPER KONTEN UTAMA */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center py-4 gap-y-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center border-b border-slate-800/60 pb-6 w-full max-w-3xl relative"
        >
          <h2 className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase mb-4 font-mono">
            PEMBEKALAN CALON ALUMNI • KMI NURUL HUDA PURBALINGGA
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-widest uppercase text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] leading-none mb-6">
            DAKWAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">DIGITAL</span>
          </h1>
          
          <p className="text-slate-400 text-xs md:text-sm tracking-[0.15em] uppercase font-mono max-w-2xl mx-auto leading-relaxed">
            Orbitasi Pengabdian & Transformasi Santri di Era Artificial Intelligence
          </p>
        </motion.div>

        {/* GRID MENU */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
        >
          {menus.map((menu, index) => (
            <Link href={menu.path} key={index} className="block group">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`relative grid grid-cols-12 items-center py-6 pr-6 bg-slate-950/50 border border-slate-800/80 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-md overflow-hidden min-h-[130px] ${menu.color}`}
              >
                {/* KOLOM 1: IKON DENGAN JARAK PADDING AMAN DARI TEPI KIRI */}
                <div className="col-span-2 flex items-center justify-center pl-8 group-hover:scale-110 transition-transform duration-300 z-10 text-center">
                  {menu.icon}
                </div>

                {/* KOLOM 2: AREA DESKRIPSI TEKS */}
                <div className="col-span-10 flex flex-col justify-center text-left z-10 pl-4">
                  <span className="text-lg md:text-xl font-bold tracking-wide text-slate-100 font-sans group-hover:text-white transition-colors">
                    {menu.name}
                  </span>
                  <span className="text-xs md:text-sm text-slate-400 mt-2 leading-relaxed font-mono tracking-normal">
                    {menu.desc}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

      </div>

      {/* BOTTOM FOOTER STATUS BAR (MEMASANG JARAK BAGIAN BAWAH YANG PRESISI TANPA LEKUKAN BOCOR) */}
      <div className="absolute bottom-6 w-full text-center z-10 font-mono text-[9px] text-slate-600 tracking-widest uppercase select-none pointer-events-none">
        SYSTEM STATUS: <span className="text-emerald-500 font-bold">ONLINE</span> // TA 2025/2026 // © KMI NURUL HUDA PURBALINGGA
      </div>

    </main>
  );
}