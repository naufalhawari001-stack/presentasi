'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, UserCheck, FileText, CheckCircle, FileCheck, Phone, Globe, ClipboardList } from 'lucide-react';

// Tambahkan daftar gambar slideshow di sini
const slides = [
  "/image/slide1.jpeg",
  "/image/slide2.jpeg",
  "/image/slide3.jpg",
  "/image/slide4.jpg",
  "/image/slide5.jpg",
];

export default function IkrarLegalitas() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efek Slideshow Otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center py-12 px-6 bg-slate-50 text-slate-800">
      <div className="max-w-4xl w-full">
        {/* NAVIGASI & HEADER */}
        <div className="mb-8 border-b border-slate-200 pb-6 flex justify-between items-center">
            <Link href="/" className="text-xs font-bold uppercase text-emerald-600 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Kembali
            </Link>
            <span className="font-mono text-[10px] text-slate-400">MODUL 04 // LEGALITAS MUALAF</span>
        </div>

        {/* KOMPONEN SLIDESHOW */}
        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-10 shadow-lg">
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentIndex}
              src={slides[currentIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover"
              alt="Slide Show"
            />
          </AnimatePresence>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <div key={i} className={`h-2 w-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">04. Ikrar Syahadat & Legalitas</h1>
        <p className="text-slate-500 mb-10">Prosedur penuntunan syahadat dan integrasi dokumen kependudukan negara.</p>

        {/* PERSYARATAN DOKUMEN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-emerald-700">Syarat WNI</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Foto Kopi KTP</li>
              <li>• Foto Kopi KK</li>
              <li>• Foto Kopi Akta Lahir</li>
              <li>• Foto Kopi Surat Baptis (Jika Ada)</li>
              <li>• Foto 4 x 6 (2 Lembar)</li>
              <li>• Materai 10rb (2 Lembar)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-emerald-700">Syarat WNA</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Foto Kopi Paspor</li>
              <li>• Foto Kopi KK (Jika ada)</li>
              <li>• Foto 4 x 6 (4 Lembar)</li>
              <li>• Materai 10rb (2 Lembar)</li>
            </ul>
          </div>
        </div>

        {/* INFORMASI BIAYA & KONTAK */}
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <h3 className="font-bold text-emerald-800">Biaya Masuk Islam: GRATIS</h3>
                <p className="text-sm text-emerald-700">Jika ada tim kami yang meminta biaya, silakan segera laporkan.</p>
            </div>
            <div className="flex gap-4">
                <a href="https://wa.me/62895324383400" className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold">
                    <Phone className="w-4 h-4" /> 0895324383400
                </a>
                <a href="https://ayasofya.id" className="flex items-center gap-2 bg-white text-emerald-600 border border-emerald-200 px-4 py-2 rounded-xl text-sm font-bold">
                    <Globe className="w-4 h-4" /> ayasofya.id
                </a>
            </div>
        </div>

        {/* FORMULIR CALON MUALAF */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-900">
            <ClipboardList className="text-emerald-600" /> Formulir Data Diri Calon Mualaf
          </h3>
          <p className="text-xs text-slate-400 mb-6 italic">Mohon dibantu form ini diisi terlebih dahulu, agar kami bisa mudah dan cepat dalam follow up. 🙏🙏</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["NAMA", "TTL", "LAKI-LAKI/PEREMPUAN", "ALAMAT SAAT INI", "NOMOR KONTAK", "PROFESI", "AGAMA ASAL", "STATUS PERNIKAHAN"].map((field) => (
              <div key={field} className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">{field}</label>
                <input type="text" className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm focus:border-emerald-500 outline-none" />
              </div>
            ))}
            <div className="md:col-span-2 flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">ALASAN/MOTIVASI MASUK ISLAM</label>
                <textarea className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm h-24 focus:border-emerald-500 outline-none"></textarea>
            </div>
            <button type="submit" className="md:col-span-2 bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 mt-4">
                Kirim Data Pendaftaran
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}