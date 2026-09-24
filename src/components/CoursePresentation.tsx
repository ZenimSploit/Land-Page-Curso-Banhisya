import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, Layers, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const CoursePresentation: React.FC = () => {
  const presentationWhatsAppUrl = getWhatsAppUrl(
    'Olá! Quero saber mais detalhes sobre a metodologia do Curso Profissional de Banhista da PetsCelly.'
  );

  return (
    <section id="o-curso" className="py-20 sm:py-28 bg-[#07090E] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/[0.08] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121622] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formação Completa</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            VOCÊ NÃO PRECISA COMEÇAR SABENDO.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-white">
              VOCÊ PODE APRENDER.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Você não precisa ter experiência prévia com animais ou com estética pet. O método PetsCelly foi construído para levar qualquer pessoa do zero absoluto até a segurança na execução.
          </p>
        </div>

        {/* Master Badge Centerpiece */}
        <div className="mt-14 max-w-3xl mx-auto glass-panel-highlight rounded-3xl p-8 sm:p-10 border border-red-500/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-400 block mb-2">
            FORMAÇÃO PRESENCIAL PRÁTICA
          </span>

          <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
            CURSO PROFISSIONAL DE BANHISTA
          </h3>

          <div className="mt-3 flex items-center justify-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-200">
            <span className="text-red-400">BANHO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-white">HIGIENE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-red-400">PENTEADO</span>
          </div>

          <div className="mt-8 pt-8 border-t border-white/[0.08] text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            <p>
              Você não vai passar semanas apenas assistindo alguém trabalhar. Você vai aprender dentro de um Banho e Tosa de verdade, acompanhando a rotina real e praticando cada etapa do atendimento.
            </p>
          </div>
        </div>

        {/* 3 Pillars in Dark Tech Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/[0.08]">
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-white tracking-tight">
              Segurança e Manejo Respeitoso
            </h4>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Aprenda a conter e posicionar o animal sem causar estresse ou acidentes, conquistando a confiança do pet e a tranquilidade do tutor.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/[0.08]">
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400 flex items-center justify-center mb-5">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-white tracking-tight">
              Técnica Profissional Completa
            </h4>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Do corte de unhas à limpeza auricular, da secagem com soprador ao desembolo e penteado estético com acabamento impecável.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/[0.08]">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-white tracking-tight">
              Rotina Real de Atendimento
            </h4>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Vivencie o ritmo, a postura ergonômica e a organização de bancada que pet shops procuram ao contratar um banhista freelancer.
            </p>
          </div>
        </div>

        {/* Secondary Link */}
        <div className="mt-10 text-center">
          <a
            href={presentationWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a equipe PetsCelly no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
