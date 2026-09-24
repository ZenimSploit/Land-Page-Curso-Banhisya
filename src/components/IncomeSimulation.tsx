import React, { useState } from 'react';
import { DollarSign, Calendar, AlertCircle, ArrowRight, MessageCircle, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const IncomeSimulation: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(2); // Default to 2 days/week

  const simulationWhatsAppUrl = getWhatsAppUrl(
    'Olá! Gostaria de conversar sobre a renda extra e as oportunidades do Curso Profissional de Banhista da PetsCelly.'
  );

  const simulationCards = [
    {
      days: 1,
      daysLabel: '1 DIÁRIA POR SEMANA',
      subtitle: 'Folgas ou Finais de Semana',
      diariasMonth: '4 diárias no mês',
      monthlyIncome: '600',
      description: 'Ideal para quem trabalha durante a semana e quer fazer uma renda complementar nos sábados.',
      tag: 'Início Seguro',
    },
    {
      days: 2,
      daysLabel: '2 DIÁRIAS POR SEMANA',
      subtitle: 'Sextas e Sábados',
      diariasMonth: '8 diárias no mês',
      monthlyIncome: '1.200',
      description: 'A opção mais comum para banhistas freelancers nos dias de pico de movimento dos pet shops.',
      highlight: true,
      tag: 'Mais Popular',
    },
    {
      days: 3,
      daysLabel: '3 DIÁRIAS POR SEMANA',
      subtitle: 'Meio Período / Escala Flexível',
      diariasMonth: '12 diárias no mês',
      monthlyIncome: '1.800',
      description: 'Excelente para quem possui dias livres e quer transformar a atividade em renda substancial.',
      tag: 'Alta Rentabilidade',
    },
  ];

  return (
    <section id="renda" className="py-20 sm:py-28 bg-[#090C14] border-y border-white/[0.07] relative overflow-hidden">
      {/* Subtle background light cones */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/[0.07] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/[0.04] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141824] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Simulador de Mercado Freelancer</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            UMA HABILIDADE QUE PODE GERAR RENDA EXTRA
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Veja como a atuação como banhista pode complementar sua renda mensal:
          </p>
        </div>

        {/* Dashboard Metric Bar */}
        <div className="mt-12 max-w-4xl mx-auto glass-panel rounded-2xl p-4 sm:p-6 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Parâmetro de Cálculo da Simulação
              </span>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-display">
                Base média de <span className="text-red-400">R$ 150</span> por diária
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/[0.04] px-4 py-2.5 rounded-xl border border-white/[0.06]">
            <span>Faixa padrão de mercado: </span>
            <span className="font-bold text-slate-200">R$ 120 a R$ 180 / dia</span>
          </div>
        </div>

        {/* 3 Dashboard Simulation Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {simulationCards.map((card) => {
            const isSelected = selectedPlan === card.days;
            return (
              <div
                key={card.days}
                onClick={() => setSelectedPlan(card.days)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  card.highlight
                    ? 'glass-panel-highlight border-red-500/50 shadow-[0_0_40px_-10px_rgba(225,29,42,0.25)] md:scale-105'
                    : 'glass-panel glass-panel-hover'
                }`}
              >
                {/* Badge Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                    Opção 0{card.days}
                  </span>

                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      card.highlight
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                        : 'bg-white/[0.06] text-slate-400 border border-white/[0.08]'
                    }`}
                  >
                    {card.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-extrabold text-white tracking-tight">
                    {card.daysLabel}
                  </h3>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {card.subtitle}
                  </span>

                  {/* Value display */}
                  <div className="mt-6 pt-6 border-t border-white/[0.08]">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Renda extra estimada:
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-sm font-bold text-slate-400">~</span>
                      <span className="text-2xl font-bold text-slate-300 font-display">R$</span>
                      <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                        {card.monthlyIncome}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 ml-1">/mês</span>
                    </div>

                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{card.diariasMonth}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Card footer indicator */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                  <span className="text-slate-400">Pagamento diário na entrega</span>
                  <span className="font-semibold text-emerald-400">Freelancer</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Key Operational Advantages */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl glass-panel border border-white/[0.06] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-xs text-slate-300 font-medium">
              Você escolhe os dias em que pode atender
            </span>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-white/[0.06] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-xs text-slate-300 font-medium">
              Ideal para folgas ou finais de semana
            </span>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-white/[0.06] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-xs text-slate-300 font-medium">
              Demanda frequente em pet shops locais
            </span>
          </div>
        </div>

        {/* Mandatory Transparency Disclaimer Box */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-xl bg-[#121622]/90 border border-white/[0.08] text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-200">Importante sobre as simulações:</strong> Os valores acima são simulações matemáticas ilustrativas baseadas na média de diárias freelancers praticadas no mercado (R$ 120 a R$ 180). O curso não garante renda, faturamento mínimo ou contratação. Os ganhos reais dependem da dedicação pessoal, pontualidade, qualidade técnica, disponibilidade e negociação direta com os estabelecimentos.
          </p>
        </div>

        {/* Action Link */}
        <div className="mt-10 text-center">
          <a
            href={simulationWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar dúvidas sobre a rotina freelancer no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
