'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Video, ShieldAlert, Users, X, Radio, Compass } from 'lucide-react';

export default function DigitalShift() {
  const [activeCard, setActiveCard] = useState(null);

  const points = [
    {
      id: 'cyber-net',
      title: '01. CYBER DIGITAL NET',
      desc: 'Penjaringan dan syiar proaktif melalui ekosistem YouTube, TikTok, Instagram, dan Facebook.',
      detail: 'Melalui platform YouTube, TikTok, Instagram, dan Facebook, kita mengubah ruang media sosial menjadi media pelayanan umat. Penjaringan dilakukan secara sistematis lewat unggahan konten edukasi video pendek, infografis akidah, dan pesan damai Islam yang mampu memicu ketertarikan non-muslim untuk bertanya lebih dalam.',
      icon: <Video className="w-6 h-6 text-cyan-600" />,
      color: 'from-cyan-100 via-cyan-50 to-white border-cyan-300 hover:border-cyan-500 text-cyan-700 hover:shadow-[0_15px_30px_rgba(6,182,212,0.2)]',
      patternSvg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath d='M0 0 L30 0 L15 25 Z' fill='%2306b6d4' fill-opacity='0.1'/%3E%3C/svg%3E")`,
      mediaType: 'video',
      mediaUrl: '/video/agata.mp4'
    },
    {
      id: 'apologetika',
      title: '02. APOLOGETIKA & DIALOG',
      desc: 'Metodologi retorika ilmiah menghadapi serangan argumentasi dari misionaris dan pendeta secara beradab.',
      detail: 'Banyak dari kalangan misionaris, pendeta, dan umat kristiani lainnya yang awalnya masuk ke kolom komentar medsos kita dengan maksud mendebat atau menjatuhkan. Namun, dengan pendekatan apologetika yang berbasis dalil tekstual-kontekstual yang cerdas, santun, dan logis, ruang debat tersebut perlahan melunakkan hati mereka hingga berbalik menjadi wasilah datangnya hidayah.',
      icon: <ShieldAlert className="w-6 h-6 text-purple-600" />,
      color: 'from-purple-100 via-purple-50 to-white border-purple-300 hover:border-purple-500 text-purple-700 hover:shadow-[0_15px_30px_rgba(168,85,247,0.2)]',
      patternSvg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 20 L10 0 L30 0 L40 20 L30 40 L10 40 Z' stroke='%23a855f7' stroke-width='1' stroke-opacity='0.12' fill='none'/%3E%3C/svg%3E")`,
      mediaType: 'image',
      mediaUrl: '/image/ipung.jpg?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'pahala-jariyah',
      title: '03. PAHALA JARIYAH DAKWAH',
      desc: 'Manifestasi khidmah digital berkelanjutan dalam memandu mualaf menuju komitmen ibadah yang kokoh.',
      detail: 'Menuntun syahadat hanyalah langkah awal. Tantangan sesungguhnya adalah pembinaan pasca-masuk Islam. Satu orang mualaf yang berhasil kita bimbing hingga mengerti thaharah, shalat, dan istiqamah dalam tauhid akan mengalirkan pahala jariyah tak terputus bagi para penggerak dakwah.  Rasulullah SAW bersabda : “Demi Allah, sungguh satu orang saja diberi petunjuk (oleh Allah) melalui perantaraanmu, maka itu lebih baik dari unta merah.” (HR. Bukhari no. 2942 dan Muslim no. 2406, dari Sahl bin Sa’ad).',
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      color: 'from-emerald-100 via-emerald-50 to-white border-emerald-300 hover:border-emerald-500 text-emerald-700 hover:shadow-[0_15px_30px_rgba(16,185,129,0.2)]',
      patternSvg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 0 L25 15 L40 20 L25 25 L20 40 L15 25 L0 20 L15 15 Z' fill='%2310b981' fill-opacity='0.08'/%3E%3C/svg%3E")`,
      mediaType: 'image',
      mediaUrl: '/image/andy.jpg?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-start py-12 px-6 md:px-12 overflow-y-auto bg-white text-slate-800 box-border">
      
      {/* BACKGROUND GRAPHIC (TELAH DIPERBAIKI) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/image/bg1.png" 
          alt="Latar Belakang Kontemporer" 
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-5xl w-full mt-4 relative z-10">
        
        {/* TOP NAVIGATION BANNER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200/60 pb-5 mb-8 gap-y-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-600 hover:text-cyan-700 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Menu Utama
            </button>
          </Link>
          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400 tracking-wider">
            <Compass className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
            <span>SEKOLAH TABLIGH MUHAMMADIYAH // MAJELIS TABLIGH PWM JAWA TENGAH</span>
          </div>
        </div>

        {/* HEADER MODUL */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 block uppercase">STRATEGI TAKTIS // MODUL 01</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mt-1 uppercase">
            Cyber Net & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600">Urgensi Jihad Digital</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base mt-2 max-w-3xl font-medium">
            Bedah pola gerakan transformasi dakwah, tata cara mengelola stabilitas emosi saat dialog publik, serta dokumentasi riil konversi pemikiran mualaf di media sosial.
          </p>
        </div>

        {/* GRID INTERAKTIF 3 KARTU UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {points.map((point) => (
            <motion.div
              key={point.id}
              layoutId={`card-container-${point.id}`}
              onClick={() => setActiveCard(point)}
              className={`relative flex flex-col justify-between p-6 bg-gradient-to-br border rounded-3xl cursor-pointer transition-all duration-300 overflow-hidden min-h-[250px] shadow-md group ${point.color}`}
              whileHover={{ scale: 1.025, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div 
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                style={{
                  backgroundImage: point.patternSvg,
                  backgroundSize: '40px 40px',
                  backgroundPosition: 'right bottom',
                  maskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)',
                  WebkitMaskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)'
                }}
              />

              <div className="relative z-10">
                <div className="p-3 bg-white/90 border border-white rounded-xl w-fit mb-5 shadow-sm">
                  {point.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 tracking-wide font-sans uppercase">
                  {point.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed font-sans line-clamp-4">
                  {point.desc}
                </p>
              </div>
              
              <div className="relative z-10 pt-4 border-t border-slate-900/5 mt-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                  LIHAT SELENGKAPNYA →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION LINK EMEDIASOSIAL */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Radio className="w-4 h-4 text-emerald-500 animate-pulse" />
            <h3 className="text-sm font-mono font-bold tracking-widest text-slate-400 uppercase">LIVE CHANNELS // GATEWAY INTEGRASI</h3>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">Pintu Masuk Konsultasi & Penjaringan Mualaf</h2>
          <p className="text-slate-500 text-xs md:text-sm mb-6 max-w-2xl font-medium">
            Berikut adalah ekosistem media sosial aktif tempat masuknya ruang dialog, yang mula-mula bermaksud mendebat namun berujung pada kesadaran hidayah tauhid.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://youtube.com/@ilham-tv" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-red-50 hover:bg-red-100/70 border border-red-200 text-red-700 rounded-2xl font-sans font-bold text-sm transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 fill-[#ff0000]" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.503 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.386.507 9.386.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube Channel</span>
            </a>
            <a href="https://tiktok.com/@tvilham" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-slate-900 hover:bg-slate-800 border border-slate-950 text-white rounded-2xl font-sans font-bold text-sm transition-all hover:-translate-y-1">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.62 4.2 1.23 1.34 2.96 2.14 4.78 2.34v3.86c-1.63-.04-3.24-.55-4.59-1.48-.6-.41-1.14-.92-1.58-1.51-.01 2.87.02 5.72-.02 8.57-.02 2.45-1.12 4.88-3 6.47-1.92 1.68-4.6 2.43-7.11 2.01-2.43-.37-4.66-1.89-5.91-4.01-1.42-2.31-1.68-5.32-.68-7.75a8.77 8.77 0 0 1 6.54-5.26V11a4.9 4.9 0 0 0-3.3 4.39 4.97 4.97 0 0 0 4.14 5.4c1.8.31 3.73-.52 4.54-2.17.43-.84.49-1.8.46-2.73V.02z"/></svg>
              <span>TikTok Account</span>
            </a>
            <a href="https://instagram.com/ayasofyapwt" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-gradient-to-br from-pink-50 to-orange-50 hover:from-pink-100 hover:to-orange-100 border border-pink-200 text-pink-700 rounded-2xl font-sans font-bold text-sm transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram Feed</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100/70 border border-blue-200 text-blue-800 rounded-2xl font-sans font-bold text-sm transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 fill-[#1877f2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook Page</span>
            </a>
          </div>
        </div>

        {/* EXPANDED OVERLAY PANEL */}
        <AnimatePresence>
          {activeCard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCard(null)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
              />

              <motion.div
                layoutId={`card-container-${activeCard.id}`}
                className="relative w-full max-w-4xl bg-white border border-slate-200 p-6 md:p-10 rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] z-10 flex flex-col md:flex-row gap-8"
              >
                <button
                  onClick={() => setActiveCard(null)}
                  className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-500 hover:text-slate-900 rounded-full transition-colors z-30 group"
                >
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                <div className="flex-1 flex flex-col justify-between items-start relative z-10">
                  <div>
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl w-fit mb-5 shadow-sm">
                      {activeCard.icon}
                    </div>
                    <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-4 tracking-wide font-sans uppercase">
                      {activeCard.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed font-sans mb-6">
                      {activeCard.detail}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-400">
                    <span>MAJELIS TABLIGH PWM JATENG</span>
                    <span className="text-emerald-600 font-bold">ONLINE SYSTEM</span>
                  </div>
                </div>

                {/* PERBAIKAN: MODIFIKASI CONTAINER MEDIA SEBELAH KANAN AGAR MENDUKUNG TAMPILAN VIDEO VERTIKAL PROPORSIONAL (ASPECT-9/16) */}
                <div className="flex-1 flex justify-center items-center bg-slate-950 rounded-2xl border border-slate-200 overflow-hidden relative group min-h-[350px] md:min-h-[500px] p-2">
                  {activeCard.mediaType === 'video' ? (
                    <div className="relative w-full h-full max-h-[530px] aspect-[9/16] flex justify-center items-center bg-black rounded-xl overflow-hidden shadow-inner">
                      <video 
                        src={activeCard.mediaUrl} 
                        controls 
                        className="w-full h-full absolute inset-0 object-contain bg-black"
                        poster="https://images.unsplash.com/photo-1610116306796-6ebd3051c330?auto=format&fit=crop&w=800&q=80"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider text-cyan-400 border border-slate-800 z-20">
                        VIDEO SYAHADAT MUALAF
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full min-h-[300px] relative">
                      <img 
                        src={activeCard.mediaUrl} 
                        alt={activeCard.title} 
                        className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider text-purple-700 border border-purple-200 shadow-sm">
                        FOTO
                      </div>
                    </div>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* FOOTER QUOTE */}
        <div className="p-4 bg-white border border-slate-200/80 rounded-2xl text-center shadow-sm">
          <p className="text-xs md:text-sm italic font-medium text-slate-500">
            "Jadikan media sosial sebagai wasilah bertemunya fitrah manusia dengan cahaya harian tauhid yang istiqamah."
          </p>
        </div>

      </div>
    </main>
  );
}