'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Droplets, HeartHandshake, BookCheck } from 'lucide-react';
import Link from 'next/link';

const curriculum = [
  { title: "Pemurnian Akidah", desc: "Menanamkan tauhid yang kokoh, mengenal Allah, dan memahami esensi syahadat secara mendalam.", icon: <Sparkles className="w-6 h-6 text-emerald-600" /> },
  { title: "Thaharah & Ibadah Dasar", desc: "Panduan praktis berwudhu, mandi wajib, serta tata cara shalat lima waktu sesuai sunnah.", icon: <Droplets className="w-6 h-6 text-emerald-600" /> },
  { title: "Akhlakul Karimah", desc: "Membentuk karakter muslim yang santun, jujur, dan penuh kasih sayang dalam kehidupan sehari-hari.", icon: <HeartHandshake className="w-6 h-6 text-emerald-600" /> },
  { title: "Mengenal Al-Qur'an", desc: "Belajar membaca Al-Qur'an (Iqra) hingga memahami pesan-pesan pokok kehidupan.", icon: <BookCheck className="w-6 h-6 text-emerald-600" /> }
];

const images = [
  "/image/bina1.jpg",
  "/image/bina2.jpg",
  "/image/bina3.jpg",
  "/image/bina4.jpg"
];

export default function PembinaanMualaf() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Menghitung lebar area geser agar batas dragging akurat
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center py-12 px-6 bg-slate-50 text-slate-800">
      <div className="max-w-4xl w-full">
        
        {/* NAVIGASI */}
        <div className="mb-8 flex items-center">
            <Link href="/" className="text-xs font-bold uppercase text-emerald-600 flex items-center gap-2 hover:opacity-70">
                <ArrowLeft className="w-4 h-4" /> Kembali
            </Link>
        </div>

        {/* AREA GAMBAR DRAGGABLE (Diperbaiki agar geser lancar) */}
        <div ref={containerRef} className="mb-10 w-full overflow-hidden cursor-grab active:cursor-grabbing border border-slate-200">
            <motion.div 
                className="flex gap-4"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                whileTap={{ cursor: "grabbing" }}
            >
                {images.map((src, idx) => (
                    <img 
                        key={idx}
                        src={src} 
                        alt={`Galeri ${idx}`} 
                        className="w-[320px] h-[320px] object-cover flex-shrink-0" 
                    />
                ))}
            </motion.div>
        </div>

        {/* HEADER */}
        <div className="mb-10">
            <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded uppercase tracking-widest font-bold">Modul 05</span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Pembinaan Asas Mualaf</h1>
            <p className="text-lg text-slate-600 max-w-2xl">Bimbingan intensif pasca-masuk Islam: Pengajaran thaharah, shalat, serta pemurnian akidah untuk membangun pondasi iman yang kokoh.</p>
        </div>

        {/* GRID KURIKULUM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {curriculum.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="mb-4 p-3 bg-emerald-50 w-fit rounded-xl">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}