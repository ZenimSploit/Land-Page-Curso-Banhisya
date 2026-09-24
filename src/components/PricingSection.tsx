import React from 'react';
import { Check, ShieldCheck, Sparkles, MessageCircle, AlertCircle, ArrowRight, Award } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const PricingSection: React.FC = () => {
  const pricingWhatsAppUrl = getWhatsAppUrl(
    'Olá! Quero garantir minha vaga na primeira turma do Curso Profissional de Banhista da PetsCelly.'
  );

  const benefitsList = [
    'Aula teórica com fundamentos e segurança',
    '7 aulas práticas dentro do Banho e Tosa',
    'Banho profissional completo',
    'Higiene (corte de unhas, ouvidos, almofadas)',
    'Secagem com soprador e secador profissional',
    'Técnicas de escovação sem tracionar a pele',
    'Desembolo seguro e sem dor para o pet',
    'Penteados comerciais e acessórios',
    'Finalização estética e apresentação ao tutor',
    'Rotina profissional e organização de bancada',
    'Prática supervisionada direta com a instrutora',
    'Certificado de conclusão do curso livre',
  ];

  return (
    <section id="investimento" className="py-20 sm:py-28 bg-[#090C14] border-t border-white/[0.07] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-red-600/[0.1] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141824] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Condição Exclusiva de Lançamento</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            TURMA INAUGURAL
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A primeira turma terá uma condição especial de lançamento.
          </p>
        </div>

        {/* Masterpiece Pricing Card */}
        <div className="mt-14 max-w-2xl mx-auto relative group">
          {/* Subtle outer glow border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/40 via-rose-500/30 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative rounded-3xl glass-panel-highlight border-2 border-red-500/50 shadow-2xl p-6 sm:p-10 overflow-hidden">
            {/* Top banner tag */}
            <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-1.5 text-center text-white text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm">
              Condição Especial da Primeira Turma
            </div>

            <div className="pt-6 text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400">
                TURMA INAUGURAL
              </span>

              {/* Big Price */}
              <div className="mt-3 flex items-baseline justify-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-400 font-display">
                  R$
                </span>
                <span className="font-display text-6xl sm:text-7xl font-black text-white tracking-tight tabular-nums drop-shadow-[0_0_30px_rgba(225,29,42,0.35)]">
                  997
                </span>
                <span className="text-xl sm:text-2xl font-bold text-slate-300">
                  à vista
                </span>
              </div>

              {/* Parcelamento */}
              <div className="mt-1 text-base sm:text-lg font-semibold text-rose-300">
                ou 12x de R$ 99
              </div>

              {/* Indicação visual solicitada: 8 aulas presenciais • 4 semanas • máximo 3 alunos • certificado de conclusão */}
              <div className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-950/80 via-red-900/60 to-red-950/80 border border-red-500/40 text-xs sm:text-sm font-display font-extrabold text-red-200 shadow-[0_0_20px_-5px_rgba(225,29,42,0.4)]">
                <Award className="w-4 h-4 text-red-400 shrink-0" />
                <span>8 aulas presenciais • 4 semanas • máximo 3 alunos • certificado de conclusão</span>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Valor promocional válido exclusivamente para a turma inaugural
              </p>

              {/* 4 Pillars Summary Grid */}
              <div className="mt-7 py-4 px-4 bg-white/[0.03] rounded-xl border border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-semibold text-slate-200">
                <div className="p-1">
                  <span className="block text-white font-bold">4 semanas</span>
                  <span className="text-[11px] text-slate-400 font-normal">Duração total</span>
                </div>
                <div className="p-1 border-l border-white/[0.08]">
                  <span className="block text-white font-bold">8 aulas presenciais</span>
                  <span className="text-[11px] text-slate-400 font-normal">Mão na massa</span>
                </div>
                <div className="p-1 border-l border-white/[0.08]">
                  <span className="block text-white font-bold">2 aulas por semana</span>
                  <span className="text-[11px] text-slate-400 font-normal">Ritmo ideal</span>
                </div>
                <div className="p-1 border-l border-white/[0.08]">
                  <span className="block text-red-400 font-bold">Máximo 3 alunos</span>
                  <span className="text-[11px] text-slate-400 font-normal">Supervisão 1 a 1</span>
                </div>
              </div>

              {/* Checklist */}
              <div className="mt-8 text-left border-t border-white/[0.08] pt-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-4">
                  Tudo o que está incluído na sua formação:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefitsList.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-9 pt-4">
                <a
                  href={pricingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-emerald flex items-center justify-center gap-3 w-full py-4 px-6 text-base sm:text-lg font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-xl shadow-emerald-950/60 transition-all border border-emerald-400/30 text-center"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-100" />
                  <span>QUERO GARANTIR MINHA VAGA</span>
                </a>

                {/* Scarcity Note Below Button */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-red-400">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span>APENAS 3 VAGAS NA TURMA INAUGURAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
