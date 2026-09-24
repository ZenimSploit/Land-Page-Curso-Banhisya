import React from 'react';
import { MessageCircle, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const FinalCta: React.FC = () => {
  const finalWhatsAppUrl = getWhatsAppUrl(
    'Olá! Tenho interesse em me inscrever no Curso Profissional de Banhista da PetsCelly. Gostaria de saber como garantir minha vaga.'
  );

  return (
    <section className="py-20 sm:py-32 bg-[#08090E] border-t border-white/[0.07] relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-red-600/[0.1] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121622] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Decisão & Futuro</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight text-balance">
          SUA NOVA HABILIDADE PODE COMEÇAR AQUI.
        </h2>

        {/* Text */}
        <div className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed space-y-2">
          <p>Você pode continuar procurando uma forma de aumentar sua renda.</p>
          <p className="font-semibold text-white">
            Ou pode começar a aprender uma habilidade que poderá utilizar para buscar essa oportunidade.
          </p>
        </div>

        {/* Triple Destaque Card */}
        <div className="mt-12 py-8 px-6 max-w-2xl mx-auto rounded-3xl glass-panel-highlight border border-red-500/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] font-display">
            <div className="py-2 sm:py-0">
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight block">
                APRENDA.
              </span>
              <span className="text-xs text-slate-400 font-sans mt-0.5 block">
                Técnica & Segurança
              </span>
            </div>

            <div className="py-2 sm:py-0">
              <span className="text-xl sm:text-2xl font-black text-red-400 tracking-tight block">
                PRATIQUE.
              </span>
              <span className="text-xs text-slate-400 font-sans mt-0.5 block">
                No Banho e Tosa Real
              </span>
            </div>

            <div className="py-2 sm:py-0">
              <span className="text-xl sm:text-2xl font-black text-emerald-400 tracking-tight block">
                PREPARE-SE.
              </span>
              <span className="text-xs text-slate-400 font-sans mt-0.5 block">
                Para Trabalhar
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <h3 className="font-display text-lg sm:text-xl font-extrabold text-white">
              Curso Profissional de Banhista PetsCelly
            </h3>
            <p className="text-xs sm:text-sm font-bold text-red-400 mt-1">
              Banho • Higiene • Penteado
            </p>
            <p className="text-xs text-slate-400 mt-1">
              4 semanas • 8 aulas • 3 alunos por turma • Certificado incluso
            </p>
          </div>

          {/* Big CTA */}
          <div className="mt-8">
            <a
              href={finalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-emerald inline-flex items-center justify-center gap-3 w-full py-4 px-8 text-base sm:text-lg font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-xl shadow-emerald-950/60 transition-all border border-emerald-400/30"
            >
              <MessageCircle className="w-5 h-5 text-emerald-100" />
              <span>QUERO GARANTIR MINHA VAGA</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400 font-mono">
            Apenas 3 alunos na primeira turma. Inscrições abertas via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};
