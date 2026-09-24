import React from 'react';
import { Users, CheckCircle2, UserCheck, ShieldAlert, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const SmallClasses: React.FC = () => {
  const smallClassesUrl = getWhatsAppUrl(
    'Olá! Gostaria de saber a disponibilidade de vagas para a turma de apenas 3 alunos do Curso de Banhista da PetsCelly.'
  );

  return (
    <section className="py-20 sm:py-28 bg-[#090C14] border-t border-white/[0.07] relative overflow-hidden">
      {/* Background glow behind 3 stations */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[400px] bg-red-600/[0.08] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual representation of 3 dedicated stations in modern tech dark style */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="glass-panel-highlight rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-10 border border-red-500/40 relative shadow-2xl">
              <div className="flex items-center justify-between mb-4 gap-2">
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider sm:tracking-widest text-red-400">
                  TURMA EXCLUSIVA DE 3 ALUNOS
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-500/30 shrink-0">
                  100% Presencial
                </span>
              </div>

              {/* 3 Student Stations */}
              <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 text-center my-4 sm:my-6">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className="p-2.5 xs:p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0C0F18]/90 border border-white/[0.08] hover:border-red-500/50 shadow-md flex flex-col items-center justify-center transition-all duration-300 group hover:scale-[1.03]"
                  >
                    <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-red-950/70 border border-red-500/30 text-red-400 font-extrabold flex items-center justify-center text-xs xs:text-sm sm:text-lg mb-1.5 sm:mb-2 font-mono group-hover:shadow-[0_0_15px_rgba(225,29,42,0.4)] transition-all">
                      0{num}
                    </div>
                    <span className="text-[10px] xs:text-xs font-bold text-white leading-tight">
                      Aluno {num}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 font-medium leading-tight">
                      Supervisão
                    </span>
                    <div className="mt-1.5 sm:mt-2 flex items-center gap-1 text-[8px] xs:text-[9px] text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Ativo</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Compare box */}
              <div className="space-y-3 pt-5 border-t border-white/[0.08] text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Você realiza todos os procedimentos com supervisão direta</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>A instrutora ao seu lado em cada corte de unha e banho</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ritmo respeitado para você tirar todas as dúvidas na hora</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Argumentation */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141824] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Metodologia Exclusiva</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              POR QUE APENAS 3 ALUNOS?
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                Porque o objetivo não é colocar dezenas de pessoas em uma sala.
              </p>
              <p className="font-extrabold text-white text-xl sm:text-2xl font-display">
                O objetivo é{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-300">
                  ensinar de verdade.
                </span>
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Durante as aulas práticas, cada aluno precisa ter oportunidade de executar os procedimentos, receber correções e acompanhar de perto a instrutora.
              </p>
            </div>

            {/* Big Highlight Callout */}
            <div className="mt-8 p-6 rounded-2xl glass-panel-highlight border border-red-500/40">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 block mb-1">
                COMPROMISSO PEDAGÓGICO
              </span>
              <div className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                MÁXIMO DE 3 ALUNOS POR TURMA
              </div>
            </div>

            <div className="mt-8">
              <a
                href={smallClassesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-emerald inline-flex items-center gap-2.5 px-7 py-4 text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/60 transition-all border border-emerald-400/30"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>QUERO MINHA VAGA NA TURMA DE 3</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
