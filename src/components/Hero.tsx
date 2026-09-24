import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../types';
import heroImage from '../assets/images/ambiente_real_hero.jpg';

export const Hero: React.FC = () => {
  const heroWhatsAppUrl = getWhatsAppUrl(
    'Olá! Vi o Curso Profissional de Banhista da PetsCelly e gostaria de mais informações para garantir minha vaga na turma inaugural.'
  );

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden bg-[#07090E] bg-tech-grid">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-red-600/[0.12] rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-rose-600/[0.06] rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-32 w-[450px] h-[450px] bg-emerald-600/[0.04] rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & High-impact Headings */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Tech unboxed metadata badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-[#131724]/90 border border-white/[0.08] text-[11px] sm:text-xs font-semibold tracking-wide text-slate-300 mb-5 sm:mb-6 shadow-inner max-w-full">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444] shrink-0" />
              <span className="text-white font-bold uppercase">Curso Banhista Profissional PetsCelly</span>
              <span className="text-slate-500">/</span>
              <span className="text-red-400">Presencial & Prático</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1] text-balance">
              E SE O SEU AMOR POR ANIMAIS PUDESSE SE TRANSFORMAR EM UMA{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 drop-shadow-[0_0_35px_rgba(225,29,42,0.35)]">
                  RENDA EXTRA?
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 text-lg sm:text-2xl font-bold text-slate-100 font-display">
              Aprenda uma profissão que pode caber na sua rotina.
            </p>

            {/* Supporting paragraph */}
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Desenvolva uma habilidade prática para atuar como banhista freelancer em pet shops ou iniciar sua caminhada no mercado pet.
            </p>

            {/* Market rate callout box - High Tech HUD Style */}
            <div className="mt-8 w-full max-w-xl glass-panel-highlight rounded-2xl p-5 sm:p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.08] rounded-full blur-xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>Média estimada de mercado para atuação freelancer</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      R$ 120 a R$ 180
                    </span>
                    <span className="text-sm font-semibold text-slate-400">
                      / diária
                    </span>
                  </div>
                </div>

                <div className="shrink-0 sm:border-l sm:border-white/[0.1] sm:pl-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.06] text-[11px] font-semibold text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Alta Procura
                  </span>
                </div>
              </div>

              {/* Mandatory Legal Disclaimer */}
              <p className="mt-3 text-[11px] text-slate-400 leading-snug border-t border-white/[0.06] pt-3">
                *Valores médios informados pelo mercado pet para atuação freelancer. Não representam garantia de contratação ou ganho fixo.
              </p>
            </div>

            {/* Bloco de Investimento - Hero */}
            <div className="mt-6 w-full max-w-xl rounded-2xl glass-panel-highlight border border-red-500/40 p-5 sm:p-6 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-36 h-36 bg-red-600/[0.1] rounded-full blur-xl pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0" />

              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                  TURMA INAUGURAL
                </span>
                <span className="px-2 py-0.5 rounded bg-red-950/80 border border-red-500/30 text-[10px] font-bold text-red-300 uppercase tracking-wider">
                  Condição Exclusiva
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-[0_0_20px_rgba(225,29,42,0.35)]">
                    R$ 997
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-300">
                    à vista
                  </span>
                </div>
                <span className="text-sm sm:text-base font-semibold text-rose-300">
                  ou 12x de R$ 99
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 font-medium border-t border-white/[0.08] pt-3">
                8 aulas presenciais • 4 semanas • máximo 3 alunos • certificado de conclusão
              </p>

              {/* CTAs */}
              <div className="mt-5">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-emerald flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base tracking-wide shadow-xl shadow-emerald-950/60 transition-all border border-emerald-400/30"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-100" />
                  <span>QUERO GARANTIR MINHA VAGA</span>
                  <ArrowRight className="w-4 h-4 text-emerald-200" />
                </a>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <a
                href="#o-curso"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors"
              >
                <span>Conhecer detalhes do curso e cronograma</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Quick trust row */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>Turma de até 3 alunos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>4 semanas de formação</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>7 aulas 100% práticas</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Real Media Asset with Dark Tech Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backlight halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600/30 via-rose-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-75" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0E121B] shadow-2xl">
                <img
                  src={heroImage}
                  alt="Ambiente 100% Real - Espaço de Banho e Tosa profissional na PetsCelly São José/SC"
                  className="w-full h-[320px] xs:h-[380px] sm:h-[480px] object-cover object-center scale-[1.01] hover:scale-105 transition-transform duration-700"
                />

                {/* Dark gradient overlay for typography readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-[#07090E]/30 pointer-events-none" />

                {/* Floating Tech Badge Top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-full bg-[#07090E]/80 backdrop-blur-md border border-white/[0.1] text-[11px] font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Ambiente 100% Real</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-full bg-red-950/80 backdrop-blur-md border border-red-500/30 text-[11px] font-bold text-red-200">
                    Apenas 3 Vagas
                  </div>
                </div>

                {/* Bottom glass card summary */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090C14]/85 backdrop-blur-xl border border-white/[0.1] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                        PetsCelly Banho e Tosa
                      </span>
                      <h3 className="font-display text-base font-extrabold text-white">
                        Prática com Animais Reais
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-white/[0.08] text-[11px] font-semibold text-slate-300">
                      São José/SC
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-400">
                    Supervisão individual para você aprender o manejo, secagem e penteado com total segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
