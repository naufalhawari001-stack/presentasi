'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

// Memanggil data langsung dari file JSON lokal yang sudah kamu buat
import dialogData from '../../data/dialogData.json';

export default function ApologetikaDialog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);
  const itemsPerPage = 10;
  
  // Menggunakan dialogData yang diimpor
  const totalPages = Math.ceil(dialogData.length / itemsPerPage);
  const currentData = dialogData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center py-12 px-6 bg-slate-50 text-slate-800">
      <div className="max-w-4xl w-full">
        {/* HEADER */}
        <div className="mb-8 border-b border-slate-200 pb-6 flex justify-between items-center">
            <Link href="/" className="text-xs font-bold uppercase text-purple-600 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Kembali
            </Link>
            <span className="font-mono text-[10px] text-slate-400">MODUL APOLOGETIKA // 100 BANK DATA</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">100 Bank Tanya Jawab Apologetika</h1>
        <p className="text-slate-500 mb-10">Klik pertanyaan untuk melihat jawaban telak dan dalilnya.</p>

        {/* LIST TANYA JAWAB */}
        <div className="space-y-4 mb-10">
          {currentData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <button 
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded uppercase">{item.tag}</span>
                  <h3 className="font-bold text-slate-900 mt-2">{item.id}. {item.question}</h3>
                </div>
                {expandedId === item.id ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 whitespace-pre-line"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-4">
          <button 
            disabled={currentPage === 1} 
            onClick={() => { setCurrentPage(p => p - 1); setExpandedId(null); }} 
            className="p-2 bg-white border border-slate-200 rounded-full disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-bold font-mono">Halaman {currentPage} dari {totalPages}</span>
          <button 
            disabled={currentPage === totalPages} 
            onClick={() => { setCurrentPage(p => p + 1); setExpandedId(null); }} 
            className="p-2 bg-white border border-slate-200 rounded-full disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </main>
  );
}