'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Users, BrainCircuit, TrendingUp, ShieldCheck, Wallet, HandCoins, Building, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  { 
    title: "Pendampingan Sosio-Kultur", 
    desc: "Membangun jembatan komunikasi antara mualaf dengan keluarga besar dan masyarakat agar tercipta lingkungan yang inklusif.", 
    detail: "Termasuk pendampingan mediasi konflik keluarga, sosialisasi lingkungan, dan integrasi di komunitas Muslim lokal.",
    icon: <Users className="w-6 h-6 text-rose-600" /> 
  },
  { 
    title: "Penguatan Mental", 
    desc: "Memberikan dukungan psikologis dan spiritual untuk menghadapi tekanan dari lingkungan luar serta mengokohkan identitas Muslim.", 
    detail: "Sesi konseling rutin, pendampingan saat terjadi diskriminasi, dan penguatan aqidah agar tetap teguh dalam iman.",
    icon: <BrainCircuit className="w-6 h-6 text-rose-600" /> 
  },
  { 
    title: "Kemandirian Ekonomi", 
    desc: "Pemberdayaan keterampilan kerja dan kewirausahaan agar mualaf memiliki stabilitas finansial mandiri.", 
    detail: "Pelatihan keterampilan produktif, modal usaha mikro untuk mualaf, dan penyaluran kerja berbasis kemitraan.",
    icon: <TrendingUp className="w-6 h-6 text-rose-600" /> 
  }
];

const funding = [
  { 
    title: "Kebutuhan Pendanaan Rutin", 
    items: [
      "Konsumsi pada kegiatan pensyahadatan mualaf", 
      "Paket hadiah mualaf (Mushaf, Iqro, mukena/jilbab, sarung, peci, alat sholat)", 
      "Kegiatan administrasi"
    ],
    icon: <HandCoins className="w-6 h-6 text-emerald-600" /> 
  },
  { 
    title: "Pengembangan & Operasional", 
    items: [
      "Gaji & operasional tim media kreatif", 
      "Program pendampingan sosio-kultur", 
      "Progres pembangunan Rumah Singgah Mualaf"
    ],
    icon: <Building className="w-6 h-6 text-emerald-600" /> 
  }
];

export default function IntegrasiIstiqamah() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center py-12 px-6 bg-slate-50 text-slate-800">
      <div className="max-w-4xl w-full">
        
        <div className="mb-8 flex items-center">
            <Link href="/" className="text-xs font-bold uppercase text-rose-600 flex items-center gap-2 hover:opacity-70">
                <ArrowLeft className="w-4 h-4" /> Kembali
            </Link>
        </div>

        <div className="mb-12">
            <span className="font-mono text-[10px] text-rose-600 bg-rose-50 px-2 py-1 rounded uppercase tracking-widest font-bold">Modul 06</span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Integrasi & Istiqamah</h1>
            <p className="text-lg text-slate-600 max-w-2xl">Pendampingan berkelanjutan untuk memastikan mualaf berbaur dengan masyarakat, memiliki mental yang tangguh, dan mandiri secara ekonomi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((item, idx) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-4 p-3 bg-rose-50 w-fit rounded-xl">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
              <div className="mt-auto text-xs text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-100 italic">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <Building className="text-emerald-600" /> Pendanaan Mualaf Center Aya Sofya Purwokerto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funding.map((item, idx) => (
              <div key={idx} className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-bold text-emerald-900 mb-4">{item.title}</h4>
                <ul className="space-y-2">
                  {item.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                      <Zap className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl flex items-center gap-4">
            <ShieldCheck className="w-12 h-12 text-rose-500 shrink-0" />
            <div>
                <h3 className="font-bold text-xl">Menjaga Hidayah</h3>
                <p className="text-slate-400 text-sm">Istiqamah adalah buah dari lingkungan yang mendukung, ilmu yang diamalkan, dan dukungan keberlanjutan umat.</p>
            </div>
        </div>
      </div>
    </main>
  );
}