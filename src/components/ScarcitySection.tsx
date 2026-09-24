import React from 'react';
import { MessageCircle, ShieldAlert, ArrowRight, AlertTriangle } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const ScarcitySection: React.FC = () => {
  const scarcityWhatsAppUrl = getWhatsAppUrl(
    'Olá! Tenho interesse na primeira turma com apenas 3 vagas do Curso Profissional de Banhista da PetsCelly e gostaria de reservar a minha.'
  );

  return (
    <section className="py-20 sm:py-28 bg-[#05060A] text-white relative overflow-hidden border-t border-white/[0.07]">
      {/* Background glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/[0.12] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-xs font-mono font-bold uppercase tracking-widest text-red-300 mb-6">
          <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          <span>Limite Rigoroso de Capacidade</span>
        </span>

        {/* Big 3 Vagas */}
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-red-400 tracking-tight leading-none drop-shadow-[0_0_40px_rgba(225,29,42,0.35)]">
          3 VAGAS.
        </h2>

        <div className="mt-6 text-xl sm:text-2xl font-light text-slate-400 space-y-1 font-display">
          <p className="line-through text-slate-600 text-lg">Não 10.</p>
          <p className="line-through text-slate-600 text-lg">Não 20.</p>
          <p className="font-extrabold text-white text-2xl sm:text-3xl pt-2">
            Apenas 3 alunos na primeira turma.
          </p>
        </div>

        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Depois que as 3 vagas forem preenchidas, as inscrições serão encerradas.
          Novas inscrições serão abertas somente para uma próxima turma.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href={scarcityWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-emerald inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-xl shadow-emerald-950/60 transition-all border border-emerald-400/30"
          >
            <MessageCircle className="w-5 h-5 text-emerald-100" />
            <span>QUERO MINHA VAGA</span>
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-400 font-mono">
          Atendimento direto com a PetsCelly via WhatsApp para confirmação de disponibilidade
        </p>
      </div>
    </section>
  );
};
