'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Compass, Radio, Users, Video, VideoOff, FileText, Smartphone, UserCheck, Award, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// PERBAIKAN MUTLAK: Pindahkan array data slideshow ke luar komponen agar referensinya statis dan tidak memicu re-render / error hooks
const slideshowImages = [
  {
    url: '/image/sert1.jpg',
    caption: 'Penyerahan Sertifikat Mualaf Fase Kelulusan Praktik Shalat & Thaharah'
  },
  {
    url: '/image/sert2.jpeg',
    caption: 'Validasi Berkas Legalitas untuk Pengurusan Kolom Agama KTP di Disdukcapil'
  },
  {
    url: '/image/sert3.jpg',
    caption: 'Konsultasi dan Pengarsipan Rekam Jejak Hidayah Mualaf Pembinaan Intensif'
  },
  {
    url: '/image/sert4.jpeg',
    caption: 'Prosesi Ikrar Syahadat dan Pendampingan Administrasi KUA'
  },
  {
    url: '/image/sert5.jpeg',
    caption: 'Pemberian Paket Edukasi Kit Mualaf setelah Lulus Evaluasi Bimbingan'
  },
  {
    url: '/image/sert6.jpg',
    caption: 'Bimbingan Tatap Muka Lanjutan Mengenai Dasar Hukum Islam'
  }
];

export default function KonsultasiInteraktif() {
  const [activeFaq, setActiveCard] = useState(null);
  const [consentPreview, setConsentPreview] = useState('all'); // 'all', 'none'
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fungsi otomatis mengekstrak YouTube Video ID agar Iframe Embed berjalan lancar
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    if (!url.includes('http')) return `https://www.youtube.com/embed/${url}`;
    
    let videoId = '';
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      videoId = urlParams.get('v');
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('youtube.com/embed/')[1]?.split('?')[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  // PERBAIKAN UTAMA: Mengosongkan array dependensi [] karena slideshowImages sekarang sudah statis di luar fungsi
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  // Data 3 Alur Interview & Validasi Sesuai Aturan Baru dengan Link YouTube Riil
  const faqs = [
    {
      id: 'interview-1',
      question: 'Fase 1: Tanya-Jawab Awal (Online)',
      answer: 'Setiap interaksi diawali melalui ruang konsultasi digital via WhatsApp Messenger dan DM media sosial. Di fase ini, konselor merespons pertanyaan kritis calon mualaf secara responsif, mengurai keraguan awal, serta membangun kedekatan emosional (bonding).',
      tag: 'PRAPESAN WHATSAPP & MEDSOS',
      color: 'from-blue-100 via-blue-50 to-white border-blue-250 text-blue-700 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)]',
      patternSvg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='15' stroke='%233b82f6' stroke-width='1' stroke-opacity='0.1' fill='none'/%3E%3C/svg%3E")`,
      mediaType: 'image',
      mediaUrl: '/image/tanya.png'
    },
    {
      id: 'interview-2',
      question: 'Fase 2: Wawancara Utama (Tatap Muka / Offline)',
      answer: 'Tahap penentu yang wajib dilakukan secara tatap muka langsung dengan tim Majelis Tabligh. Di sini, dilakukan interview mendalam untuk membedah motivasi asli masuk Islam, memastikan kebebasan mutlak tanpa paksaan, serta memvalidasi kemurnian pemahaman tauhid sebelum ikrar.',
      tag: 'INTERVIEW INTI TATAP MUKA',
      color: 'from-cyan-100 via-cyan-50 to-white border-cyan-300 hover:border-cyan-500 text-cyan-700 hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)]',
      patternSvg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath d='M0 0 L30 0 L15 25 Z' fill='%2306b6d4' fill-opacity='0.08'/%3E%3C/svg%3E")`,
      mediaType: 'image',
      mediaUrl: '/image/ipung.jpg?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'interview-3',
      question: 'Fase 3: Informed Consent & Syiar Medsos',
      answer: 'Jika calon mualaf bersedia kisah hijrahnya direkam dan disebarkan ke media sosial (YouTube/TikTok) sebagai syiar, maka prosesi syahadat dan rangkuman wawancara diproduksi secara profesional. Jika menolak, privasi dijamin tertutup rapat.',
      tag: 'REGULASI KONTEN MEDIA',
      color: 'from-emerald-100 via-emerald-50 to-white border-emerald-300 hover:border-emerald-500 text-emerald-700 hover:shadow-[0_15px_30px_rgba(16,185,129,0.15)]',
      patternSvg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 0 L25 15 L40 20 L25 25 L20 40 L15 25 L0 20 L15 15 Z' fill='%2310b981' fill-opacity='0.08'/%3E%3C/svg%3E")`,
      mediaType: 'video',
      mediaUrl: 'https://www.youtube.com/watch?v=rjqHxODbOR8'
    }
  ];

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-start py-12 px-6 md:px-12 overflow-y-auto bg-gradient-to-tr from-slate-100 via-white to-slate-50 text-slate-800 box-border">
      
      {/* BACKGROUND DEKORASI SAMAR */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.1)_0%,transparent_55%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0 L42 18 L60 30 L42 42 L30 60 L18 42 L0 30 L18 18 Z' fill='%23000000'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-5xl w-full mt-4 relative z-10">
        
        {/* ATAS: NAVIGASI BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-5 mb-8 gap-y-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 hover:text-blue-700 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Menu Utama
            </button>
          </Link>
          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400 tracking-wider">
            <Compass className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span>SEKOLAH TABLIGH MUHAMMADIYAH // MAJELIS TABLIGH PWM JAWA TENGAH</span>
          </div>
        </div>

        {/* HEADER MODUL */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 block uppercase">STRATEGI TAKTIS // MODUL 02</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mt-1 uppercase">
            KONSULTASI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">INTERAKTIF</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base mt-2 max-w-3xl font-medium">
            Standardisasi baku proses bimbingan pra-syahadat hingga regulasi kelulusan administrasi legalitas mualaf.
          </p>
        </div>

        {/* PANEL SOP BESAR */}
        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl shadow-sm mb-8 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 z-10 relative">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="text-sm font-mono font-bold tracking-widest text-slate-400 uppercase">REGULASI SERTIFIKASI MUALAF</h3>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2">SOP Penerbitan Sertifikat Mualaf</h2>
              <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed max-w-3xl">
                Setiap rangkaian pembinaan diawali lewat interaksi tanya-jawab di WhatsApp dan media sosial, dilanjutkan dengan interview tatap muka langsung. Setiap mualaf akan mendapatkan sertifikat, tapi **Sertifikat Resmi Mualaf baru akan diserahkan setelah yang bersangkutan dinyatakan lulus ujian praktik shalat dan thaharah**. Lembar legalitas ini memiliki kekuatan hukum yang sangat krusial, salah satunya sebagai **syarat administratif utama untuk merubah status kolom agama di KTP**, Kartu Keluarga, pembuatan paspor ibadah haji/umrah, hingga dokumen pencatatan sipil resmi lainnya di KUA.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-xl text-[11px] font-bold text-blue-700">
                  <Smartphone className="w-3.5 h-3.5" /> 1. Chat Medsos & WA Gateway
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-50 border border-cyan-100 rounded-xl text-[11px] font-bold text-cyan-700">
                  <UserCheck className="w-3.5 h-3.5" /> 2. Interview Tatap Muka
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-xl text-[11px] font-bold text-amber-700 animate-pulse">
                  <Award className="w-3.5 h-3.5" /> 3. Lulus Ujian Shalat & Terbit Sertifikat (KTP)
                </span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl w-full lg:w-auto min-w-[280px]">
              <h4 className="text-[10px] font-mono font-bold uppercase text-slate-400 mb-3 tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-500" /> Informed Consent (Izin Medsos)
              </h4>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setConsentPreview('all')}
                  className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold transition-all ${consentPreview === 'all' ? 'bg-emerald-500 border-emerald-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  <span className="flex items-center gap-2"><Video className="w-3.5 h-3.5" /> Bersedia Direkam & Share</span>
                  {consentPreview === 'all' && <CheckCircle className="w-3.5 h-3.5" />}
                </button>
                <button 
                  onClick={() => setConsentPreview('none')}
                  className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold transition-all ${consentPreview === 'none' ? 'bg-rose-500 border-rose-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  <span className="flex items-center gap-2"><VideoOff className="w-3.5 h-3.5" /> Tolak Rekam (Privasi Penuh)</span>
                  {consentPreview === 'none' && <CheckCircle className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDESHOW COMPONENT */}
        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl shadow-sm mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm font-mono font-bold tracking-widest text-slate-400 uppercase">GALERI DOKUMENTASI</h3>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4">Sertifikat Mualaf</h2>
          
          <div className="relative w-full h-[260px] md:h-[400px] bg-slate-950 rounded-2xl overflow-hidden shadow-inner group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slideshowImages[currentSlide].url}
                alt="Dokumentasi Sertifikat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 pt-16 flex flex-col justify-end z-10">
              <p className="text-white font-sans font-bold text-sm md:text-lg tracking-wide">
                {slideshowImages[currentSlide].caption}
              </p>
            </div>

            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white border border-slate-200 text-slate-800 rounded-full shadow-md z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white border border-slate-200 text-slate-800 rounded-full shadow-md z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute top-4 right-4 flex gap-1.5 z-20">
              {slideshowImages.map((_, idx) => (
                <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-5 bg-blue-500' : 'w-1.5 bg-white/60'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* GRID INTERAKTIF KASUS INTERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              layoutId={`card-container-${faq.id}`}
              onClick={() => setActiveCard(faq)}
              className={`relative flex flex-col justify-between p-6 bg-gradient-to-br border rounded-3xl cursor-pointer transition-all duration-300 overflow-hidden min-h-[240px] shadow-sm group ${faq.color}`}
              whileHover={{ scale: 1.025, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div 
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                style={{
                  backgroundImage: faq.patternSvg,
                  backgroundSize: '40px 40px',
                  backgroundPosition: 'right bottom',
                  maskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)',
                  WebkitMaskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)'
                }}
              />

              <div className="relative z-10">
                <span className="inline-block px-2.5 py-1 bg-white/90 border border-slate-100 rounded-md text-[9px] font-mono font-black tracking-wider text-slate-500 mb-4 shadow-sm">
                  {faq.tag}
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mb-3 tracking-wide leading-snug">
                  {faq.question}
                </h3>
              </div>
              
              <div className="relative z-10 pt-3 border-t border-slate-100/10 mt-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                  BUKA DETAIL DATA & ARSIP →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION LAYANAN HOTLINE MESSENGER */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Radio className="w-4 h-4 text-blue-500 animate-pulse" />
            <h3 className="text-sm font-mono font-bold tracking-widest text-slate-400 uppercase">HOTLINE INTEGRASI // DAKWAH JATENG</h3>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">Saluran Respons Langsung Tanya Jawab Mualaf</h2>
          <p className="text-slate-500 text-xs md:text-sm mb-6 max-w-2xl font-medium">
            Tautan langsung menuju ruang obrolan interaktif yang dikelola untuk mendampingi calon mualaf secara privat, aman, dan mendalam.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="https://wa.me" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 text-emerald-800 rounded-2xl font-sans font-bold text-sm transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 fill-[#25d366]" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.755-1.458L0 24zm6.104-3.516c1.689.951 3.446 1.487 5.297 1.488 5.513 0 10.003-4.492 10.006-10.01.003-2.672-1.017-5.186-2.872-7.042C16.685 3.064 14.18 2.046 11.52 2.046 6.002 2.046 1.51 6.538 1.507 12.06c-.001 1.838.484 3.595 1.408 5.148L1.874 21.87l4.287-1.386z"/></svg>
              <span>Hotline WhatsApp privat</span>
            </a>
            <a href="https://telegram.org" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-sky-50 hover:bg-sky-100/70 border border-sky-200 text-sky-800 rounded-2xl font-sans font-bold text-sm transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 fill-[#229ED9]" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.984-1.358 7.111-.168.899-.496 1.201-.816 1.23-.703.064-1.237-.465-1.917-.812-1.064-.543-1.666-.881-2.698-1.275-1.193-.456-.42-1.21.26-1.896.178-.18 3.279-3.008 3.339-3.153.007-.018.014-.085-.008-.098-.022-.014-.085-.005-.121.003-.053.012-.897.57-2.529 1.674-.239.163-.456.244-.651.239-.215-.005-.629-.122-.937-.225-.378-.126-.68-.193-.653-.408.014-.112.296-.227.844-.346 3.385-1.472 5.644-2.443 6.777-2.915 3.204-1.336 3.869-1.569 4.302-1.577.095-.002.308.021.445.132.116.094.148.221.155.311.007.09.002.316-.016.486z"/></svg>
              <span>Telegram Channel</span>
            </a>
            <a href="https://messenger.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-indigo-50 hover:bg-indigo-100/70 border border-indigo-200 text-indigo-800 rounded-2xl font-sans font-bold text-sm transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 fill-[#006FFF]" viewBox="0 0 24 24"><path d="M12 0C5.31 0 0 4.972 0 11.106c0 3.1 1.36 5.897 3.573 7.846v4.205l3.961-2.193a12.57 12.57 0 0 0 4.466.802c6.69 0 12-4.972 12-11.106C24 4.972 18.69 0 12 0zm1.31 14.152l-3.048-3.256-5.945 3.256 6.541-6.953 3.048 3.256 5.945-3.256-6.541 6.953z"/></svg>
              <span>FB Messenger</span>
            </a>
          </div>
        </div>

        {/* DETAIL MODAL PANEL JIKA KARTU DIKLIK */}
        <AnimatePresence>
          {activeFaq && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCard(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />

              <motion.div
                layoutId={`card-container-${activeFaq.id}`}
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
                    <span className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-[9px] font-mono font-black tracking-wider text-blue-600 mb-4 shadow-sm">
                      DOKUMENTASI RIIL // {activeFaq.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-wide font-sans leading-snug">
                      {activeFaq.question}
                    </h3>
                    <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed font-sans mb-6">
                      {activeFaq.answer}
                    </p>
                    
                    
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-400">
                    <span>MAJELIS TABLIGH PWM JATENG</span>
                    <span className="text-blue-600 font-bold">VERIFIED</span>
                  </div>
                </div>

                {/* SISI KANAN MODAL DENGAN PLAYER IFRAME YOUTUBE OTOMATIS */}
                <div className="flex-1 min-h-[250px] md:min-h-full bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative group">
                  {activeFaq.mediaType === 'video' ? (
                    <div className="w-full h-full flex flex-col justify-center items-center bg-slate-950 relative min-h-[300px] md:min-h-[400px]">
                      <iframe
                        src={getYouTubeEmbedUrl(activeFaq.mediaUrl)}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full absolute inset-0 md:max-h-[450px]"
                      ></iframe>
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider text-cyan-400 border border-slate-800 z-10">
                        VIDEO INTERVIEW DOKUMENTASI
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full min-h-[300px] relative">
                      <img 
                        src={activeFaq.mediaUrl} 
                        alt={activeFaq.question} 
                        className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider text-blue-700 border border-blue-200 shadow-sm">
                        BUKTI ARSIP INTERVIEW NYATA
                      </div>
                    </div>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* BOTTOM BANNER QUOTE */}
        <div className="p-4 bg-white border border-slate-200/80 rounded-2xl text-center shadow-sm">
          <p className="text-xs md:text-sm italic font-medium text-slate-500">
            "SOP Interview terpadu memastikan gerbang masuk Islam dilewati dengan landasan ilmu, kebebasan, dan kesadaran tauhid yang kokoh."
          </p>
        </div>

      </div>
    </main>
  );
}